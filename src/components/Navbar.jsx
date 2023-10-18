import React from 'react';
import logo from "../assets/logo.svg";
// eslint-disable-next-line no-unused-vars
import styles from './stylescomponent.css'
const Navbar = () => {
  const descargarCV = () => {
    const rutaCV = '/VD.pdf';
    const enlace = document.createElement('a');
    enlace.href = rutaCV;
    enlace.download = 'cv_Juan_Montero.pdf';
    enlace.click();
  };
  return (
    <div className='container-navbar'>
      <section className='navbar-align'>
        <div className='container-logo'>
          <img src={logo} alt="Logo" />
        </div>
        <div className='items-navbar-style'>
          <a href="#inicio">Inicio</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#sobreMi">Sobre mi</a>
          <a href="#contacto">Contacto</a>
          <div className='CV' onClick={descargarCV} >Descargar VD</div>
        </div>
      </section>
    </div>
  );
}

export default Navbar;
