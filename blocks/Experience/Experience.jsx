import React from 'react';
import styles from './Experience.module.scss';
import { ArrowUpRight, Globe, FileText, ArrowRight } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: 'Webstrike Solutions',
            role: 'Software Engineer',
            period: 'October 2024 - Present',
            isLive: true,
            location: 'Trivandrum, India',
            logoType: 'webstrike',
            fullLogo: '/assets/logos/webstrike_full.png',
            subtitle: 'SaaS eCommerce & Business Platform Development',
            points: [
                '— Developing SaaS-based eCommerce and business themes using modern web technologies.',
                '— Building scalable and customizable web applications using React.js, Next.js, JavaScript, TypeScript, and Node.js.',
                '— Designed and developed a custom Page Builder and Editor that enables non-technical users to create, edit, customize, and manage web pages without developer support.',
                '— Implemented drag-and-drop page creation, live preview, HTML editing, page management, theme customization, and SEO-related functionality.',
                '— Developed customer onboarding workflows covering domain search, domain selection, business details, store configuration, and store launch.',
                '— Implemented real-time location detection using latitude and longitude as part of the customer onboarding process.',
                '— Developed customizable eCommerce themes with features such as responsive layouts, SEO optimization, PWA support, code splitting, image optimization, and web analytics.',
                '— Built business-oriented web solutions with modules for lead management, blogs, careers, and content management.',
                '— Developed and integrated REST APIs for frontend and backend communication.',
                '— Worked with MongoDB for application data management and backend integrations.',
                '— Used Git and GitHub for version control and collaborative development.',
                '— Worked with development and project management tools including Jira, Slack, Trello, and Teams.',
                '— Deployed and maintained web applications using platforms such as AWS and Cloudflare.'
            ],
            tech: ['Next.js', 'React.js', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Redux', 'Axios', 'HTML5', 'CSS3', 'Bootstrap', 'Git', 'GitHub']
        },
        {
            company: 'Mashupstack',
            role: 'Software Developer Intern',
            period: 'August 2023 - February 2024',
            location: 'Trivandrum, India',
            logoType: 'mashup',
            fullLogo: '/assets/logos/mashupstack_full.png',
            subtitle: 'Real-time web development & full-stack web applications',
            points: [
                '— Contributed to real-time web development projects using modern frontend and backend technologies.',
                '— Developed responsive and interactive user interfaces using HTML, CSS, JavaScript, React.js, and Bootstrap.',
                '— Worked on React-based application development using reusable components and structured frontend architectures.',
                '— Integrated REST APIs with frontend applications and handled API requests and responses using Axios.',
                '— Worked with backend technologies including Python Django and Laravel PHP as part of full-stack project development.',
                '— Implemented database operations and worked with backend application logic under the guidance of experienced developers.',
                '— Used Git and GitHub for source code management and collaborative development.',
                '— Participated in debugging, testing, feature implementation, and resolving development issues.',
                '— Followed software development best practices and learned production-oriented development workflows through mentor guidance.',
                '— Gained practical experience in building and maintaining real-world web applications in a team environment.'
            ],
            tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap', 'Python', 'Django', 'Laravel', 'PHP', 'REST APIs', 'Axios', 'Git', 'GitHub']
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
                My professional journey in building scalable web applications, custom SaaS engines, and modern eCommerce platforms.
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
