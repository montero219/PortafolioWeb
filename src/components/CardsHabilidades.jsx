import React from 'react'
// eslint-disable-next-line no-unused-vars
import styles from './habilidadesStyle.css'

const CardsHabilidades = ({Rango,Empresa,Cargo, Nivel, Descripcion, Habilidades}) => {
  return (
    <div className='habilidades'>
    <div className='tiempo'>
        <p>{Rango}:</p>
    </div>
    <div className='descripcion'>
        <h4>{Empresa} </h4>
        <p>{Cargo}</p>
        <h5>{Nivel}</h5>
        <div className='container-description'>
            <span>{Descripcion}
            </span>
        </div>
        <div className='botones'>
            {Habilidades.map((habilidad, index) => (
                <div key={index}>
                    <h5>{habilidad}</h5>
                </div>
                ))
            }
        </div>
    </div>
</div>
  )
}
export default CardsHabilidades;