import React from 'react'
import { GrInstagram , GrLinkedin, GrGithub} from "react-icons/gr";

const Social = () => {
  return (
    <div className="iconos">
    <a href="https://www.instagram.com/d.montero.l/" target="_blank" rel="noopener noreferrer"><GrInstagram  className="instagram"/></a>
    <a href="https://www.linkedin.com/in/juandavidmonterolasso/" target="_blank" rel="noopener noreferrer"><GrLinkedin className="linkedin"/></a>
    <a href="https://github.com/montero219" target="_blank" rel="noopener noreferrer"><GrGithub className="github"/></a> 
    </div>
  )
}
export default Social;