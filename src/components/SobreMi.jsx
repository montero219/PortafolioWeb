import React, { useEffect, useState } from 'react';
import me from '../assets/me.png'

 const Sobremi = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 800);
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Verificar el tamaño de la pantalla al cargar la página

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <>
            <section className="containerSobremi">
            { isMobile &&
                        <h1 className={'title-byme'}>Sobre Mi</h1>
            }
                <div className="containerDescriptionsobremi">
                  <div  className="img-container-byme" style={{display: 'flex', height: '400px', border:'2px solid #ffab03' , padding:'20px', borderRadius:'50%'}}>
                  <img className={isMobile ?  'img-mobile' : 'img-desktop'}
                        src={me}
                        alt={"me from me"}
                        />
                  </div>
                  <div className="container-text-byme" style={{height: '473px',width: '610px',display:'grid'}}>
                    <h1 style={{height:'20px'}}> ¿ Quien es Juan ?</h1>
                        <h2 style={{lineHeight:'1.5'}}>
                        Hola, <span style={{color:'#ffab03'}}>soy ingeniero electrónico</span> apasionado por el <span style={{color:'#ffab03'}}>desarrollo web.</span> Mi experiencia y habilidades técnicas son extensas y variadas, las cuales puedes explorar en detalle en la sección ‘Experiencia’. Sin embargo, creo firmemente que soy mucho más que mis logros profesionales.
                        <br></br><br></br>
                        En mi vida personal, <span style={{color:'#ffab03'}}>tengo el privilegio de ser hijo y hermano</span>, roles que han moldeado mi carácter y valores. Además, soy el orgulloso  <span style={{color:'#ffab03'}}>padre de una hermosa gata</span>, cuya compañía me brinda alegría y serenidad en los días más ajetreados.
                        <br></br><br></br>
                        Mi  <span style={{color:'#ffab03'}}>amor por los viajes</span> me ha llevado a explorar los rincones más fascinantes de mi país, descubriendo su rica diversidad y belleza. Cada viaje es una oportunidad para aprender, crecer y apreciar la maravilla del mundo que nos rodea.
                        </h2>
                  </div>
   
                </div>
            </section>
        </>        
        )
    }
    export default Sobremi;