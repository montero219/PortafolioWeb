import Navbar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
import { IoIosArrowDown } from "react-icons/io";
import Linterna from "./components/Linterna";
import Social from "./components/Social";
import imagen from "./assets/fondoimagen.png";

// eslint-disable-next-line no-unused-vars
import style from "./App.css"

function PortafolioWeb() {
  return (
    <>
      <Linterna />
      <section className="Contenedor">
          <Navbar/>
          <Presentacion/>
          <div className="container-imagen">
            <img className='imagen' src={imagen} alt="Logo" />
            <Social/>
          </div>
        <section className="arrow">
          <IoIosArrowDown style={{fontSize:'48px'}}  />
        </section>
      </section>
    </>
  );
}

export default PortafolioWeb;
