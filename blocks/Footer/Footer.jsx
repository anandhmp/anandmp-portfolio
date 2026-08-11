import React from 'react';
import styles from './Footer.module.scss';
import { ArrowRight, Box } from 'lucide-react';

const Footer = () => {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerGrid}>
                {/* Brand & Copyright */}
                <div className={styles.brandCol}>
                    <h3 className={styles.brandTitle}>
                        Suhaib SZ<span className="text-gradient">.</span>
                    </h3>
                    <p className={styles.copyrightText}>
                        Copyright © 2021 - 2026 Suhaib SZ
                    </p>
                </div>

                {/* Important Links */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Important Links</h4>
                    <ul className={styles.linkList}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#projects">My work</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Resume</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Social</h4>
                    <ul className={styles.linkList}>
                        <li><a href="https://github.com/anandhmp" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
                    </ul>
                </div>

                {/* Other */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Other</h4>
                    <ul className={styles.linkList}>
                        <li><a href="#tech">What i use</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#projects">Photography</a></li>
                    </ul>
                </div>
            </div>

            {/* Floating 3D Fun Banner matching screenshot */}
            <div className={styles.banner3D}>
                <div className={styles.bannerLeft}>
                    <div className={styles.cubeIconBox}>
                        <Box size={20} className={styles.cubeIcon} />
                    </div>
                    <div className={styles.bannerTextGroup}>
                        <p className={styles.bannerLine1}>
                            <span className={styles.boldTitle}>Want the fun version?</span> Same portfolio,
                        </p>
                        <p className={styles.bannerLine2}>
                            but you fly through a little planet.
                        </p>
                    </div>
                </div>

                <a href="#" className={styles.btn3DPill}>
                    <span>Enter 3D</span>
                    <ArrowRight size={14} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;