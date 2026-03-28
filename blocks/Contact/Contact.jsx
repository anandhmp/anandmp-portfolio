// components/Contact/Contact.jsx
import React, { useState } from 'react';
import styles from './Contact.module.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [charCount, setCharCount] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
    if (id === 'c-msg') {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setCharCount(0);
      
      setTimeout(() => {
        setIsSent(false);
      }, 3000);
    }, 1200);
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.sectionHeading}>
        Contact me<span className={styles.gradText}>.</span>
      </h2>
      <p className={styles.sectionDesc}>
        I'm always eager to explore new opportunities and take on exciting projects. Feel free to send me a message.
      </p>

      <div className={styles.contactFormWrap}>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="name">
                Name<span className={styles.req} title="Required">*</span>
              </label>
              <input
                className={styles.formInput}
                id="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">
                Email<span className={styles.req} title="Required">*</span>
              </label>
              <input
                className={styles.formInput}
                id="email"
                type="email"
                placeholder="john@doe.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div style={{ marginTop: '12px' }}>
            <label className={styles.formLabel} htmlFor="message">
              Message<span className={styles.req} title="Required">*</span>
            </label>
            <textarea
              className={styles.formTextarea}
              id="message"
              placeholder="Hello there, I would like to ask you about..."
              maxLength="500"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <div className={styles.charCount}>
              {charCount}/500 characters
            </div>
          </div>
          <div className={styles.formSubmitRow}>
            <button
              type="submit"
              className={`${styles.btn} ${styles.btnNeutral}`}
              disabled={isSending}
              style={isSent ? { background: '#22c55e', color: 'white' } : {}}
            >
              {isSending ? (
                <>
                  <svg viewBox="0 0 24 24" style={{ animation: 'spin 0.8s linear infinite' }}>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Sending…
                </>
              ) : isSent ? (
                '✓ Sent!'
              ) : (
                <>
                  <svg viewBox="0 0 24 24">
                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                    <path d="m21.854 2.147-10.94 10.939" />
                  </svg>
                  Send
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <p className={styles.contactOr}>Or contact me with...</p>
      <div className={styles.contactLinks}>
        <a href="mailto:suhaibking310@gmail.com" className={`${styles.btn} ${styles.btnOutline}`}>
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
          </svg>
          Email
          <span className={styles.btnArrow}>
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </a>
        <a href="https://discord.gg/sgt4QEyDxK" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
          <svg viewBox="0 0 71 55" fill="#5865F2" style={{ width: '18px', height: '18px' }}>
            <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" />
          </svg>
          Discord
          <span className={styles.btnArrow}>
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </a>
        <a href="https://x.com/@suhaibking" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
          <svg viewBox="0 0 22 20" fill="currentColor" style={{ width: '16px', height: '16px' }}>
            <path d="M16.99 0H20.298L13.071 8.26L21.573 19.5H14.916L9.702 12.683L3.736 19.5H0.426L8.156 10.665L0 0H6.826L11.539 6.231L16.99 0ZM15.829 17.52H17.662L5.83 1.876H3.863L15.829 17.52Z" />
          </svg>
          Twitter / X
          <span className={styles.btnArrow}>
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </a>
        <a href="https://www.instagram.com/suhaib_s_z/" target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnOutline}`}>
          <span style={{ fontSize: '16px' }}>📸</span>
          Instagram
          <span className={styles.btnArrow}>
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default Contact;