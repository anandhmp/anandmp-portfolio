import React from 'react';
import styles from './Hero.module.scss';
import { Globe, Rocket } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className={styles.heroSection}>
            <div className={styles.heroCard}>
                <div className={styles.bgWrapper}>
                    <img
                        src="/assets/me2.jpg"
                        alt="Suhaib SZ Portrait"
                        className={styles.bgImage}
                    />
                    <div className={styles.gradientOverlay}></div>
                </div>

                <div className={styles.contentContainer}>
                    <div className={styles.textContent}>
                        <h2 className={styles.badgeLabel}>
                            <Globe size={16} className={styles.iconMargin} />
                            About me
                        </h2>
                        <h1 className={styles.mainTitle}>
                            <span className={styles.titleText}>hey, I'm Suhaib</span> <span className="animate-wave">👋</span>
                        </h1>
                        <p className={styles.bioText}>
                            FullStack Engineer from Bangalore building web applications, AI solutions, and real-world SaaS products that push the boundaries of technology.
                        </p>
                    </div>

                    <div className={styles.missionCard}>
                        <h2 className={styles.missionLabel}>
                            <Rocket size={16} className={styles.iconMargin} />
                            My Mission
                        </h2>
                        <p className={styles.missionText}>
                            Bridging the Gap Between Design and Development: Where creativity meets functionality, and innovation drives progress.
                        </p>
                        <p className={styles.missionQuote}>
                            Keep moving, don't settle. 🚀
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;