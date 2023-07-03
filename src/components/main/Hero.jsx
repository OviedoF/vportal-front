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
                    <a href="#contact" className="btn margin">Contáctanos!</a>
                </div>
            </div>

            <HeroScene />



            <style jsx>{`
            #hero {
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                background: rgb(0,0,0);
                background: linear-gradient(0deg, rgba(0,0,0,1) 0%, var(--color-alternative) 0%, var(--color-alternative-variant) 100%);
            }

            .waves {
                position: absolute;
                bottom: -10vh;
                left: 0;
                width: 100%;
                background: var(--color-alternative);
            }

            .waves path {
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
                margin-top: 2rem;
            }

            .btn{
                width: 100%;
                background-color: var(--color-vdark);
                padding: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: inherit;
                text-decoration: none;
                border-radius: 10px;
                transition: background-color 0.3s ease;
            }

            .btn:hover {
                background-color: var(--color-dark);
            }

            .btn.margin {
                margin-left: 1rem;
            }

            @media (max-width: 1100px) {
                #hero {
                    height: 95vh;
                }

                .text_hero h1 span {
                    font-size: 4.5rem;
                }

                .text_hero h2 {
                    font-size: 1.5rem;
                }
            }

            @media (max-width: 900px) {
                .text_hero h1 span {
                    font-size: 3.5rem;
                }

                .text_hero h2 {
                    font-size: 1.2rem;
                }

                .btn {
                    width: 100%;
                    font-size: .8rem;
                }
            }

            @media (max-width: 700px) {
                #hero {
                    padding-top: 70px;
                    flex-direction: column;
                }

                .text_hero {
                    width: 100%;
                    height: 50%;
                }

                .text_hero hr {
                    height: 100%;
                    display: none;
                }

                .text_hero h1 {
                    margin: 0;
                    text-align: center;
                }

                .text_hero h1 span {
                }

                .text_hero h2 {
                    text-align: center;
                }

                
            }

        `}</style>
        </section>
    )
}
