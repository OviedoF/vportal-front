import React from 'react'
import Image from 'next/image'

const brands = [{
    name: "Ocha",
    image: "/images/brands/ocha.png"
}, {
    name: "Empetel",
    image: "/images/brands/empetel.svg"
}, {
    name: "Fuku Shop",
    image: "/images/brands/fuku.webp"
}, {
    name: "Eventos Tecno",
    image: "/images/brands/julianwinners.webp"
}, {
    name: "Lenta",
    image: "/images/brands/lenta.png"
}, {
    name: "Glaxo Pacific",
    image: "/images/brands/glaxo.png"
}, {
    name: "UNAB",
    image: "/images/brands/unab.png"
}, {
    name: "Biznes",
    image: "/images/brands/biznes.png"
}, {
    name: "Geek 4 dummies",
    image: "/images/brands/geek4dummies.webp"
}]

export default function Brands() {
    return (
        <div className='brands_section'>
            <h3 className='disclaimer'>Ellos ya confían en nosotros</h3>

            <div className='brands'>
                <ul className='slider'>
                    {brands.map((brand, index) => (
                        <li className='brand' key={index}>
                            <Image src={brand.image} alt={brand.name} width={150} height={150} style={{
                                objectFit: 'contain',
                                filter: 'grayscale(50%)'
                            }} />
                        </li>
                    ))}
                </ul>

                <ul className='slider'>
                    {brands.map((brand, index) => (
                        <li className='brand' key={index}>
                            <Image src={brand.image} alt={brand.name} width={150} height={150} style={{
                                objectFit: 'contain',
                                filter: 'grayscale(50%)'
                            }} />
                        </li>
                    ))}
                </ul>
            </div>

            <style jsx>{`
            .brands_section {
                margin-top: 50px;
            }

            .brands_section .disclaimer {
                text-align: center;
                font-size: 1.5rem;
                margin-bottom: 50px;
            }

            .brands {
                display: flex;
                overflow-x: hidden;
                position: relative;
            }

            .brands::after {
                content: "";
                position: absolute;
                height: 100%;
                width: 150px;
                background: linear-gradient(to right, var(--color-vdark) 0%, rgba(0, 0, 0, 0) 100%);
            }

            .brands::before {
                content: "";
                position: absolute;
                height: 100%;
                width: 150px;
                right: 0;
                background: linear-gradient(to left, var(--color-vdark) 0%, rgba(0, 0, 0, 0) 100%);
                z-index: 2;
            }

            .slider{
                display: flex;
                position: relative;
                transition: all 1s;
                animation: scroll 25s linear infinite;
                -webkit-animation: scroll 25s linear infinite;
                width: 4000px;
            }

            .brand {
                margin: 0 50px;
                width: 200px;
                height: 200px;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            @keyframes scroll {
                0% {
                  -webkit-transform: translateX(0);
                  transform: translateX(0);
                }
                100% {
                  -webkit-transform: translateX(-100%);
                  transform: translateX(-100%);
                }
            }
            `}</style>
        </div>
    )
}
