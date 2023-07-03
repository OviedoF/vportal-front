import React from 'react'
import AboutImages from './AboutImages'

export default function About() {
    return (
        <section className='about' id='about'>
            
            <div className="wave-container">
                <svg className="waves" viewBox="0 0 1986 151" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M0 42.9622H41.375C82.75 42.9622 165.5 42.9622 248.25 30.958C331 18.9538 413.75 -5.05462 496.5 0.947482C579.25 6.94958 662 42.9622 744.75 69.9716C827.5 96.9811 910.25 114.987 993 108.985C1075.75 102.983 1158.5 72.9727 1241.25 69.9716C1324 66.9706 1406.75 90.979 1489.5 87.9779C1572.25 84.9769 1655 54.9664 1737.75 36.9601C1820.5 18.9538 1903.25 12.9517 1944.62 9.95063L1986 6.94958V151H1944.62C1903.25 151 1820.5 151 1737.75 151C1655 151 1572.25 151 1489.5 151C1406.75 151 1324 151 1241.25 151C1158.5 151 1075.75 151 993 151C910.25 151 827.5 151 744.75 151C662 151 579.25 151 496.5 151C413.75 151 331 151 248.25 151C165.5 151 82.75 151 41.375 151H0V42.9622Z" fill="#0099FF" />
                </svg>
            </div>

            <AboutImages />

            <div className="text">
                <h2>¿Quienes somos?</h2>
                <p>Somos una empresa de desarrollo de software y UX/UI que se destaca por la calidad de nuestros diseños y la fluidez de nuestras aplicaciones.</p>

                <p>Nos enorgullece brindar soluciones tecnológicas innovadoras y efectivas que generen impacto y agreguen valor a nuestros clientes y sus usuarios.Ya sea que necesites una aplicación móvil, un sitio web o una solución de software empresarial, estamos aquí para ayudarte a que tu idea se convierta en realidad.</p>

                <p>¡Permítenos ser tu <strong>portal</strong> al éxito!</p>
            </div>

            <style jsx>{`

            .waves {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                background: var(--color-alternative);
            }

            .waves path {
                fill: var(--color-vdark);
            }

            .about {
                width: 100%;
                height: 70vh;
                display: flex;
                padding: 0px var(--padding-sections-horizontal);
                position: relative;
                justify-content: space-between;
                align-items: center;
                padding-top: 10rem;
                margin-bottom: 5rem;
            }

            @media (max-width: 1100px) {
                .about {
                    flex-direction: column-reverse;
                    height: auto;
                    padding: 0px 2rem;
                    padding-top: 5rem;
                }

                .text {
                    margin-top: 2rem;
                    width: 100%;
                }
            }

            @media (max-width: 700px) {
                .about {
                    padding: 0px 1rem;
                }

                .text p {
                    font-size: 1rem;
                    text-align: center;
                    line-height: 1.5rem;
                }
            }
                    
        `}</style>
        </section>
    )
}
