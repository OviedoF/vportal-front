import React from 'react'
import TecnologiesTopWave from './HabilitiesTopWave'
import HabilityCard from './HabilityCard'
import TecnologiesBottomWave from './HabilitiesBottomWave'

export default function HabilitiesSection() {
    return (
        <section className='habilities'>
            <TecnologiesTopWave />

            <div className="data_container">
                <h2>¿Por qué nosotros?</h2>

                <HabilityCard image={'/images/habilities/brushes.png'} title={'Diseños de primer nivel'}/>

                <HabilityCard reverse image='/images/habilities/idea.png' title={'¡Te entendemos!'}/>

                <HabilityCard image='/images/habilities/innovation.png' title={'¡Nos encanta tu idea!'}/>

                <HabilityCard reverse image='/images/habilities/quick.png' title={'No nos olvidemos de lo técnico'}/>

                <HabilityCard full image='/images/habilities/virtue.png' title={'¿Quieres seguir?'}/>
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

        `}</style>
        </section>
    )
}