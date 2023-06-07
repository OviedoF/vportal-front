import Image from 'next/image'
import React from 'react'

export default function HabilityCard({ reverse, full, image, title }) {
  return (
    <div className='card'>

      <div className='card_text'>
        <h3>{title}</h3>
        <p>
          Si algo sabemos en VPortal, es que la primera impresión siempre entra por lo ojos. Sabiendo esto, ¿no es prudencial hacer un diseño atractivo, moderno y con buena experiencia del usuario?
        </p>

        <p>
          ¡Sí! ¡y por eso estamos acá para ayudarte!
        </p>
      </div>

      <Image src={image} width={200} height={150} />

      <style jsx>{`
          .card{
              width: ${full ? '100%' : '65%'};
              background-color: #00000050;
              border-radius: 10px;
              padding: 20px;
              margin-top: 80px;
              box-shadow: 0 0 10px rgba(0,0,0,0.2);
              position: relative;
              overflow: hidden;
              align-self: ${reverse ? 'flex-end' : 'flex-start'};
              display: flex;
              flex-direction: ${reverse ? 'row-reverse' : 'row'};
              justify-content: space-between;
          }

          .card_text {
            padding: ${full ? '0 60px' : '0 20px'};
          }

          .card_text h3 {
              font-size: 1.5rem;
              margin-bottom: 20px;
              text-align: center;
          }

          .card_text p {
              font-size: 1rem;
              text-align: justify;
              line-height: 1.5rem;
              margin: 10px 0;
              white-space: wrap;
          }

          .card:hover{
              box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
        `}</style>
    </div>
  )
}
