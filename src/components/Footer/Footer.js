import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";

const Footer = () => {
  return (
    <>
    <hr class="linea-horizontal" />
      <div className="container">
        <div className="part">
          <h3>
            <b>SÍGUENOS</b>
          </h3>
          <div className="icons">
            <FacebookIcon /> <InstagramIcon />
          </div>
          <h3>
            CONTÁCTANOS
          </h3><br/>
          <p className="icons">
            <EmailIcon /> servicioalcliente@moviesshop.co
          </p>
          <p>
            <LocalPhoneIcon /> +57 300 910 8311
          </p>
          <p className="iconsUbi">
            <PlaceIcon />
            <b>NUESTRAS TIENDAS</b>
          </p>
        </div>
        <div className="part">
          <h3>
            <b>TE AYUDAMOS</b>
          </h3>
          <p>
            Preguntas frecuentes <br />
            Garantía de productos <br />
            Cambios y devoluciones <br />
            Contáctanos
          </p>
        </div>
        <div className="part">
          <h3>
            <b>INFORMACIÓN LEGAL</b>
          </h3>
          <p>
            Modificar mi suscripción
            <br />
            Términos y condiciones recoge en tienda física
            <br />
            Términos y condiciones uso sitio web
            <br />
            Política de tratamiento de la información personal
            <br />
            Términos y condiciones promociones
            <br />
            Derecho de retracto
            <br />
            Superintendencia Industria y Comercio - SIC
            <br />
            Autorización tratamiento de datos
            <br />
            Transparencia y Ética Empresarial
          </p>
        </div>
        <div className="part">
          <h3>
            <b>MI CUENTA</b>
          </h3>
          <p>
            Iniciar sesión
            <br />
            Rastrea pedido
          </p>
        </div>
        <div className="part">
          <h3>
            <b>ACERCA DE MOVIES</b>
          </h3>
          <p>
            Nuestra historia
            <br />
            Trabaja con nosotros
          </p>
        </div>
      </div>
      <h1>
        Movies© 2022 ESTRATEGIA COMERCIAL DE COLOMBIA S.A.S. NIT: 830507952-5
        Dirección: Calle 60 Sur N° 43A 97 Sabaneta, Colombia Tel: (+57) 604
        4442849 Correo: servicioalcliente@movies.com.co
      </h1>
    </>
  );
};

export default Footer;
