import React from 'react';
import styles from './Experience.module.scss';
import { ArrowUpRight, Globe, FileText, ArrowRight, Zap } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Tsenta',
            role: 'Software Engineer',
            ycBadge: 'Combinator S26',
            period: 'Mar 2026 - Present',
            isLive: true,
            location: 'Remote, US',
            logoType: 'tsenta',
            subtitle: 'Y Combinator startup automating job applications across 12+ ATS platforms',
            points: [
                '— Lead engineer for all user-facing technology, owning the stack from the Electron desktop app to cloud worker infrastructure.',
                '— Built the on-device browser automation that applies across 12+ ATS platforms (Workday, Greenhouse, Lever, Ashby), keeping users in live, transparent control of every submission.',
                'Reverse-engineered ATS network requests and architected the cloud worker-core for AI-driven form filling, resume optimization, and job matching at scale.',
                'Shipped the React Native mobile app, the Chrome extension, and a user-facing MCP server.'
            ],
            tech: ['Electron', 'React Native', 'Next.js', 'MCP', 'Cloud Workers']
        },
        {
            company: 'Percify',
            role: 'Chief Technical Officer',
            period: 'May 2025 - Mar 2026',
            location: 'Remote',
            logoType: 'percify',
            subtitle: 'AI avatar generation platform with 100k+ avatars created',
            points: [
                'Led the technical vision and built an AI-first SaaS platform from zero to production across web, API, workers, and cloud.',
                '— Designed a modular monorepo with multiple Next.js apps, a NestJS backend, background workers, and shared packages.',
                '— Owned architecture for AI generation pipelines, billing, authentication, media processing, and analytics.'
            ],
            tech: ['Next.js', 'NestJS', 'AI / ML', 'PostgreSQL', 'Cloud']
        },
        {
            company: 'Pronexus Tech',
            role: 'Founder & CEO',
            period: 'Oct 2022 - Present',
            location: 'Bangalore, India',
            logoType: 'pronexus',
            subtitle: 'Software studio shipping SaaS and enterprise products for clients',
            points: [
                '— Founded and led a cross-functional team that launched 10+ web and mobile applications.',
                'Delivered scalable SaaS and enterprise solutions on React, Node.js, and AWS with a 90% client satisfaction rating.',
                'Built deployment pipelines and engineering standards that doubled delivery speed while keeping codebases secure and maintainable.'
            ],
            tech: ['React', 'Node.js', 'AWS', 'Next.js']
        }
    ];

    const renderLogo = (logoType) => {
        if (logoType === 'tsenta') {
            return <span className={styles.tsentaLogo}>▲</span>;
        }
        if (logoType === 'percify') {
            return <span className={styles.percifyLogo}><Zap size={22} fill="#eab308" color="#eab308" /></span>;
        }
        return <span className={styles.pronexusLogo}>P</span>;
    };

    return (
        <section id="experience" className={styles.experienceSection}>
            <h2 className={styles.sectionTitle}>
                Experience<span className={styles.blueDot}>.</span>
            </h2>
            <p className={styles.subtitle}>
                From founding my own studio to leading AI products and shipping the full stack at a YC-backed startup.
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
                                        {exp.ycBadge && (
                                            <span className={styles.ycPill}>
                                                <span className={styles.ycY}>Y</span> {exp.ycBadge}
                                            </span>
                                        )}
                                    </div>
                                    <a href="#" className={styles.companyLink}>
                                        {exp.company} <ArrowUpRight size={14} />
                                    </a>
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
                <a href="#contact" className={styles.resumeBtn}>
                    <FileText size={16} />
                    <span>View full resume</span>
                    <ArrowRight size={14} />
                </a>
            </div>
        </section>
    );
};

export default Experience;
