import React from 'react'
import AboutImages from './AboutImages'

export default function About() {
    return (
        <section className='about'>
            <AboutImages />

            <div className="text">
                <h2>¿Quienes somos?</h2>
                <p>Somos una empresa de desarrollo de software y UX/UI que se destaca por la calidad de nuestros diseños y la fluidez de nuestras aplicaciones.</p>

                <p>Nos enorgullece brindar soluciones tecnológicas innovadoras y efectivas que generen impacto y agreguen valor a nuestros clientes y sus usuarios. Si buscas llevar tus ideas al siguiente nivel, ¡contáctanos! Estamos aquí para ayudarte a cumplir tus sueños a través de la tecnología.</p>
            </div>

            <style jsx>{`
            .about {
                width: 100%;
                height: 100vh;
                display: flex;
                padding: 100px 10%;
                position: relative;
                justify-content: space-between;
            }

            .text {
                width: 60%;
                padding: 0 4rem;
                z-index: 2;
                position: relative;
            }

            .text h2 {
                margin-top: 2rem;
                text-align: center;
            }

            .text p {
                margin-top: 2rem;
                text-align: left;
                font-size: 1.2rem;
                letter-spacing: 1px;
            }
        `}</style>
        </section>
    )
}
