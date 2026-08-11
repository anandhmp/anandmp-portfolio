import React, { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import {
    AlignLeft, Settings, ChevronDown, ChevronRight, Sun, Moon,
    X, Github, Image, Send, Sparkles, ArrowRight, ChevronsUpDown
} from 'lucide-react';

const Header = ({ displayDecorations, setDisplayDecorations }) => {
    const [theme, setTheme] = useState('dark');
    const [activeSection, setActiveSection] = useState('home');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'dark';
        applyTheme(savedTheme);
    }, []);

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

    const handleNavClick = (sectionId) => {
        setActiveSection(sectionId);
        setMobileMenuOpen(false);
        setMoreOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'experience', 'projects', 'tech', 'contact'];
            const scrollPosition = window.scrollY + 120;

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
                <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className={styles.logo}>
                    SZ<span className={styles.logoDot}>.</span>
                </a>

                <div className={styles.desktopNav}>
                    <button
                        onClick={() => handleNavClick('home')}
                        className={`${styles.navItem} ${activeSection === 'home' ? styles.active : ''}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => handleNavClick('projects')}
                        className={`${styles.navItem} ${activeSection === 'projects' ? styles.active : ''}`}
                    >
                        My work
                    </button>
                    <button
                        onClick={() => handleNavClick('experience')}
                        className={`${styles.navItem} ${activeSection === 'experience' ? styles.active : ''}`}
                    >
                        Experience
                    </button>
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

                                <a
                                    href="#projects"
                                    className={styles.popoverItem}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('projects');
                                    }}
                                >
                                    <div className={styles.popoverIconBox}>
                                        <Image size={20} />
                                    </div>
                                    <div className={styles.popoverText}>
                                        <h4 className={styles.popoverTitle}>Photography Portfolio</h4>
                                        <p className={styles.popoverDesc}>View my collection of photographs and visual art.</p>
                                    </div>
                                </a>

                                <a
                                    href="#contact"
                                    className={styles.popoverItem}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick('contact');
                                    }}
                                >
                                    <div className={styles.popoverIconBox}>
                                        <Send size={20} />
                                    </div>
                                    <div className={styles.popoverText}>
                                        <h4 className={styles.popoverTitle}>Contact Me</h4>
                                        <p className={styles.popoverDesc}>Have any questions? Feel free to reach out to me.</p>
                                    </div>
                                </a>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.navSpacer}></div>

                <div className={styles.actions}>
                    <button
                        onClick={() => setSettingsOpen(true)}
                        className={styles.settingsBtn}
                        aria-label="Open settings"
                        title="Settings"
                    >
                        <Settings size={20} className={styles.settingsIcon} />
                    </button>

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
                    <button onClick={() => handleNavClick('home')}>Home</button>
                    <button onClick={() => handleNavClick('projects')}>My work</button>
                    <button onClick={() => handleNavClick('experience')}>Experience</button>
                    <button onClick={() => handleNavClick('about')}>About me</button>
                    <button onClick={() => handleNavClick('tech')}>Tech Stack</button>
                    <button onClick={() => handleNavClick('contact')}>Contact</button>
                </div>
            )}

            {/* Settings Modal */}
            {settingsOpen && (
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
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;