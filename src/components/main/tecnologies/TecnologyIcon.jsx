import Image from 'next/image'
import React, { useRef, useEffect } from 'react'

export default function TecnologyIcon({ setHoverActive, hoverActive, icon, name, desordened, setDesordened }) {
  const fishRef = useRef(null);

  useEffect(() => {
    if (desordened.includes(name)) {
      const fishElement = fishRef.current;
      const randomX = Math.floor(Math.random() * 80);
      fishElement.style.top = `${Math.floor(Math.random() * 200)}px`;
      fishElement.style.left = `${randomX}px`;
    } 

    if(!desordened.includes(name)) {
      const fishElement = fishRef.current;
      fishElement.style.top = '0px';
      fishElement.style.left = '0px';
    }
  }, [desordened, name]);

  const orderIcon = () => {
    if(desordened.includes(name)) {
      setDesordened(desordened.filter(item => item !== name));
    }
  }

  return (
    <div className='fish' ref={fishRef} onMouseOver={() => setHoverActive(name)} onMouseLeave={() => setHoverActive(false)} onClick={() => orderIcon()}>
      <Image src={icon} width={80} height={80} style={{
        transform: `${hoverActive === name ? 'scale(1.2) rotate(0deg)' : 'scale(1) rotate(0deg)'}`,
        transition: 'all 0.3s ease',
        opacity: `${hoverActive ?
          hoverActive === name ? '1' : '0.6'
          : '1'}`
      }} />
      <p className='name'>{name}</p>

      <style jsx>{`
        .fish {
          width: 80px;
          height: 80px;
          animation: move linear infinite;
          cursor: pointer;  
          transition: all 0.3s ease;
          margin: 1rem;
          position: relative;
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
