import React from 'react'
import AboutImages from './AboutImages'

export default function About() {
    return (
        <section className='about'>
            <AboutImages />

            <div className="text">
                <h2>¿Quienes somos?</h2>
                <p>Somos una empresa de desarrollo de software y UX/UI que se destaca por la calidad de nuestros diseños y la fluidez de nuestras aplicaciones.</p>

                <p>Nos enorgullece brindar soluciones tecnológicas innovadoras y efectivas que generen impacto y agreguen valor a nuestros clientes y sus usuarios.Ya sea que necesites una aplicación móvil, un sitio web o una solución de software empresarial, estamos aquí para ayudarte a que tu idea se convierta en realidad.</p>

                <p>¡Permítenos ser tu <strong>portal</strong> al éxito!</p>
            </div>

            <style jsx>{`
            .about {
                width: 100%;
                height: 70vh;
                display: flex;
                padding: 0px var(--padding-sections-horizontal);
                position: relative;
                justify-content: space-between;
                align-items: center;
            }
        `}</style>
        </section>
    )
}
