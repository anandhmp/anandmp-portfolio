import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Footer.module.scss';
import { ArrowRight, Box, X } from 'lucide-react';

const Footer = () => {
    const router = useRouter();
    const is3D = router.pathname === '/3d';
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setShowBanner(true);
            } else {
                setShowBanner(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer className={styles.footerSection}>
            <div className={styles.footerGrid}>
                {/* Brand & Copyright */}
                <div className={styles.brandCol}>
                    <h3 className={styles.brandTitle}>
                        Anand<span className="text-gradient">.</span>
                    </h3>
                    <p className={styles.copyrightText}>
                        Copyright © 2020 - 2026 Anand
                    </p>
                </div>

                {/* Important Links */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Important Links</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/work">My work</Link></li>
                        <li><Link href="/experience">Experience</Link></li>
                        <li><Link href="/resume">Resume</Link></li>
                    </ul>
                </div>

                {/* Social */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Social</h4>
                    <ul className={styles.linkList}>
                        <li><a href="https://github.com/anandhmp" target="_blank" rel="noopener noreferrer">Github</a></li>
                        <li><a href="https://www.instagram.com/official.anandmp/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://discord.com/users/anand_mp1704" target="_blank" rel="noopener noreferrer">Discord</a></li>
                        <li><a href="https://x.com/AnandMP07" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
                    </ul>
                </div>

                {/* Other */}
                <div className={styles.linkCol}>
                    <h4 className={styles.colTitle}>Other</h4>
                    <ul className={styles.linkList}>
                        <li><Link href="/technology">What i use</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/photography">Photography</Link></li>
                    </ul>
                </div>
            </div>

            {/* Floating 3D Fun Banner matching screenshot - Shows ONLY after scroll */}
            {showBanner && (
                <div className={styles.banner3D}>
                    <div className={styles.bannerLeft}>
                        <div className={styles.cubeIconBox}>
                            <Box size={20} className={styles.cubeIcon} />
                        </div>
                        <div className={styles.bannerTextGroup}>
                            <p className={styles.bannerLine1}>
                                <span className={styles.boldTitle}>
                                    {is3D ? '3D Planet Mode Active' : 'Want the fun version?'}
                                </span>
                            </p>
                            <p className={styles.bannerLine2}>
                                {is3D ? 'Click Exit 3D to return.' : 'Explore in 3D mode.'}
                            </p>
                        </div>
                    </div>

                    {is3D ? (
                        <Link href="/" className={styles.btn3DPill} style={{ background: '#ef4444' }}>
                            <span>Exit 3D</span>
                            <X size={14} />
                        </Link>
                    ) : (
                        <Link href="/3d" className={styles.btn3DPill}>
                            <span>Enter 3D</span>
                            <ArrowRight size={14} />
                        </Link>
                    )}
                </div>
            )}
        </footer>
    );
};

export default Footer;