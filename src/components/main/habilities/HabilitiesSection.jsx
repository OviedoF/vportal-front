import React from 'react'
import TecnologiesTopWave from './HabilitiesTopWave'
import HabilityCard from './HabilityCard'
import TecnologiesBottomWave from './HabilitiesBottomWave'

export default function HabilitiesSection() {
    return (
        <section className='habilities' id="habilities">
            <TecnologiesTopWave />

            <div className="data_container">
                <h2>¿Por qué nosotros?</h2>

                <HabilityCard image={'/images/habilities/brushes.png'} title={'Diseños de primer nivel'}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        Si algo sabemos en VPortal, es que la primera impresión siempre entra por lo ojos. Sabiendo esto, ¿no es prudencial hacer un diseño atractivo, moderno y con buena experiencia del usuario?
                    </span>
                    <br />
                    <br />

                    <span>
                        ¡Sí! ¡y por eso estamos acá para ayudarte!
                    </span>
                </HabilityCard>

                <HabilityCard reverse image='/images/habilities/idea.png' title={'¡Te entendemos!'}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        Sabemos lo lindo que es tener una idea y querer llevarla a cabo (así nació VPortal). Pero también sabemos lo difícil que es encontrar a alguien que te entienda y te ayude a plasmarla en la realidad.
                    </span>
                    <br />
                    <br />

                    <span>
                        ¡Por eso estamos acá! ¡Somos tu <b>PORTAL</b>!
                    </span>
                </HabilityCard>

                <HabilityCard image='/images/habilities/innovation.png' title={'¡Nos encanta tu idea!'}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        Nos encanta cambiar el mundo, y sabemos que tu idea puede hacerlo. Por eso, nos encanta trabajar con ideas innovadoras y que generen un impacto positivo en la sociedad.
                    </span>

                    <br />
                    <br />

                    <span>
                        ¡No te preocupes! ¡Nosotros te ayudamos a llevarla a cabo!
                    </span>
                </HabilityCard>

                <HabilityCard reverse image='/images/habilities/quick.png' title={'No nos olvidemos de lo técnico'}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        Sabemos que no solo es importante que tu idea sea buena, sino que también es importante que sea rápida y eficiente. Por eso, nos encargamos de que tu aplicación sea lo más rápida y eficiente posible.
                    </span>
                </HabilityCard>

                <HabilityCard full image='/images/habilities/virtue.png' title={'¿Quieres seguir?'}>
                    <span style={{
                        marginBottom: '20px',
                    }}>
                        ¿Aún no te convencemos? ¡No te preocupes! ¡Tenemos más!: <br />
                        <br />
                        <b>Calidad</b>: Nos encanta hacer las cosas bien, y por eso nos esforzamos en que todo lo que hacemos sea de la mejor calidad posible. <br />
                        <br />
                        <b>Seguridad</b>: Sabemos que la seguridad es importante, y por eso nos encargamos de que tu aplicación sea lo más segura posible. <br />
                        <br />
                        <b>Soporte</b>: Sabemos que a veces las cosas no salen como uno quiere, y por eso nos encargamos de que tu aplicación siempre esté funcionando. <br />
                        <br />
                        <b>¡Y mucho más!</b>
                    </span>
                </HabilityCard>
            </div>

            <style jsx>{`
            .data_container {
                width: 100%;
                transform: translateY(-5px);
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 70px var(--padding-sections-horizontal);
                background: linear-gradient(0deg, rgba(0,0,0,1) 0%, var(--color-alternative) 0%, var(--color-alternative-variant) 100%);
            }

            h2 {
                font-size: 2.5rem;
                text-align: center;
            }

            @media screen and (min-width: 1100px) {
                
            }

        `}</style>
        </section>
    )
}