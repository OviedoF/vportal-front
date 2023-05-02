import React from 'react'
import HeroScene from './HeroScene';

export default function Hero() {
    return (
        <section id='hero'>

            <div className="text_hero">
                <hr />

                <h1>Somos
                    <br />
                    <span>VPortal</span>
                </h1>

                <h2>Desarrolladores de <span>aplicaciones</span> <span className='dreams'>sueños</span>.</h2>

                <div className="buttons">
                    <a href="#contact" className="btn">Conócenos!</a>
                    <a href="#contact" className="btn">Contáctanos!</a>
                </div>
            </div>

            <HeroScene />

            <svg className='waves' viewBox="0 0 1986 151" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fillRule="evenodd" clipRule="evenodd" d="M0 42.9622H41.375C82.75 42.9622 165.5 42.9622 248.25 30.958C331 18.9538 413.75 -5.05462 496.5 0.947482C579.25 6.94958 662 42.9622 744.75 69.9716C827.5 96.9811 910.25 114.987 993 108.985C1075.75 102.983 1158.5 72.9727 1241.25 69.9716C1324 66.9706 1406.75 90.979 1489.5 87.9779C1572.25 84.9769 1655 54.9664 1737.75 36.9601C1820.5 18.9538 1903.25 12.9517 1944.62 9.95063L1986 6.94958V151H1944.62C1903.25 151 1820.5 151 1737.75 151C1655 151 1572.25 151 1489.5 151C1406.75 151 1324 151 1241.25 151C1158.5 151 1075.75 151 993 151C910.25 151 827.5 151 744.75 151C662 151 579.25 151 496.5 151C413.75 151 331 151 248.25 151C165.5 151 82.75 151 41.375 151H0V42.9622Z" fill="#0099FF"/>
            </svg>

            <style jsx>{`
            #hero {
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                background: rgb(0,0,0);
                margin-bottom: 10vh;
                background: linear-gradient(0deg, rgba(0,0,0,1) 0%, var(--color-alternative) 0%, rgba(94,113,201,1) 100%);
            }

            .waves {
                position: absolute;
                bottom: -10vh;
                left: 0;
                width: 100%;
                z-index: 1;
                background: var(--color-alternative);
            }

            .waves path {
                animation: wave 20s infinite linear;
                fill: var(--color-vdark);
            }

            .text_hero{
                width: 40%;
                height: 100vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 4rem;
                z-index: 2;
                position: relative;
            }

            .text_hero hr {
                height: 50%;
                position: absolute;
                left: 2rem;
            }

            .text_hero h1 span {
                font-size: 5.5rem;
            }

            .text_hero h2 {
                margin-top: 2rem;
            }

            .text_hero h2 span {
                text-decoration: line-through;
            }

            .text_hero h2 .dreams {
                text-decoration: none;
                color: var(--color-alternative-two);
            }
            
            .buttons {
                display: flex;
                justify-content: space-between;
                margin-top: 2rem;
            }

            .btn{
                width: 40%;
                background-color: var(--color-vdark);
                padding: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: inherit;
                text-decoration: none;
                border-radius: 10px;
            }
        `}</style>
        </section>
    )
}
