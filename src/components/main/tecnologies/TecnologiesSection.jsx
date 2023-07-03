import React, { useState } from 'react'
import HabilitiesBottomWave from '../habilities/HabilitiesBottomWave'
import TecnologyIcon from './TecnologyIcon'
import Image from 'next/image'

const tecnologiesArray = [
    {
        name: 'HTML',
        desordened: false,
        icon: '/images/tecnologies/html.svg'
    },
    {
        name: 'CSS',
        desordened: false,
        icon: '/images/tecnologies/css.svg'
    },
    {
        name: 'JavaScript',
        desordened: false,
        icon: '/images/tecnologies/javascript.svg'
    },
    {
        name: 'TypeScript',
        desordened: false,
        icon: '/images/tecnologies/typescript.svg'
    },
    {
        name: 'React',
        desordened: false,
        icon: '/images/tecnologies/react.svg'
    },
    {
        name: 'Next.js',
        desordened: false,
        icon: '/images/tecnologies/nextjs.svg'
    },
    {
        name: 'Node.js',
        desordened: false,
        icon: '/images/tecnologies/nodejs.svg'
    },
    {
        name: 'MongoDB',
        desordened: false,
        icon: '/images/tecnologies/mongodb.svg'
    },
    {
        name: 'Git',
        desordened: false,
        icon: '/images/tecnologies/git.svg'
    },
    {
        name: 'GitHub',
        desordened: false,
        icon: '/images/tecnologies/github.svg'
    },
    {
        name: 'Vercel',
        desordened: false,
        icon: '/images/tecnologies/vercel.svg'
    },
    {
        name: 'Java',
        desordened: false,
        icon: '/images/tecnologies/java.svg'
    },
    {
        name: 'Angular',
        desordened: false,
        icon: '/images/tecnologies/angular.svg'
    },
    {
        name: 'Vue',
        desordened: false,
        icon: '/images/tecnologies/vue.svg'
    },
    {
        name: 'Sass',
        desordened: false,
        icon: '/images/tecnologies/sass.svg'
    },
    {
        name: 'Bootstrap',
        desordened: false,
        icon: '/images/tecnologies/bootstrap.svg'
    },
    {
        name: 'Material UI',
        desordened: false,
        icon: '/images/tecnologies/materialui.svg'
    },
    {
        name: 'Tailwind CSS',
        desordened: false,
        icon: '/images/tecnologies/tailwind.svg'
    },
    {
        name: 'Python',
        desordened: false,
        icon: '/images/tecnologies/python.svg'
    },
    {
        name: 'DJango',
        desordened: false,
        icon: '/images/tecnologies/django.svg'
    },
    {
        name: 'Laravel',
        desordened: false,
        icon: '/images/tecnologies/laravel.svg'
    },
    {
        name: 'MySQL',
        desordened: false,
        icon: '/images/tecnologies/mysql.svg'
    }
]

