import React from 'react';
import styles from './Experience.module.scss';
import { ArrowUpRight, Globe, FileText, ArrowRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Webstrike Solutions LLP',
            role: 'Co-Founder & Developer',
            period: 'May 2024 - Present',
            isLive: true,
            location: 'Trivandrum, India',
            logoType: 'webstrike',
            fullLogo: '/assets/logos/webstrike_full.png',
            subtitle: 'Digital marketing technology & Agentic AI software company',
            points: [
                '— Co-founded Webstrike Solutions LLP, driving technical strategy, digital marketing tech, and Agentic AI innovation.',
                '— Architected Agentic AI systems, RAG (Retrieval-Augmented Generation) pipelines, and Node.js backend services.',
                '— Implemented DevOps automation pipelines and cloud infrastructure for client SaaS platforms and marketing tools.'
            ],
            tech: ['Agentic AI', 'RAG', 'Node.js', 'DevOps', 'Next.js', 'Digital Marketing']
        },
        {
            company: 'Skartio AI Cloud',
            role: 'Software Engineer',
            period: 'May 2024 - Present',
            isLive: true,
            location: 'Trivandrum, India',
            logoType: 'skartio',
            fullLogo: '/assets/logos/skartio_full.png',
            subtitle: 'SaaS-based eCommerce engine & interactive theme ecosystem',
            points: [
                '— Architected and developed SaaS-based eCommerce platforms and high-converting business themes for merchants.',
                '— Built custom drag-and-drop Page Builder and visual Editor systems empowering non-technical users to design web pages.',
                '— Optimized frontend rendering performance, theme customization engines, and modular UI component libraries.'
            ],
            tech: ['React', 'Next.js', 'Page Builder', 'SCSS', 'SaaS Architecture']
        },
        {
            company: 'Mashupstack',
            role: 'Software Developer',
            period: 'Aug 2023 - Feb 2024',
            location: 'Trivandrum, India',
            logoType: 'mashup',
            fullLogo: '/assets/logos/mashupstack_full.png',
            subtitle: 'Full-stack software engineering & real-time web development',
            points: [
                '— Developed real-time web applications using Python Django, Laravel PHP, and modern React frontend architectures.',
                '— Implemented industry best practices, database ORM queries, and version control workflows under team guidance.',
                '— Built REST APIs, server-side rendering routes, and dynamic UI components across client production codebases.'
            ],
            tech: ['Python', 'Django', 'Laravel', 'PHP', 'React', 'Git']
        }
    ];

    const renderLogo = (logoType) => {
        if (logoType === 'webstrike') {
            return <img src="/assets/logos/webstrike.jpg" alt="Webstrike Solutions Logo" className={styles.logoImg} />;
        }
        if (logoType === 'skartio') {
            return <img src="/assets/logos/skartio.png" alt="Skartio AI Cloud Logo" className={styles.logoImg} />;
        }
        return <img src="/assets/logos/mashupstack.png" alt="Mashupstack Logo" className={styles.logoImg} />;
    };

    return (
        <section id="experience" className={styles.experienceSection}>
            <h2 className={styles.sectionTitle}>
                Experience<span className={styles.blueDot}>.</span>
            </h2>
            <p className={styles.subtitle}>
                My professional journey from software development to engineering SaaS platforms and co-founding Webstrike Solutions.
            </p>

            <div className={styles.timelineList}>
                {experiences.map((exp, idx) => (
                    <div key={idx} className={styles.timelineRow}>
                        {/* Company Logo Avatar on the left */}
                        <div className={styles.logoAvatarBox}>
                            {renderLogo(exp.logoType)}
                        </div>

                        {/* Experience Card */}
                        <div className={styles.experienceCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.titleGroup}>
                                    <div className={styles.roleRow}>
                                        <h3 className={styles.roleTitle}>{exp.role}</h3>
                                    </div>
                                    {/* <div className={styles.companyLogoWrap}>
                                        {exp.fullLogo ? (
                                            <img src={exp.fullLogo} alt={exp.company} className={styles.fullCompanyLogo} />
                                        ) : (
                                            <span className={styles.companyName}>{exp.company}</span>
                                        )}
                                    </div> */}
                                </div>

                                <div className={styles.metaGroup}>
                                    <div className={styles.periodRow}>
                                        {exp.isLive && <span className={styles.liveGreenDot}></span>}
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className={styles.locationRow}>
                                        <Globe size={12} />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>
                            </div>

                            <p className={styles.companySubtitle}>{exp.subtitle}</p>

                            <div className={styles.pointsList}>
                                {exp.points.map((pt, pIdx) => (
                                    <p key={pIdx} className={styles.pointItem}>
                                        {pt}
                                    </p>
                                ))}
                            </div>

                            <div className={styles.techList}>
                                {exp.tech.map((t, tIdx) => (
                                    <span key={tIdx} className={styles.techChip}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={styles.resumeContainer}>
                <a href="/resume" className={styles.resumeBtn}>
                    <FileText size={16} />
                    <span>View full resume</span>
                    <ArrowRight size={14} />
                </a>
            </div>
        </section>
    );
};

export default Experience;
