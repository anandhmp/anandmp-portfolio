import React, { useState } from 'react';
import styles from './About.module.scss';
import { ArrowRight, Github, ChevronRight, Layers, Copy, Check, Terminal } from 'lucide-react';

const About = () => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        const text = `const developer = {
  name: "Anand MP",
  title: "Full-Stack Engineer & Founder",
  experienceYears: 5,
  coreSkills: ["React / Next.js", "Node.js / NestJS", "Cloud Architecture"],
  passion: "Transforming ambitious ideas into production-grade SaaS products.",
  status: "Building Webstrike.in & Available for projects"
};`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="about" className={styles.aboutSection}>
            <div className={styles.gridContainer}>
                {/* Left Column: Text & CTAs */}
                <div className={styles.leftCol}>
                    <h2 className={styles.sectionTitle}>
                        About me<span className={styles.blueDot}>.</span>
                    </h2>

                    <div className={styles.prose}>
                        <p>
                            I started coding from scratch 5 years ago in 2020, beginning with HTML, CSS, and JavaScript to build websites.
                        </p>
                        <p>
                            My first project was a simple website built with HTML, CSS, and JavaScript (~mid-2020).
                        </p>
                        <p>
                            As I progressed, I mastered React.js and Next.js. Now, I work with all the latest tech stacks to build production-ready SaaS applications.
                        </p>
                    </div>

                    <div className={styles.ctaGroup}>
                        <a
                            href="https://github.com/anandhmp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubBtn}
                        >
                            <Github size={18} className={styles.btnIcon} />
                            <span>View my Github</span>
                            <ArrowRight size={16} className={styles.arrowIcon} />
                        </a>

                        <a href="#contact" className={styles.contactBtn}>
                            <span>Contact me</span>
                            <ArrowRight size={16} className={styles.arrowIcon} />
                        </a>
                    </div>
                </div>

                {/* Right Column: Creative Developer Code Card + 3 Stats Cards */}
                <div className={styles.rightCol}>
                    {/* Creative Developer Bio Code Window */}
                    <div className={styles.codeCard}>
                        {/* Terminal Window Header */}
                        <div className={styles.windowHeader}>
                            <div className={styles.windowDots}>
                                <span className={`${styles.dot} ${styles.redDot}`}></span>
                                <span className={`${styles.dot} ${styles.yellowDot}`}></span>
                                <span className={`${styles.dot} ${styles.greenDot}`}></span>
                            </div>
                            <div className={styles.windowTitle}>
                                <Terminal size={13} />
                                <span>aboutMe.ts</span>
                            </div>
                            <button className={styles.copyBtn} onClick={handleCopy} title="Copy code snippet">
                                {copied ? <Check size={13} color="#10b981" /> : <Copy size={13} />}
                            </button>
                        </div>

                        {/* Code Body */}
                        <div className={styles.codeBody}>
                            <pre className={styles.codeSnippet}>
                                <code>
                                    <span className={styles.comment}>/**</span>{'\n'}
                                    <span className={styles.comment}> * @developer Anand MP</span>{'\n'}
                                    <span className={styles.comment}> * @role Full-Stack Architect & Founder</span>{'\n'}
                                    <span className={styles.comment}> */</span>{'\n'}{'\n'}
                                    <span className={styles.keyword}>const</span> <span className={styles.variable}>developer</span> = &#123;{'\n'}
                                    &nbsp;&nbsp;<span className={styles.key}>name</span>: <span className={styles.string}>"Anand MP"</span>,{'\n'}
                                    &nbsp;&nbsp;<span className={styles.key}>title</span>: <span className={styles.string}>"Full-Stack Engineer & SaaS Builder"</span>,{'\n'}
                                    &nbsp;&nbsp;<span className={styles.key}>experience</span>: <span className={styles.number}>5</span> <span className={styles.comment}>// Years since 2020</span>,{'\n'}
                                    &nbsp;&nbsp;<span className={styles.key}>coreSkills</span>: [{'\n'}
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"React / Next.js"</span>,{'\n'}
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Node.js / NestJS"</span>,{'\n'}
                                    &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.string}>"Cloud & DevOps"</span>{'\n'}
                                    &nbsp;&nbsp;],{'\n'}
                                    &nbsp;&nbsp;<span className={styles.key}>passion</span>: <span className={styles.string}>"Shipping high-impact SaaS products."</span>,{'\n'}
                                    &nbsp;&nbsp;<span className={styles.key}>status</span>: <span className={styles.string}>"🟢 Building webstrike.in"</span>{'\n'}
                                    &#125;;
                                </code>
                            </pre>
                        </div>
                    </div>

                    {/* 3 Stats Cards Row */}
                    <div className={styles.statsGrid}>
                        {/* Card 1: Total Projects */}
                        <div className={styles.miniStatCard}>
                            <div className={styles.miniCardTop}>
                                <span className={styles.statVal}>50+</span>
                                <ChevronRight size={16} className={styles.miniCardIcon} />
                            </div>
                            <span className={styles.statLabel}>Total Projects</span>
                        </div>

                        {/* Card 2: Core SaaS Products */}
                        <div className={styles.miniStatCard}>
                            <div className={styles.miniCardTop}>
                                <span className={styles.statVal}>3</span>
                                <Layers size={16} className={styles.miniCardIcon} />
                            </div>
                            <span className={styles.statLabel}>Core SaaS Products</span>
                        </div>

                        {/* Card 3: Currently Building */}
                        <div className={`${styles.miniStatCard} ${styles.buildingCard}`}>
                            <div className={styles.buildingHeader}>
                                <span className={styles.greenPulseDot}></span>
                                <span className={styles.buildingLabel}>Currently Building</span>
                            </div>
                            <h4 className={styles.buildingTitle}>webstrike.in</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;