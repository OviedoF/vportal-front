import React from 'react'
import ConnectedSVG from './ConnectedSVG'

export default function Connected() {
  return (
    <section id='connected'>
        <div className="text">
            <h2>¡El portal perfecto para tu proyecto!</h2>

            <p>
            En VPortal, nos enorgullece ser el portal que conecta tu proyecto desde tu imaginación al mundo. 
            </p>

            <p>
            Nuestro equipo de expertos trabaja en estrecha colaboración contigo para entender tu visión y tus objetivos. 
            </p>
        </div>

        <ConnectedSVG />

        <style jsx>{`
            #connected {
                width: 100%;
                height: 60vh;
                display: flex;
                padding: 0px var(--padding-sections-horizontal);
                position: relative;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 8rem;
            }

            #connected .text{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 60%;
                height: 100%;
            }
        
        `}</style>

    </section>
  )
}
