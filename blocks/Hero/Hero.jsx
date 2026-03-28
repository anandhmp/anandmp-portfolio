// components/Hero/Hero.jsx
import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {

  const stats = [
    {
      id: 1,
      icon: "bi-star-fill",
      label: "stars",
      value: "181"
    },
    {
      id: 2,
      icon: "bi-git",
      label: "commits",
      value: "4.73K"
    },
    {
      id: 3,
      icon: "bi-diagram-3-fill",
      label: "repositories forks",
      value: "16"
    },
    {
      id: 4,
      icon: "bi-people-fill",
      label: "GitHub followers",
      value: "608"
    }
  ];


  return (
    <>
      <div id="home" className={styles.heroBanner}>
        <div className={styles.heroBgImg}>
          <div className={styles.avatarPlaceholder}>SZ</div>
          <div className={styles.blob1}></div>
          <div className={styles.blob2}></div>
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroLabel}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
            About me
          </div>
          <h1 className={styles.heroTitle}>
            hey, I'm Anand<span className={styles.wave}>👋</span>
          </h1>
          <p className={styles.heroDesc}>
            FullStack Engineer from Bangalore building web applications, AI solutions, and real-world SaaS products that push the boundaries of technology.
          </p>
          <div className={styles.missionCard}>
            <div className={styles.missionLabel}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
              My Mission
            </div>
            <p className={styles.missionText}>
              Bridging the Gap Between Design and Development: Where creativity meets functionality, and innovation drives progress.
            </p>
            <p className={styles.missionTagline}>Keep moving, don't settle. 🚀</p>
          </div>
        </div>

      </div>
      <div className={styles.bottomDiv}>
        {stats.map(({ id, icon, value, label }) => (
          <div key={id} className={styles.statItem}>
            <i className={`bi ${icon}`}></i>
            <span className={styles.value}>{value}</span>
            <span className={styles.label}>{label}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hero;