import React, { useEffect, useState } from "react";

//assets
import icon from "../../assets/img/icon.png";
import off from "../../assets/img/off.png";

//icons
import SearchIcon from "@mui/icons-material/Search";
import MessageIcon from "@mui/icons-material/Message";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaceIcon from "@mui/icons-material/Place";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  useEffect(() => {
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");
    const nav = document.querySelector("#nav");

    abrir.addEventListener("click", () => {
      nav.classList.add("visible");
    });

    cerrar.addEventListener("click", () => {
      nav.classList.remove("visible");
    });
  }, []);

  {
    /* Dropdown*/
  }

  const [showMujerDropdown, setShowMujerDropdown] = useState(false);

  const handleMujerHover = () => {
    setShowMujerDropdown(true);
  };

  const handleMujerLeave = () => {
    setShowMujerDropdown(false);
  };

  return (
    <>
      <img className="promotion-bar" src={off} alt="Descripción de la imagen" />
      <header>
        <img className="logo" src={icon} alt="logo" />
        <button id="abrir" className="abrir-menu">
          <MenuIcon />
        </button>
        <nav className="nav" id="nav">
          <button id="cerrar" className="cerrar-menu">
            <CloseIcon />
          </button>
          <ul className="nav-list">
            <div
              className="nav-item"
              onMouseEnter={() => setShowMujerDropdown(true)}
              onMouseLeave={() => setShowMujerDropdown(true)}
            >
              <li>
                <a href="/">MUJER</a>
              </li>
              {showMujerDropdown && (
                <div
                  className="dropdown-content"
                  onMouseEnter={() => setShowMujerDropdown(true)}
                  onMouseLeave={() => setShowMujerDropdown(true)}
                >
                  {/* menú desplegable para MUJER */}
                  <a href="/">Camisas</a>
                  <a href="/">Camisetas</a>
                  <a href="/">Pijamas</a>
                  <a href="/">Ropa interior</a>
                  <a href="/">Chaquetas y Buzos</a>
                  <a href="/">Joggers, pantalones y shorts</a>
                  <a href="/">Calzado</a>
                  <a href="/">Camisetas</a>
                  <a href="/">Accesorios</a>
                </div>
              )}
            </div>
            {/*  fin menú desplegable para MUJER */}
            <li>
              <a href="/">HOMBRE</a>
            </li>
            <li>
              <a href="/">
                NUEVOS <br /> lanzamientos
              </a>
            </li>
            <li>
              <a href="/">
                OFERTAS <br /> de temporada
              </a>
            </li>
            <div className="line-2"></div>
            <li>
              <div className="search-bar">
                <div className="search-container">
                  <input type="text" placeholder="Encuentra tu preferido" />
                  <div className="search-icon">
                    <SearchIcon />
                  </div>
                </div>
                <div className="line"></div>
              </div>
            </li>
            <li>
              <div className="icons-bar">
                <button className="sidenav-button">
                  <MessageIcon /> <h2>TE AYUDAMOS</h2>
                </button>
                <button className="sidenav-button">
                  <PersonOutlineIcon />
                  <h2>MI CUENTA</h2>
                </button>

                <button className="sidenav-button">
                  <FavoriteIcon />
                  <h2>MIS FAVORITOS</h2>
                </button>
                <button className="sidenav-button">
                  <PlaceIcon /> <h2>TIENDAS</h2>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
