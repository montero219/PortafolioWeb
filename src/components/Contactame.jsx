import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './stylescomponent.css'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Contactame = () => {




  return (
    <div className='container-contactame'>
      <a href="https://w.app/JaverianaCaliuniversity" target="_blank" rel="noopener noreferrer">
        <button className='containerIcoText'>
          <FaWhatsapp className='whatsapp' />
          <h5 className='fontColorIco-whatsapp'>Whatsapp</h5>
        </button>
      </a>

      <a href="https://www.linkedin.com/in/juandavidmonterolasso" target="_blank" rel="noopener noreferrer">
          <button className='containerIcoText' >
            <FaLinkedin className='Linkedin' />
            <h5 className='fontColorIco-linkedin'>Linkedin</h5>
          </button>
      </a>
      
    </div>
  )
}

export default Contactame;
