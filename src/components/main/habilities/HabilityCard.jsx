import Image from 'next/image'
import React from 'react'

export default function HabilityCard({ reverse, full, image, title, children}) {
  return (
    <div className='card'>

      <div className='card_text'>
        <h3>{title}</h3>
        <p>
          {children}
        </p>
      </div>

      <Image src={image} width={200} height={150} style={{
        objectFit: 'contain',
        margin: 'auto 0',
      }}/>

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
          
          @media (max-width: 1100px) {
            .card_text h3 {
              font-size: 1.2rem;
            }

            .card_text p {
              font-size: 0.8rem;
              line-height: 1.2rem;
            }
          }

          @media (max-width: 900px) {
            .card {
              width: 100%;
              padding: 20px 10px;
            }
          }

          @media (max-width: 600px) {
            .card{
              flex-direction: column;
              align-items: center;
            }

            .card_text h3 {
              text-align: center;
            }

            .card_text p {
              text-align: center;
              margin-bottom: 50px 0;
            }
          }
        `}</style>
    </div>
  )
}
