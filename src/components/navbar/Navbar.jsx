import React, { useState, useEffect } from 'react';
import routes from '../../routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';
import Link from 'next/link';

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
                {/* <div className={styles.nav_wrapper}>
                    <Link href={routes.home} className={styles.logo} style={{ padding: 1 }}>
                        <img src={'https://res.cloudinary.com/dmoqdwvnr/image/upload/v1679408957/ying-07_bpiryd.webp'} alt="logo" style={{ height: '100%', objectFit: 'contain', transform: 'scale(1)' }} />
                    </Link>

                    <ul id={styles.menu}>
                        <li><Link href={routes.home}>Inicio</Link></li>
                        <li><Link href={routes.home}>Productos</Link></li>
                        <li><Link href={routes.home}>Contacto</Link></li>
                        <li><Link href={routes.home}>Talles</Link></li>
                    </ul>
                </div> */}
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
                    <li onClick={() => setMenuToggle(false)}>
                        <Link href={routes.home}>Inicio</Link>
                    </li>
                    <li onClick={() => setMenuToggle(false)}>
                        <Link href={routes.home}>Productos</Link>
                    </li>
                    <li onClick={() => setMenuToggle(false)}>
                        <Link href={routes.home}>Contacto</Link>
                    </li>
                    <li onClick={() => setMenuToggle(false)}>
                        <Link href={routes.home}>Talles</Link>
                    </li>
                </ul>

            </div>
        </header>
    );
}

export default Navbar;