export default function TecnologiesSection({hoverActive, setHoverActive}) {
    const [tecnologies, setTecnologies] = useState(tecnologiesArray);
    const [desordened, setDesordened] = useState([]);
    const [timesActive, setTimesActive] = useState(0)

    const randomizeTecnologies = () => {
        if (desordened.length === 0) {
            setTimesActive(timesActive + 1)
        }

        setDesordened(tecnologiesArray.map((fish) => fish.name));
    }

    return (
        <section className='tecnologies' id='tecnologies'>
            <HabilitiesBottomWave />
            <div className="background" />

            <h2>¡Conoce nuestras tecnologías!</h2>
            <p>¡Te aseguramos que te caerán bien (muy probablemente)!</p>

            <div className="fishbowl">
                {tecnologies.map((fish, index) => (
                    <TecnologyIcon key={index} name={fish.name} icon={fish.icon} hoverActive={hoverActive} setHoverActive={setHoverActive} desordened={desordened} setDesordened={setDesordened} />
                ))}
            </div>

            <div className='super_duper_extra_dangereous'>
                <button className='btn btn-danger' onClick={(e) => randomizeTecnologies()}>NO TOCAR</button>
                {[...Array(5)].map((e, i) => <span key={i} style={{
                    animationDuration: `${(i + 1) * 0.2}s`,
                    marginLeft: `${i === 0 ? '2rem' : '1rem'}`
                }}>!</span>)}
            </div>

            {desordened.length > 0 && <div className='super_duper_extra_sadly' >
                <div className='super_duper_extra_sadly__image' animation="appearRight">
                    <Image src='/images/bot/sadly.png' fill style={{
                        objectFit: 'contain'
                    }} l />
                </div>

                <div className='super_duper_extra_sadly__text' animation="appearRight">
                    {timesActive === 1 && <>
                        <p>¡Oh no! estuve todo el día acomodando esos botones :(</p>
                        <p>¿Puedes ayudarme a acomodarlos con tu ratón, por favor?</p>
                    </>}

                    {timesActive > 1 && <>
                        <p>¡Oh no, otra vez! :(</p>
                        <p>Tanto que me habías ayudado</p>
                    </>}
                </div>
            </div>}

            {desordened.length === 0 && timesActive > 0 && <div className='super_duper_extra_happy' >
                <div className='super_duper_extra_happy__image' animation="appearRight">
                    <Image src='/images/bot/happy.png' fill style={{
                        objectFit: 'contain'
                    }} l />
                </div>

                {timesActive === 1 &&
                    <div className='super_duper_extra_happy__text' animation="appearRight">
                    <p>¡Muchas gracias! ¡Ahora puedo seguir trabajando!</p>
                </div>}

                {timesActive > 1 && <>
                    <div className='super_duper_extra_happy__text' animation="appearRight">
                        <p>¡Muchas gracias otra vez! Eres muy buena persona</p>
                    </div>
                </>}
            </div>}

            <style jsx>{`
            .super_duper_extra_sadly, .super_duper_extra_happy{
                bottom: 0;
                right: 20%;
                display: flex;
                flex-direction: row-reverse;
                align-items: center;
            }

            .super_duper_extra_sadly__image, .super_duper_extra_happy__image{   
                width: 200px;
                height: 200px;
                position: relative;
            }

            .super_duper_extra_sadly__text, .super_duper_extra_happy__text{
                animation-duration: 1s;
            }

            .super_duper_extra_sadly__text p, .super_duper_extra_happy__text p{
                margin-top: 0.5rem;
            }

            .tecnologies {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                position: relative;
                transform: translateY(-5px);
                padding-top: 24rem;
            }

            .background {
                width: 100%;
                height: 100%;
                background-color: var(--color-alternative-variant-dark);
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                transition: all 0.5s ease;
                opacity: ${hoverActive ? '0.6' : '0.9'};
            }

            h2 {
                font-size: 2rem;
                text-align: center;
                margin-bottom: 2rem;
                transition: all 0.5s ease;
                opacity: ${hoverActive ? '0.6' : '1'};
            }

            p {
                font-size: 1.4rem;
                text-align: center;
                transition: all 0.5s ease;
                opacity: ${hoverActive ? '0.6' : '1'};
            }

            .fishbowl {
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                height: 60vh;
                margin-top: 2rem;
                padding: 1rem;
                position: relative;
            }

            .super_duper_extra_dangereous{
                align-self: flex-start;
                display: flex;
                align-items: center;
                transition: all 0.5s ease;
                opacity: ${hoverActive ? '0.6' : '1'};
            }

            .btn-danger{
                align-self: flex-start;
                margin-left: 2rem;
                padding: 0.8rem 3rem;
                font-size: 1.2rem;
                border-radius: 5px;
                border: none;
                color: white;
                background-color: var(--color-danger);
                cursor: pointer;
                transition: all 0.3s ease;
            }

            .btn-danger:hover{
                transform: scale(1.1);
            }

            .btn-danger:hover ~ span{
                display: inline-block;
            }

            .super_duper_extra_dangereous span{
                font-size: 3rem;
                display: none;
                color: white;
                animation: span-appear 0.5s ease-in-out;
            }

            @keyframes span-appear {
                0% {
                    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
                }

                100% {
                    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
                }
            }

            @media screen and (max-width: 1108px) {
                .tecnologies {
                    padding-top: 17rem;
                }
            }

            @media screen and (max-width: 768px) {
                .tecnologies {
                    padding-top: 10rem;
                }

                .fishbowl {
                    height: 80vh;
                    margin-bottom: ${desordened.length === 0 ? '0' : '10rem'};
                }

                .super_duper_extra_dangereous{
                    align-self: center;
                }

                .btn-danger:hover ~ span{
                    display: none;
                }

                p {
                    font-size: 1rem;
                }
            }
        `}</style>
        </section>
    )
}
