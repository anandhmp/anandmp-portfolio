import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import {
    AlignLeft, Settings, ChevronDown, Sun, Moon,
    X, Github, Image, Send, Sparkles, ArrowRight,
    Home, Briefcase, Award, Cpu, Camera, Globe
} from 'lucide-react';

const Header = ({ displayDecorations, setDisplayDecorations }) => {
    const router = useRouter();
    const [theme, setTheme] = useState('dark');
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const is3D = router.pathname === '/3d';

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(savedTheme);
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const threshold = router.pathname === '/' ? 450 : 150;
            if (window.scrollY > threshold) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [router.pathname]);

    const applyTheme = (newTheme) => {
        setTheme(newTheme);
        let actualTheme = newTheme;
        if (newTheme === 'system') {
            actualTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        document.documentElement.setAttribute('data-theme', actualTheme);
        if (actualTheme === 'dark') {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', newTheme);
    };

    const handleThemeChange = (e) => {
        applyTheme(e.target.value);
    };

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolledNav : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    AM<span className={styles.logoDot}>.</span>
                </Link>

                <div className={styles.desktopNav}>
                    <Link
                        href="/"
                        className={`${styles.navItem} ${router.pathname === '/' ? styles.active : ''}`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/work"
                        className={`${styles.navItem} ${router.pathname === '/work' ? styles.active : ''}`}
                    >
                        My work
                    </Link>
                    <Link
                        href="/experience"
                        className={`${styles.navItem} ${router.pathname === '/experience' ? styles.active : ''}`}
                    >
                        Experience
                    </Link>
                    <div className={styles.moreDropdownWrapper}>
                        <button
                            onClick={() => setMoreOpen(!moreOpen)}
                            className={`${styles.navItem} ${styles.moreBtn} ${moreOpen ? styles.activeMore : ''}`}
                        >
                            <span>More</span>
                            <ChevronDown className={`${styles.chevron} ${moreOpen ? styles.rotated : ''}`} size={16} />
                        </button>

                        {/* More Popover Menu */}
                        {moreOpen && (
                            <div className={styles.popoverMenu}>
                                <a
                                    href="https://github.com/anandhmp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.popoverItem}
                                    onClick={() => setMoreOpen(false)}
                                >
                                    <div className={styles.popoverIconBox}>
                                        <Github size={20} />
                                    </div>
                                    <div className={styles.popoverText}>
                                        <h4 className={styles.popoverTitle}>My Github Profile</h4>
                                        <p className={styles.popoverDesc}>Explore my projects and contributions on GitHub.</p>
                                    </div>
                                </a>

                                <Link
                                    href="/photography"
                                    className={styles.popoverItem}
                                    onClick={() => setMoreOpen(false)}
                                >
                                    <div className={styles.popoverIconBox}>
                                        <Image size={20} />
                                    </div>
                                    <div className={styles.popoverText}>
                                        <h4 className={styles.popoverTitle}>Photography Portfolio</h4>
                                        <p className={styles.popoverDesc}>View my collection of photographs and visual art.</p>
                                    </div>
                                </Link>

                                <Link
                                    href="/contact"
                                    className={styles.popoverItem}
                                    onClick={() => setMoreOpen(false)}
                                >
                                    <div className={styles.popoverIconBox}>
                                        <Send size={20} />
                                    </div>
                                    <div className={styles.popoverText}>
                                        <h4 className={styles.popoverTitle}>Contact Me</h4>
                                        <p className={styles.popoverDesc}>Have any questions? Feel free to reach out to me.</p>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.navSpacer}></div>

                <div className={styles.actions}>
                    {!is3D && (
                        <button
                            onClick={() => setSettingsOpen(true)}
                            className={styles.settingsBtn}
                            aria-label="Open settings"
                            title="Settings"
                        >
                            <Settings size={20} className={styles.settingsIcon} />
                        </button>
                    )}

                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <AlignLeft size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {mobileMenuOpen && (
                <div className={styles.mobileDrawer}>
                    <Link
                        href="/"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${styles.mobileLink} ${router.pathname === '/' ? styles.mobileActive : ''}`}
                    >
                        <Home size={16} className={styles.mobileIcon} />
                        <span>Home</span>
                    </Link>
                    <Link
                        href="/work"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${styles.mobileLink} ${router.pathname === '/work' ? styles.mobileActive : ''}`}
                    >
                        <Briefcase size={16} className={styles.mobileIcon} />
                        <span>My work</span>
                    </Link>
                    <Link
                        href="/experience"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${styles.mobileLink} ${router.pathname === '/experience' ? styles.mobileActive : ''}`}
                    >
                        <Award size={16} className={styles.mobileIcon} />
                        <span>Experience</span>
                    </Link>
                    <Link
                        href="/technology"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${styles.mobileLink} ${router.pathname === '/technology' ? styles.mobileActive : ''}`}
                    >
                        <Cpu size={16} className={styles.mobileIcon} />
                        <span>Tech Stack</span>
                    </Link>
                    <Link
                        href="/photography"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${styles.mobileLink} ${router.pathname === '/photography' ? styles.mobileActive : ''}`}
                    >
                        <Camera size={16} className={styles.mobileIcon} />
                        <span>Photography</span>
                    </Link>
                    <Link
                        href="/3d"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${styles.mobileLink} ${router.pathname === '/3d' ? styles.mobileActive : ''}`}
                    >
                        <Globe size={16} className={styles.mobileIcon} />
                        <span>3D World</span>
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${styles.mobileLink} ${router.pathname === '/contact' ? styles.mobileActive : ''}`}
                    >
                        <Send size={16} className={styles.mobileIcon} />
                        <span>Contact</span>
                    </Link>
                </div>
            )}



            {/* Settings Modal - Don't open on /3d */}
            {settingsOpen && !is3D && mounted && createPortal(
                <div className={styles.modalOverlay} onClick={() => setSettingsOpen(false)}>
                    <div className={styles.settingsModal} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <Settings size={22} className={styles.modalIcon} />
                            <h2>Settings</h2>
                        </div>
                        <p className={styles.modalSubtitle}>
                            Here you can change your settings, like website theme or decorations.
                        </p>

                        <div className={styles.settingRow}>
                            <div className={styles.rowLabelGroup}>
                                <Sun size={18} className={styles.rowIcon} />
                                <span>Theme</span>
                            </div>
                            <div className={styles.selectWrapper}>
                                <select value={theme} onChange={handleThemeChange} className={styles.themeSelect}>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                    <option value="system">System</option>
                                </select>
                            </div>
                        </div>

                        <div className={styles.settingRow}>
                            <div className={styles.rowLabelGroup}>
                                <Sparkles size={18} className={styles.rowIcon} />
                                <span>Display decorations</span>
                            </div>
                            <label className={styles.toggleSwitch}>
                                <input
                                    type="checkbox"
                                    checked={displayDecorations}
                                    onChange={(e) => setDisplayDecorations(e.target.checked)}
                                />
                                <span className={styles.slider}></span>
                            </label>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.closeModalBtn} onClick={() => setSettingsOpen(false)}>
                                <span>Close</span>
                                <ArrowRight size={15} />
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </nav>

    );
};

export default Header;