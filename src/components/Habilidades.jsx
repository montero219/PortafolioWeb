import React, { useEffect, useState } from 'react';
// import { FaReact } from "react-icons/fa";
import CardsHabilidades from './CardsHabilidades';
 const Habilidades = () => {

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
    let Habilidad1 = {
        Rango : 'Mar 2023 - Actualidad',
        Empresa : 'Movisoftware | Desarrollador Full-Stack',
        Cargo : 'Ingeniero',
        Nivel : 'Mid',
        Descripcion : 'Desarrollador Full-Stack con experiencia en Front-end utilizando React, JavaScript (Vanilla) y jQuery, complementado con HTML y CSS. Competencia en la creación de interfaces de usuario dinámicas y responsivas. En el ámbito del Back-end, manejo .NET y Entity Framework para la gestión eficiente de datos y el desarrollo de servicios robustos y seguros. También tengo experiencia en SQL Express para la gestión de bases de datos. Experiencia en el control de versiones con GIT, asegurando un flujo de trabajo ordenado y colaborativo. Trabajo bajo metodologías ágiles como Scrum, optimizando la entrega continua de valor en los proyectos.',
        Habilidades : ['Javascript (Vanilla)','Jquery', '.NET', 'React', 'CSS', 'HTML', 'MVC'] 
    }
    
    let Habilidad2 = {
        Rango : 'Oct 2022 - Mar 2023',
        Empresa : 'Movisoftware | Desarrollador Front-end',
        Cargo : 'Ingeniero',
        Nivel : 'Junior',
        Descripcion: 'Desarrollador Front-End especializado en la creación de aplicaciones web utilizando tecnologías modernas. Experiencia avanzada en React, JavaScript (Vanilla) y jQuery, complementado con HTML y CSS. Competencia en la construcción de interfaces de usuario dinámicas y responsivas empleando frameworks como Bootstrap y Material UI. Experiencia en el control de versiones con GIT, asegurando un flujo de trabajo ordenado y colaborativo. Trabajo bajo metodologías ágiles como Scrum, optimizando la entrega continua de valor en los proyectos.',
        Habilidades : ['React','Javascript (Vanilla)', 'CSS', 'HTML','Angular','Apps Responsives' ] 
    }
    let Habilidad3 = {
        Rango : 'Junio 2022 - Oct 2022',
        Empresa : 'Ufinet | Ingeniero de Aprovisionamiento',
        Cargo : 'Ingeniero',
        Nivel : '',
        Descripcion: 'Experiencia en la coordinación de actividades para la implantaciónfísica y lógica de servicios de última milla. Competente en laprogramación y configuración de equipos de acceso comoRaisecom, ISCOM, SISCO, así como en garantizar que los recursosestén preparados y asegurados para garantizar la instalación delservicio dentro de los plazos especificados.',
        Habilidades : ['Secure CRT','CISCO packet tracer', 'Excel'] 
    }
    let Habilidad4 = {
        Rango : 'Junio 2021 - Junio 2022',
        Empresa : 'Banco de bogotá | Practicante Empresarial',
        Cargo : 'Ingeniero practicante',
        Nivel : '',
        Descripcion: 'Experiencia en el sector financiero, incluyendo la aprobación deinversiones tecnológicas y dando soporte y seguimiento a proyectostecnológicos, así como analizando propuestas de inversionestecnológicas. Manejo de consolas de administración de software.',
        Habilidades : ['Excel','Word', 'SharePoint'] 
    }

  return (
    <>
    <section className="containerHabilidades">
        <div className="containerDescription">
        <h1 style={{fontSize:"4vw"}}>Experiencia</h1>
        <h2 style={{fontSize:'1.5vw' , marginBottom:'15px', color:'#ffab03'}}>Ingeniero Electrónico | Front-end</h2>
        <h2 style={{width:'300px', fontSize:"1vw"}}>Construyo aplicativos web estéticos, intuitivos y para todo público.</h2>
        </div>
    </section>
    <section className='container-exp-mobile'>
        <h1>Experiencia</h1>
    </section>
    <section className='ContainerIconsHabilidades'>
    <div className={isMobile ? '' : 'cardHabilidad'}>
            <div className='SectionHabilidades'>
               <CardsHabilidades Rango={Habilidad1.Rango} Empresa={Habilidad1.Empresa} Cargo={Habilidad1.Cargo} Nivel={Habilidad1.Nivel}  Descripcion={Habilidad1.Descripcion} Habilidades={Habilidad1.Habilidades} />
               <CardsHabilidades Rango={Habilidad2.Rango} Empresa={Habilidad2.Empresa} Cargo={Habilidad2.Cargo} Nivel={Habilidad2.Nivel}  Descripcion={Habilidad2.Descripcion} Habilidades={Habilidad2.Habilidades} />
               <CardsHabilidades Rango={Habilidad3.Rango} Empresa={Habilidad3.Empresa} Cargo={Habilidad3.Cargo} Nivel={Habilidad3.Nivel}  Descripcion={Habilidad3.Descripcion} Habilidades={Habilidad3.Habilidades} />           
               <CardsHabilidades Rango={Habilidad4.Rango} Empresa={Habilidad4.Empresa} Cargo={Habilidad4.Cargo} Nivel={Habilidad4.Nivel}  Descripcion={Habilidad4.Descripcion} Habilidades={Habilidad4.Habilidades} />           
            </div>

        </div>
    </section>
    </>
    
    )
}
export default Habilidades;
