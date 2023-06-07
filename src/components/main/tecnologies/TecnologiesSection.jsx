import React, { useState } from 'react'
import HabilitiesBottomWave from '../habilities/HabilitiesBottomWave'
import TecnologyIcon from './TecnologyIcon'

const tecnologies = [
    {
        name: 'HTML',
        icon: '/images/tecnologies/html.svg'
    },
    {
        name: 'CSS',
        icon: '/images/tecnologies/css.svg'
    },
    {
        name: 'JavaScript',
        icon: '/images/tecnologies/javascript.svg'
    },
    {
        name: 'TypeScript',
        icon: '/images/tecnologies/typescript.svg'
    },
    {
        name: 'React',
        icon: '/images/tecnologies/react.svg'
    },
    {
        name: 'Next.js',
        icon: '/images/tecnologies/nextjs.svg'
    },
    {
        name: 'Node.js',
        icon: '/images/tecnologies/nodejs.svg'
    },
    {
        name: 'MongoDB',
        icon: '/images/tecnologies/mongodb.svg'
    },
    {
        name: 'Git',
        icon: '/images/tecnologies/git.svg'
    },
    {
        name: 'GitHub',
        icon: '/images/tecnologies/github.svg'
    },
    {
        name: 'Vercel',
        icon: '/images/tecnologies/vercel.svg'
    },
    {
        name: 'Java',
        icon: '/images/tecnologies/java.svg'
    },
    {
        name: 'Angular',
        icon: '/images/tecnologies/angular.svg'
    },
    {
        name: 'Vue',
        icon: '/images/tecnologies/vue.svg'
    },
    {
        name: 'Sass',
        icon: '/images/tecnologies/sass.svg'
    },
    {
        name: 'Bootstrap',
        icon: '/images/tecnologies/bootstrap.svg'
    },
    {
        name: 'Material UI',
        icon: '/images/tecnologies/materialui.svg'
    },
    {
        name: 'Tailwind CSS',
        icon: '/images/tecnologies/tailwind.svg'
    },
    {
        name: 'Python',
        icon: '/images/tecnologies/python.svg'
    },
    {
        name: 'DJango',
        icon: '/images/tecnologies/django.svg'
    },
    {
        name: 'Laravel',
        icon: '/images/tecnologies/laravel.svg'
    },
    {
        name: 'MySQL',
        icon: '/images/tecnologies/mysql.svg'
    }
]

export default function TecnologiesSection() {
    const [hoverActive, setHoverActive] = useState(false)

    return (
        <section className='tecnologies'>
            <HabilitiesBottomWave />
            <div className="background" />

            <h2>¡Conoce nuestras tecnologías!</h2>
            <p>¡Te aseguramos que te caerán bien (muy probablemente)!</p>

            <div className="fishbowl">
                {tecnologies.map((fish, index) => (
                    <TecnologyIcon key={index} name={fish.name} icon={fish.icon} hoverActive={hoverActive} setHoverActive={setHoverActive} />
                ))}
            </div>

            <div className='super_duper_extra_dangereous'>
                <button className='btn btn-danger'>NO TOCAR</button>
                {[...Array(5)].map((e, i) => <span key={i} style={{
                    animationDuration: `${(i+1) * 0.5}s`,
                    marginLeft: `${i === 0 ? '2rem' : '1rem'}`
                }}>!</span>)}
            </div>

            <style jsx>{`
            .tecnologies {
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-end;
                align-items: center;
                position: relative;
                transform: translateY(-5px);
                padding-bottom: 5rem;
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
        `}</style>
        </section>
    )
}
