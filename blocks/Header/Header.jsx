// components/Header/Header.jsx
import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const darkMode = saved ? saved === 'dark' : prefersDark;
        setIsDark(darkMode);
        document.documentElement.className = darkMode ? 'dark' : 'light';
    }, []);

    const toggleTheme = () => {
        const newDark = !isDark;
        setIsDark(newDark);
        document.documentElement.className = newDark ? 'dark' : 'light';
        localStorage.setItem('theme', newDark ? 'dark' : 'light');
    };

    const handleNavClick = (section) => {
        setActiveSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'tech', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={styles.nav}>
            <div className={styles.container}>
                <a href="#" className={styles.navLogo}>
                    SZ<span className={styles.gradText}>.</span>
                </a>
                <div className={styles.navLinks}>
                    <button
                        onClick={() => handleNavClick('home')}
                        className={`${styles.navLink} ${activeSection === 'home' ? styles.active : ''}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleNavClick('projects')}
                        className={`${styles.navLink} ${activeSection === 'projects' ? styles.active : ''}`}
                    >
                        My work
                    </button>
                    <button
                        onClick={() => handleNavClick('tech')}
                        className={`${styles.navLink} ${activeSection === 'tech' ? styles.active : ''}`}
                    >
                        Tech
                    </button>
                    <button
                        onClick={() => handleNavClick('contact')}
                        className={`${styles.navLink} ${activeSection === 'contact' ? styles.active : ''}`}
                    >
                        Contact
                    </button>
                </div>
                <div className={styles.navSpacer}></div>
                <div className={styles.navActions}>
                    <button className={styles.themeBtn} onClick={toggleTheme} title="Toggle theme">
                        {isDark ? (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Header;