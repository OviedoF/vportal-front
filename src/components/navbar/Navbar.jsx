import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.scss';
import { Link as ScrollLink } from 'react-scroll';
import { useRouter } from 'next/router'
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [menuToggle, setMenuToggle] = useState(false);
    const [changingLanguage, setChangingLanguage] = useState(false)
    const { locale, locales, defaultLocale, pathname } = useRouter()
    const {t} = useTranslation('common');

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
                                {t('navbar.home')}
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="about" smooth={true} duration={1000} offset={-50}>
                                {t('navbar.about')}
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="habilities" smooth={true} duration={1000} offset={-50}>
                                {t('navbar.whyUs')}
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="tecnologies" smooth={true} duration={1000} offset={-50}>
                                {t('navbar.tecnologies')}
                            </ScrollLink>
                        </li>
                        <li>
                            <ScrollLink to="contact" smooth={true} duration={1000} offset={-50}>
                                {t('navbar.contact')}
                            </ScrollLink>
                        </li>
                    </ul>
                </div>

                {changingLanguage && <div className={styles.change_language_overlay}>
                    <FontAwesomeIcon icon={faXmark} onClick={() => setChangingLanguage(false)} id={styles.close_overlay_menu} style={{
                        top: '20px',
                        right: '20px',
                        height: '30px',
                        position: 'absolute',
                        cursor: 'pointer'
                    }} />

                    <ul id={styles.menu}>
                        <li className={styles.language} onClick={() => setChangingLanguage(false)}>
                            <Link href={pathname} locale='es'>
                                {t('languages.spanish')}
                            </Link>
                        </li>
                        <li className={styles.language} onClick={() => setChangingLanguage(false)}>
                            <Link href={pathname} locale='en'>
                                {t('languages.english')}
                            </Link>
                        </li>
                    </ul>
                </div>}
            </nav>

            <div className={styles.change_language} onClick={() => setChangingLanguage(true)}>
                <div className={styles.container}>
                    <Image src='/images/language-icon.svg' height={30} width={30} alt='language-icon' onClick={() => setChangingLanguage(true)} style={{
                        filter: 'brightness(0) invert(1)',
                        margin: 'auto'
                    }} />
                </div>
            </div>

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
                            {t('navbar.home')}
                        </ScrollLink>
                    </li>
                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="about" smooth={true} duration={1000} offset={-50}>
                            {t('navbar.about')}
                        </ScrollLink>
                    </li>
                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="habilities" smooth={true} duration={1000} offset={-50}>
                            {t('navbar.whyUs')}
                        </ScrollLink>
                    </li>
                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="tecnologies" smooth={true} duration={1000} offset={-50}>
                            {t('navbar.tecnologies')}
                        </ScrollLink>
                    </li>

                    <li >
                        <ScrollLink onClick={() => setMenuToggle(false)} to="contact" smooth={true} duration={1000} offset={-50}>
                            {t('navbar.contact')}
                        </ScrollLink>
                    </li>
                </ul>

            </div>
        </header>
    );
}

export default Navbar;