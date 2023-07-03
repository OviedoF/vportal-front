import React, { useState, useEffect } from 'react';
import routes from '../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuToggle, setMenuToggle] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;
            setVisible(visible);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    return (
        <header id={styles.header} className={`${styles.navbar} ${visible ? styles.navbar__visible : styles.navbar__hidden}`}>
            <nav id={styles.navbar}>
                <div className={styles.nav_wrapper}>
                    <ul id={styles.menu}>
                        <li>
                            <ScrollLink to="hero" smooth={true} duration={1000} offset={-50}>
                                Inicio
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="about" smooth={true} duration={1000} offset={-50}>
                                Quiénes somos
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="habilities" smooth={true} duration={1000} offset={-50}>
                                Por qué nosotros
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="tecnologies" smooth={true} duration={1000} offset={-50}>
                                Nuestras tecnologías
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contact" smooth={true} duration={1000} offset={-50}>
                                Contacto
                            </ScrollLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={styles.menuIcon} onClick={() => setMenuToggle(!menuToggle)}>
                <span className={`${styles.icon} ${styles.icon_bars}`}></span>
                <span className={`${styles.icon} ${styles.icon_bars} ${styles.overlay}`}></span>
            </div>


            <div className={menuToggle ? `${styles.overlay_menu} ${styles.active}` : styles.overlay_menu}>
                <FontAwesomeIcon icon={faXmark} onClick={() => setMenuToggle(false)} id={styles.close_overlay_menu} style={{
                    top: '20px',
                    right: '20px',
                    height: '50px',
                    position: 'absolute'
                }} />

                <ul id={styles.menu}>
                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="hero" smooth={true} duration={1000} offset={-50}>
                            Inicio
                        </ScrollLink>
                    </li>
                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="about" smooth={true} duration={1000} offset={-50}>
                            Quiénes somos
                        </ScrollLink>
                    </li>
                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="habilities" smooth={true} duration={1000} offset={-50}>
                            Por qué nosotros
                        </ScrollLink>
                    </li>
                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="tecnologies" smooth={true} duration={1000} offset={-50}>
                            Nuestras tecnologías
                        </ScrollLink>
                    </li>

                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="contact" smooth={true} duration={1000} offset={-50}>
                            Contacto
                        </ScrollLink>
                    </li>
                </ul>

            </div>
        </header>
    );
}

export default Navbar;