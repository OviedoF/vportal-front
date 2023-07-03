import React, { useEffect, useRef, useState } from 'react'

export default function AboutImages() {
    const father = useRef(null)
    const actualChild = useRef(null)
    const [sectionActive, setSectionActive] = useState(1);

    useEffect(() => {
        const sectionChange = () => {
            const childNodes = actualChild.current.childNodes;
            
            childNodes.forEach((child, index) => {
                child.style.animation = 'none';
                child.style.animation = `disappear 1s`;
                child.style.animationFillMode = 'forwards';
            })

            actualChild.current.addEventListener('animationend', () => {

                setSectionActive((sectionActive) => {
                    if (sectionActive < 3) {
                        return sectionActive + 1;
                    } else {
                        return 1;
                    }
                });
            })
        };

        const interval = setInterval(sectionChange, 4000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const childNodes = actualChild.current.childNodes;

        childNodes.forEach((child, index) => {
            child.style.animation = 'none';
            child.style.animation = `appear 1s ease forwards`;
        })
    }, [sectionActive])


    return (
        <div className="images" ref={father}>
            {sectionActive === 1 && <div className="image_item" id={1} ref={actualChild}>
                <img src="/images/about/Computer.svg" alt="Computer" className='principal' style={{
                    bottom: '20%',
                    left: '20%',
                    zIndex: 2,
                    animationDelay: '0s'
                }} />

                <img src="/images/about/Books.svg" alt="Books" className='secondary' style={{
                    bottom: '20%',
                    left: '40%',
                    animationDelay: '2s'
                }} />

                <img src="/images/about/photos.svg" alt="Photos" className='tertiary' style={{
                    bottom: '40%',
                    right: '10%',
                    scale: '0.8',
                    rotate: '25deg',
                    animationDelay: '4s'
                }} />

                <h3 style={{
                    bottom: '0',
                }}>Web Development</h3>
            </div>}

            {sectionActive === 2  && <div className="image_item" id={2} ref={actualChild}>
                <img src="/images/about/tools.svg" alt="tools" className='principal' style={{
                    bottom: '20%',
                    left: '20%',
                    zIndex: 2,
                    animationDelay: '0s',
                    scale: '0.8'
                }} />

                <img src="/images/about/laptop.svg" alt="laptop" className='secondary' style={{
                    bottom: '20%',
                    left: '35%',
                    animationDelay: '2s'
                }} />

                <img src="/images/about/brush.svg" alt="brush" className='tertiary' style={{
                    bottom: '40%',
                    right: '10%',
                    scale: '0.8',
                    rotate: '25deg',
                    animationDelay: '4s'
                }} />

                <h3 style={{
                    bottom: '0',
                }}>UX/UI Design</h3>
            </div>}

            {sectionActive === 3 && <div className="image_item" id={3} ref={actualChild}>
                <img src="/images/about/phone.svg" alt="phone" className='principal' style={{
                    bottom: '20%',
                    left: '20%',
                    zIndex: 2,
                    animationDelay: '0s'
                }} />

                <img src="/images/about/cup.svg" alt="cup" className='secondary' style={{
                    bottom: '20%',
                    left: '40%',
                    animationDelay: '2s'
                }} />

                <img src="/images/about/rocket.svg" alt="rocket" className='tertiary' style={{
                    bottom: '40%',
                    right: '10%',
                    rotate: '25deg',
                    scale: '0.8',
                }} />

                <h3 style={{
                    bottom: '0',
                }}>App Development</h3>
            </div>}

            <style jsx>{`
            .images {
                width: 40%;
                height: 100%;
                float: left;
                position: relative;
            }

            .images .image_item {
                width: 100%;
                height: 100%;
                position: relative;
            }

            .images * {
                animation: moveTopAndBottom 3.5s infinite linear;
                position: absolute;
                transition: all 1s ease;
            }

            .images h3 {
                position: absolute;
                left: 0;
                width: 100%;
                text-align: center;
                font-size: 2rem;
                font-family: var(--font-stylized);
                animation: none;
                transition: all 1s ease;
            }

            @keyframes moveTopAndBottom {
                0% {
                    transform: translateY(0);
                }
                50% {
                    transform: translateY(-15px);
                }
                100% {
                    transform: translateY(0);
                }
            }

            @keyframes appear {
                0% {
                    opacity: 0;
                    transform: translateY(-100%);
                }

                100% {
                    opacity: 1;
                    transform: translateY(-20px);
                }
            }

            @keyframes disappear {

                0% {
                    opacity: 1;
                    transform: translateY(-20px);
                }

                100% {
                    opacity: 0;
                    transform: translateY(100%);
                }
            }

            @media screen and (max-width: 1100px) {
                .images {
                    width: 100%;
                    height: 400px;
                    float: none;
                }
            }
            `}</style>
        </div>
    )
}
