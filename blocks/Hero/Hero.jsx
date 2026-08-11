import React from 'react';
import styles from './Hero.module.scss';
import { Globe, Rocket } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className={styles.heroSection}>
            <div className={styles.heroCard}>
                <div className={styles.bgWrapper}>
                    {/* Ambient blurred fill matching photo tones */}
                    <img
                        src="/assets/me2.jpg"
                        alt=""
                        className={styles.ambientBlurBg}
                    />
                    {/* Crisp portrait on right */}
                    <img
                        src="/assets/me2.jpg"
                        alt="Anand MP Portrait"
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
                            <span className={styles.titleText}>hey, I'm Anand</span> <span className="animate-wave">👋</span>
                        </h1>
                        <p className={styles.bioText}>
                            FullStack Engineer from Trivandrum, building web applications, Solutions, and real-world SaaS products that push the boundaries of technology.
                        </p>
                    </div>

                    <div className={styles.missionCard}>
                        <h2 className={styles.missionLabel}>
                            <Rocket size={16} className={styles.iconMargin} />
                            My Mission
                        </h2>
                        <p className={styles.missionText}>
                            A jack of all trades, master of execution: Seamlessly connecting full-stack engineering, intuitive design to deliver high-performance products.
                        </p>
                        <p className={styles.missionQuote}>
                            Jack of all trades, master of all. 🚀
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;