import React, { useState } from 'react';
import styles from './Contact.module.scss';
import { Send, ArrowRight, CheckCircle2, AtSign } from 'lucide-react';
import { SiDiscord, SiX, SiInstagram } from 'react-icons/si';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setStatus('error');
            return;
        }
        setStatus('submitting');
        setTimeout(() => {
            setStatus('success');
            setName('');
            setEmail('');
            setMessage('');
        }, 1000);
    };

    const isValid = name.trim().length > 0 && email.trim().length > 0 && email.includes('@') && message.trim().length > 0;

    return (
        <section id="contact" className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>
                Contact me<span className={styles.blueDot}>.</span>
            </h2>
            <p className={styles.subtitle}>
                I'm always eager to explore new opportunities and take on exciting projects. If you have a project in mind, or just want to say hi, feel free to send me a message.
            </p>

            <div className={styles.formCard}>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.inputRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">
                                Name<span className={styles.required}>*</span>
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email">
                                Email<span className={styles.required}>*</span>
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="john@doe.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">
                            Message<span className={styles.required}>*</span>
                        </label>
                        <textarea
                            id="message"
                            rows={5}
                            maxLength={500}
                            placeholder="Hello there, I would like to ask you about..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.formFooter}>
                        <div className={styles.charCounter}>
                            {message.length}/500 characters
                        </div>

                        {status === 'success' ? (
                            <div className={styles.successMessage}>
                                <CheckCircle2 size={16} />
                                <span>Message sent!</span>
                            </div>
                        ) : (
                            <button
                                type="submit"
                                className={`${styles.submitBtn} ${isValid ? styles.validBtn : ''}`}
                                disabled={status === 'submitting'}
                            >
                                <Send size={15} />
                                <span>{status === 'submitting' ? 'Sending...' : 'Send'}</span>
                            </button>
                        )}
                    </div>
                </form>
            </div>

            <div className={styles.socialConnectSection}>
                <p className={styles.connectLabel}>Or contact me with...</p>
                <div className={styles.socialGrid}>
                    <a href="mailto:anandmpmtd@gmail.com" className={styles.socialPill}>
                        <AtSign size={16} className={styles.pillIcon} />
                        <span>Email</span>
                        <ArrowRight size={14} className={styles.pillArrow} />
                    </a>

                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
                        <SiDiscord size={16} color="#5865F2" className={styles.pillIcon} />
                        <span>Discord</span>
                        <ArrowRight size={14} className={styles.pillArrow} />
                    </a>

                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
                        <SiX size={14} className={styles.pillIcon} />
                        <span>Twitter / X</span>
                        <ArrowRight size={14} className={styles.pillArrow} />
                    </a>

                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialPill}>
                        <SiInstagram size={16} color="#E4405F" className={styles.pillIcon} />
                        <span>Instagram</span>
                        <ArrowRight size={14} className={styles.pillArrow} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;