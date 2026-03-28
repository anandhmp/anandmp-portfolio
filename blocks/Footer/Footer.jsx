// components/Footer/Footer.jsx
import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr className={styles.footerHr} />
      <p className={styles.footerCopy}>Copyright © 2021 - 2026 Suhaib SZ</p>
      <div className={styles.footerCols}>
        <div className={styles.footerCol}>
          <p className={styles.footerColTitle}>Important Links</p>
          <a href="#home" className={styles.footerLink}>Home</a>
          <a href="#projects" className={styles.footerLink}>My work</a>
          <a href="#" className={styles.footerLink}>Blog</a>
          <a href="#" className={styles.footerLink}>Resume</a>
        </div>
        <div className={styles.footerCol}>
          <p className={styles.footerColTitle}>Social</p>
          <a href="https://github.com/Suhaib3100" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Github</a>
          <a href="https://instagram.com/suhaib_s_z" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Instagram</a>
          <a href="https://discord.gg/sgt4QEyDxK" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Discord</a>
        </div>
        <div className={styles.footerCol}>
          <p className={styles.footerColTitle}>Other</p>
          <a href="#" className={styles.footerLink}>What I use</a>
          <a href="#contact" className={styles.footerLink}>Contact</a>
          <a href="#" className={styles.footerLink}>Photography</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;