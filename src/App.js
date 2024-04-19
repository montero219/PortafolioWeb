// eslint-disable-next-line no-unused-vars
import style from "./App.css"
import Navbar from "./components/Navbar";
import Presentacion from "./components/Presentacion";
// import Linterna from "./components/Linterna";
import Social from "./components/Social";
import Particulas from "./components/Particulas";
import Habilidades from "./components/Habilidades";
import Sobremi from "./components/SobreMi";
import Contactme from "./components/Contactme"
function PortafolioWeb() {
  return (
    <section className="containerTotal">
      <Particulas/>
      {/* <Linterna/> */}
      <Navbar/>
      <section id="inicio" className="Contenedor">
          <Presentacion/>
          <Social/>
      </section>
      <section id="experiencia">
        <Habilidades/>
      </section>
      <section id="sobreMi">
      <Sobremi/>
      </section>
      <section id="contacme">
      <Contactme/>
      </section>
    </section>
  );
}

export default PortafolioWeb;
