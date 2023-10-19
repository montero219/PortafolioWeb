import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './stylescomponent.css'

const Presentacion = () => {
  return (
    <div className="container-presentation-text">
      <div className='text-present'>
        <h4>Hola, me llamo</h4> 
        <h1>David Montero</h1>
        <h3>y soy desarrollador web.</h3>
        <div className="description">
          <span>
            Ingeniero electrónico <span className="colombia">colombiano </span> 
            apasionado por el desarrollo front-end. Puedes obtener más información
            navegando por el portal. 
            <span className="cursor">|</span>
          </span>
        </div>
      </div>
  </div>
    )
}
export default Presentacion;
