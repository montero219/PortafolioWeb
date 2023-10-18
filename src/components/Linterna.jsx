import React, { useState, useEffect } from 'react';
import styles from './stylescomponent.css'

const Linterna = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveLinterna = (e) => {
    const newX = e.clientX;
    const newY = e.clientY;

    // Obtener el tamaño de la ventana del navegador
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Limitar la posición para evitar desbordamientos
    const limitedX = Math.min(Math.max(newX, 0), windowWidth);
    const limitedY = Math.min(Math.max(newY, 0), windowHeight);

    setPosition({ x: limitedX, y: limitedY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', moveLinterna);
    return () => {
      document.removeEventListener('mousemove', moveLinterna);
    };
  }, []);

  return (
    <div className="linterna" style={{ left: position.x, top: position.y }}></div>
  );
};

export default Linterna;