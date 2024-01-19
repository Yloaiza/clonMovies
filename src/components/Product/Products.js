import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeIcon from "@mui/icons-material/Home";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useCart } from "../../hooks/useCart";

export function Product({ product }) {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NavigateNextIcon />,
    prevArrow: <NavigateBeforeIcon />,
  };

  const settingsLeft = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    vertical: true,
    slidesToScroll: 1,
    nextArrow: <KeyboardArrowDownIcon />,
    prevArrow: <ExpandLessIcon />,
  };

  
  const [selectedImage, setSelectedImage] = useState(product.imagenes[0]);

  const [number, setNumber] = useState(0);
  const [desplegableVisible, setDesplegableVisible] = useState(false);

  
  const incrementNumber = () => {
    setNumber(number + 1);
  };

  const decrementNumber = () => {
    setNumber(number - 1);
  };

  const [desplegableAbierto, setDesplegableAbierto] = useState({
    descripcion: false,
    especificaciones: false,
    composicion: false,
    cuidados: false,
    descubreMas: false,
  });

  const toggleDesplegable = (seccion, index) => {
    setDesplegableAbierto((prevState) => ({
      ...prevState,
      [seccion]: !prevState[seccion],
    }));
  
    if (seccion === "imagen" && index !== undefined) {
      setSelectedImage(product.imagenes[index]);
    }
  };
  
  const { addToCart, removeFromCart, cart } = useCart();

  const checkProductInCart = (product) => {
    return cart.some((item) => item.id_ref === product.id_ref);
  };
  const isProductInCart = checkProductInCart(product);

  const showAlert =() => {
    alert('¡Producto agregado al carrito!');
    
  };

  return (
    <>
      <a className="link-up">
        <span>
          <HomeIcon />
          Movies/Hombre/Chaquetas y Buzos/
          <b>{product.title}</b>
        </span>
      </a>
      <br/>
      <div className="containerLeft">
      <Slider {...settingsLeft} className="sliderLeft">
          {product.imagenes.map((imagen, index) => (
            <div
              key={index}
              className={`slideLeft ${
                imagen === selectedImage ? "active" : ""
              }`}
              onClick={() => toggleDesplegable("imagen", index)}
            >
              <img
                src={imagen}
                alt={`${product.title} - Imagen ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="contenedor">
        <div className="izquierda"> 
          <Slider {...settings} className="slider">
            {product.imagenes.map((imagen, index) => (
              <div key={index} className="slide">
                <img
                src={imagen} //aqui no supe hacer lo de el slider bien
                            //Pero si cambias el imagen de aca por 
                            // selectedImage si funciona.

                  alt={`${product.title} - Imagen ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="derecha">
          <h3>{product.title}</h3>
          <p className="ref">
            <b>{product.subtitle} </b> Ref. {product.id_ref}
          </p>
          <br />
          <p className="price"> ${product.price}</p>
          <br />
          <h3 className="red">
            ¡Solo <b>{product.dispo}</b> unidades disponibles!
          </h3>
          <br />
          <div className="sizes">
            <button>{product.sizes[0]}</button>
            <button>{product.sizes[1]}</button>
            <button>{product.sizes[2]}</button>
            <button>{product.sizes[3]}</button>
          </div>

          <div className="num">
            <button onClick={decrementNumber}>-</button>
            <input type="text" value={number} readOnly />
            <button onClick={incrementNumber}>+</button>
            <button
        className="agg"
        onClick={() => {
          showAlert();
          isProductInCart ? removeFromCart(product) : addToCart(product, number);
        }}
      >
        AGREGAR A MI BOLSA
      </button>
          </div>
          <br />
          <h3>Comprueba disponibilidad de entrega</h3>
          <select className="input" id="departamentos" name="departamentos">
            <option value="departamento">Departamento</option>
            <option value="amazonas">Amazonas</option>
            <option value="ancash">Áncash</option>
            <option value="apurimac">Apurímac</option>
            <option value="arequipa">Arequipa</option>
          </select>
          <select className="input" id="municipio" name="municipio">
          <option value="municipio">Municipio</option>
            <option value="lima">Lima</option>
            <option value="arequipa">Arequipa</option>
            <option value="cusco">Cusco</option>
            <option value="trujillo">Trujillo</option>
          </select>
          <button className="dispButton">COMPROBAR DISPONIBILIDAD</button>

          <div className="contenedor">
            <p
              className="flecha"
              onClick={() => toggleDesplegable("descripcion")}
            >
              {desplegableAbierto.descripcion
                ? " Descripcion del producto ▲"
                : " Descripcion del producto ▼"}
            </p>
            {desplegableAbierto.descripcion && (
              <div className="desplegable" id="contenidoDesplegable">
                <p>
                  Un diseño de otro planeta llegó a Movies para decirte que
                  siempre podrás tener un estilo más auténtico e innovador. Con
                  esta chaqueta de la NASA tus atuendos para los días fríos
                  serán increíbles aciertos que te pondrán a levitar. Cuenta con
                  detalles que le aportan un abrigo único y una seguridad
                  absoluta, como su cierre frontal y capucha, que te mantendrán
                  protegido de la lluvia. Además, con sus bolsillos, se
                  convertirá en la prenda más práctica del clóset y gracias a
                  sus estampados, ¡tendrás un outfit del más allá!
                </p>
              </div>
            )}
          </div>

          <div className="contenedor">
            <p
              className="flecha"
              onClick={() => toggleDesplegable("especificaciones")}
            >
              {desplegableAbierto.especificaciones
                ? " Especificaciones ▲"
                : " Especificaciones ▼"}
            </p>
            {desplegableAbierto.especificaciones && (
              <div className="desplegable" id="contenidoDesplegable">
                <p>
                  País de fabricación Colombia - FABRICANTE/IMPORTADOR: Maquila
                  Internacional de confección Registro Sic 811007991-8
                  Especificaciones Diseño: Chaqueta rompevientos con cierre
                  frontal, capucha, bolsillos funcionales, aplique en punto
                  corazón, estampados en frente, manga derecha y posterior.
                  Silueta: Regular fit Color Blanco, negro y rojo
                </p>
              </div>
            )}
          </div>

          <div className="contenedor">
            <p
              className="flecha"
              onClick={() => toggleDesplegable("composicion")}
            >
              {desplegableAbierto.composicion
                ? " Composición ▲"
                : " Composición ▼"}
            </p>
            {desplegableAbierto.composicion && (
              <div className="desplegable" id="contenidoDesplegable">
                <p>100% Poliéster</p>
              </div>
            )}
          </div>

          <div className="contenedor">
            <p className="flecha" onClick={() => toggleDesplegable("cuidados")}>
              {desplegableAbierto.cuidados ? " Cuidados ▲" : " Cuidados ▼"}
            </p>
            {desplegableAbierto.cuidados && (
              <div className="desplegable" id="contenidoDesplegable">
                <p>
                  - Lavar a mano o en máquina - No lavar en seco - No dejar en
                  remojo - No retorcer ni exprimir - Usar agua fría - Usar jabón
                  suave - No usar blanqueador - No blanquear - No usar secadora
                  - No planchar - Secado en tendedero a la sombra
                </p>
              </div>
            )}
          </div>

          <div className="contenedor">
            <p
              className="flecha"
              onClick={() => toggleDesplegable("descubreMas")}
            >
              {desplegableAbierto.descubreMas
                ? " Descubre más ▲"
                : " Descubre más ▼"}
            </p>
            {desplegableAbierto.descubreMas && (
              <div className="desplegable" id="contenidoDesplegable">
                <p>
                  ¡Colecciones irrepetibles! Los diseños más galácticos llegaron
                  para darte los mejores estilos del día a día con prendas que
                  se convertirán en tus favoritas de todo el guardarropa.
                  Continúa explorando en Movies y encuentra más chaquetas
                  icónicas como esta.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
