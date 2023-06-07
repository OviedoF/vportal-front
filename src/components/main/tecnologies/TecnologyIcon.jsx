import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

export default function TecnologyIcon({ setHoverActive, hoverActive, icon, name }) {
  const fishRef = useRef(null);

  useEffect(() => {
    const fishElement = fishRef.current;
    const containerWidth = fishElement.parentElement.offsetWidth;
    const randomX = Math.floor(Math.random() * (containerWidth + 80)) - 80;
    const randomSpeed = Math.floor(Math.random() * (30 - 10 + 1)) + 10;

    fishElement.style.left = `${randomX}px`;
    fishElement.style.animationDuration = `${randomSpeed}s`;
  }, []);

  return (
    <div className='fish' ref={fishRef} onMouseOver={() => setHoverActive(name)} onMouseLeave={() => setHoverActive(false)}>
      <Image src={icon} width={80} height={80} style={{
        transform: `${hoverActive === name ? 'scale(1.2) rotate(0deg)' : 'scale(1) rotate(0deg)'}`,
        transition: 'all 0.3s ease',
        opacity: `${hoverActive ? 
            hoverActive === name ? '1' : '0.6'    
        : '1'}`
      }}/>
      <p className='name'>{name}</p>

      <style jsx>{`
        .fish {
          width: 80px;
          height: 80px;
          right: -80px; /* Empieza fuera del contenedor en la derecha */
          animation: move linear infinite;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 1rem;
        }

        .fish:hover .name {
          opacity: 1;
          padding-top: 1rem;
        }

        .name {
          font-size: 1rem;
          text-align: center;
          padding: 0.5rem;
          opacity: 0;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  )
}
