import Image from 'next/image'
import React from 'react'
import Brands from './Brands'
import { useTranslation } from 'next-i18next'

export default function Contact({ hoverActive }) {
  const { t } = useTranslation('home');

  return (
    <section id='contact'>
      <div className='wave_container'>
        <svg viewBox="0 0 2291 374" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.517358 230.906L21.5306 243.785C42.5437 256.665 85.5708 282.423 127.597 262.824C170.624 243.785 212.651 179.949 254.677 179.949C297.704 179.949 339.73 243.785 382.757 275.704C424.784 308.182 466.81 308.182 509.837 308.182C551.864 308.182 593.89 308.182 636.917 295.303C678.943 282.423 721.97 256.665 763.997 269.544C806.023 282.423 849.05 333.381 891.076 327.221C934.103 321.061 976.13 256.665 1018.16 243.785C1061.18 230.906 1103.21 269.544 1146.24 295.303C1188.26 321.061 1230.29 333.381 1273.32 288.583C1315.34 243.785 1357.37 141.311 1400.4 109.393C1442.42 76.9144 1485.45 115.552 1527.48 173.229C1569.5 230.906 1612.53 308.182 1654.56 346.26C1697.58 384.898 1739.61 384.898 1781.64 333.381C1824.66 282.423 1866.69 179.949 1909.72 134.591C1951.74 89.7937 1993.77 102.673 2036.8 96.5134C2078.82 89.7937 2120.85 64.5951 2163.88 102.673C2205.9 141.311 2248.93 243.785 2269.94 295.303L2290.96 346.26V0.198486H2269.94C2248.93 0.198486 2205.9 0.198486 2163.88 0.198486C2120.85 0.198486 2078.82 0.198486 2036.8 0.198486C1993.77 0.198486 1951.74 0.198486 1909.72 0.198486C1866.69 0.198486 1824.66 0.198486 1781.64 0.198486C1739.61 0.198486 1697.58 0.198486 1654.56 0.198486C1612.53 0.198486 1569.5 0.198486 1527.48 0.198486C1485.45 0.198486 1442.42 0.198486 1400.4 0.198486C1357.37 0.198486 1315.34 0.198486 1273.32 0.198486C1230.29 0.198486 1188.26 0.198486 1146.24 0.198486C1103.21 0.198486 1061.18 0.198486 1018.16 0.198486C976.13 0.198486 934.103 0.198486 891.076 0.198486C849.05 0.198486 806.023 0.198486 763.997 0.198486C721.97 0.198486 678.943 0.198486 636.917 0.198486C593.89 0.198486 551.864 0.198486 509.837 0.198486C466.81 0.198486 424.784 0.198486 382.757 0.198486C339.73 0.198486 297.704 0.198486 254.677 0.198486C212.651 0.198486 170.624 0.198486 127.597 0.198486C85.5708 0.198486 42.5437 0.198486 21.5306 0.198486H0.517358V230.906Z" fill="#0099FF" />
        </svg>
      </div>

      <h2>
        {t('contact.title')}
      </h2>

      <Brands />

      <div className='content'>
        <div className="form_container">
          <form action="https://formsubmit.co/oviedofederico39@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="Nuevo pedido - VPORTAL!" />
              <input type="text" name="_honey" style={{display: 'none'}} />
              <input type="hidden" name="_autoresponse" value="¡Muchas gracias! hemos recibido tu mensaje. - VPortal" />
              <input type="hidden" name="_template" value="table"></input>

              <p>{t('contact.form.title')}</p>
              <input type="text" placeholder={t('contact.form.name')} name='name' /><br />
              <input type="email" placeholder={t('contact.form.email')} name='email' /><br />
              <input type="text" placeholder={t('contact.form.subject')} name='subject' /><br />
              <textarea placeholder={t('contact.form.message')} name='message'></textarea><br />

              <input type='submit' value={t('contact.form.button')} />
          </form>

          <div className="drops">
            <div className="drop drop-1"></div>
            <div className="drop drop-2"></div>
            <div className="drop drop-3"></div>
            <div className="drop drop-4"></div>
            <div className="drop drop-5"></div>
          </div>
        </div>
      </div>


      <style jsx>{`

            .form_container{
                width: 60%;
                position: relative;
                margin-bottom: 50px;
            }

            form {
                background: rgba(255, 255, 255, 0.3);
                padding: 3em;
                border-radius: 20px;
                border-left: 1px solid rgba(255, 255, 255, 0.3);
                border-top: 1px solid rgba(255, 255, 255, 0.3);
                -webkit-backdrop-filter: blur(10px);
                        backdrop-filter: blur(10px);
                box-shadow: 20px 20px 40px -6px rgba(0, 0, 0, 0.2);
                text-align: center;
                position: relative;
                transition: all 0.2s ease-in-out;
              }

              form p {
                font-weight: 500;
                color: #fff;
                opacity: 0.7;
                font-size: 1.4rem;
                margin-top: 0;
                margin-bottom: 60px;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
              }

              form a {
                text-decoration: none;
                color: #ddd;
                font-size: 12px;
              }

              form a:hover {
                text-shadow: 2px 2px 6px #00000040;
              }

              form a:active {
                text-shadow: none;
              }

              form input, form textarea {
                background: transparent;
                width: 80%;
                padding: 1em;
                margin-bottom: 2em;
                border: none;
                border-left: 1px solid rgba(255, 255, 255, 0.3);
                border-top: 1px solid rgba(255, 255, 255, 0.3);
                border-radius: 10px;
                -webkit-backdrop-filter: blur(5px);
                        backdrop-filter: blur(5px);
                box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
                color: #fff;
                font-family: Montserrat, sans-serif;
                font-weight: 500;
                transition: all 0.2s ease-in-out;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
              }

              form textarea {
                height: 100px;
                }

              form input:hover {
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
              }

              form input[type=email]:focus, form input[type=password]:focus {
                background: rgba(255, 255, 255, 0.1);
                box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
              }

              form input[type=submit] {
                margin-top: 10px;
                width: 150px;
                font-size: 1rem;
                cursor: pointer;
              }

              form input[type=submit]:hover {
                cursor: pointer;
              }

              form input[type=submit]:active {
                background: rgba(255, 255, 255, 0.2);
              }

              form:hover {
                margin: 4px;
              }
              
              ::-moz-placeholder {
                font-family: Montserrat, sans-serif;
                font-weight: 400;
                color: #fff;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
              }
              
              :-ms-input-placeholder {
                font-family: Montserrat, sans-serif;
                font-weight: 400;
                color: #fff;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
              }
              
              ::placeholder {
                font-family: Montserrat, sans-serif;
                font-weight: 400;
                color: #fff;
                text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
              }
              
              .drop {
                background: rgba(255, 255, 255, 0.3);
                -webkit-backdrop-filter: blur(10px);
                        backdrop-filter: blur(10px);
                border-radius: 10px;
                border-left: 1px solid rgba(255, 255, 255, 0.3);
                border-top: 1px solid rgba(255, 255, 255, 0.3);
                box-shadow: 10px 10px 60px -8px rgba(0, 0, 0, 0.2);
                position: absolute;
                transition: all 0.2s ease;
              }
              .drop-1 {
                height: 80px;
                width: 80px;
                top: -20px;
                left: -40px;
                z-index: -1;
              }
              .drop-2 {
                height: 80px;
                width: 80px;
                bottom: -30px;
                right: -10px;
              }
              .drop-3 {
                height: 100px;
                width: 100px;
                bottom: 120px;
                right: -50px;
                z-index: -1;
              }
              .drop-4 {
                height: 120px;
                width: 120px;
                top: -60px;
                right: -60px;
              }
              .drop-5 {
                height: 60px;
                width: 60px;
                bottom: 170px;
                left: 90px;
                z-index: -1;
              }
              
              a,
              input:focus,
              select:focus,
              textarea:focus,
              button:focus {
                outline: none;
              }
  
            
            .wave_container {
                  width: 100%;
                  overflow: hidden;
                  transform: translateY(-6px);
                  top: 0;
                  left: 0;
              }
            
              svg {
                  width: 100vw;
                  height: 100%;
                  fill: var(--color-alternative-variant-dark);
                  transition: all 0.5s ease;
                  opacity: ${hoverActive ? '0.6' : '0.9'};
              }
            
              svg path {
                  fill: var(--color-alternative-variant-dark);
                  transition: all 0.5s ease;
              }

            section {
                width: 100%;
                min-height: 100vh;
                position: relative;
            }

            .content {   
                padding: 0px var(--padding-sections-horizontal);
                margin-top: 100px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            h2 {
                text-align: center;
                font-size: 2.5rem;
                margin-top: 100px;
            }

            @media (max-width: 1108px) {
              .form_container{
                width: 80%;
              }
            }

            @media (max-width: 768px) {
              .form_container{
                width: 100%;
              }

              .drop-1{
                width: 60px;
                height: 60px;
                left: -10px;
              }

              .drop-3{
                width: 80px;
                height: 80px;
                bottom: 100px;
                right: -15px;
              }

              .drop-5{
                width: 40px;
                height: 40px;
                bottom: -20px;
                left: -10px;
              }

              .drop-4{
                width: 100px;
                height: 100px;
                top: -60px;
                right: -10px;
              }

              form{
                padding: 60px 10px;
              }

              form input, form textarea{
                width: 80%;
              }
            }
        `}</style>
    </section>
  )
}
