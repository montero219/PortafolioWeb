import Navbar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
import { IoIosArrowDown } from "react-icons/io";
import Linterna from "./components/Linterna";
import Social from "./components/Social";
// eslint-disable-next-line no-unused-vars
import style from "./App.css"

function PortafolioWeb() {
  return (
    <>
      <Linterna/>
      <section className="container">
        <Navbar/>
      </section>
      <section className="presentation">
        <Presentacion/>
      </section>
      <section className="apps">
        <Social/>
      </section>
      <section className="arrow">
        <IoIosArrowDown style={{fontSize:'48px'}}  />
      </section>
    </>
  );
}

export default PortafolioWeb;
