import React from 'react'
import { Carousel } from '../Carousel'
import img0 from '../assets/IMG_5822.JPEG'
import img1 from '../assets/IMG_6065.JPEG'
import img2 from '../assets/IMG_6180.JPEG'
import img3 from '../assets/IMG_1714.JPEG'
import img4 from '../assets/IMG_4253.JPEG'
import img5 from '../assets/IMG_3474.JPEG'
import img6 from '../assets/IMG_1705.JPEG'
import img7 from '../assets/IMG_3103.JPEG'



const slides = [
    {
      "src": img1,
      "alt": "Image 1 for carousel"
    },
    {
      "src": img2,
      "alt": "Image 2 for carousel"
    },
    {
        "src": img0,
        "alt": "Image 0 for carousel"
      },
    {
      "src": img3,
      "alt": "Image 3 for carousel"
    },
    {
        "src": img4,
        "alt": "Image 4 for carousel"
      },
    {
        "src": img5,
        "alt": "Image 5 for carousel"
    },
    {
        "src": img6,
        "alt": "Image 6 for carousel"
    },    {
        "src": img7,
        "alt": "Image 7 for carousel"
    }
  ]

 const Sobremi = () => {
    return (
        <>
            <section className="containerSobremi">
                <div className="containerDescriptionsobremi">
                    <h1>Sobre mi</h1>
                    <h2 style={{fontSize:'22px' , marginBottom:'15px', color:'#ffab03'}}>Hola a todos, Soy Juan!</h2>
                    <div className='containertextsobremi'>
                        <h2 style={{width:'500px', lineHeight:'1.5'}}>
                        Soy ingeniero electrónico apasionado por desarrollo web. Mi experiencia y habilidades técnicas son extensas y variadas, las cuales puedes explorar en detalle en la sección ‘Experiencia’. Sin embargo, creo firmemente que soy mucho más que mis logros profesionales.
                        <br></br><br></br>
                        En mi vida personal, tengo el privilegio de ser hijo y hermano, roles que han moldeado mi carácter y valores. Además, soy el orgulloso padre de una hermosa gata, cuya compañía me brinda alegría y serenidad en los días más ajetreados.
                        <br></br><br></br>
                        Mi amor por los viajes me ha llevado a explorar los rincones más fascinantes de mi país, descubriendo su rica diversidad y belleza. Cada viaje es una oportunidad para aprender, crecer y apreciar la maravilla del mundo que nos rodea.
                        {/* <br></br><br></br> */}
                        {/* Creo firmemente en el equilibrio entre la vida personal y laboral, considerando esencial para mantener la creatividad, motivación y bienestar general. Esto me impulsa a esforzarme por mantener una armonía saludable entre mis responsabilidades profesionales y personales, contribuyendo así a mi singularidad como ingeniero electrónico apasionado. */}
                        </h2>
                    </div>    
                </div>
            </section>
            <section className='containerCarousel'>
                <Carousel data={slides} />
            </section>
        </>        
        )
    }
    export default Sobremi;