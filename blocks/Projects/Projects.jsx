import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Projects.module.scss';
import { ExternalLink, Github, ArrowRight, FileText, ChevronDown, Camera, X, Sparkles, Code, Layers, Globe, ShoppingBag } from 'lucide-react';
import {
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
    SiPostgresql, SiExpress, SiNodedotjs
} from 'react-icons/si';

const Projects = () => {
    const router = useRouter();
    const [selectedProject, setSelectedProject] = useState(null);
    const [expandedDesc, setExpandedDesc] = useState({});
    const [showAllProjects, setShowAllProjects] = useState(router.pathname === '/work');

    const toggleExpand = (id) => {
        setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const projects = [
        {
            id: 'page-builder',
            title: 'Page Builder & Page Editor',
            domain: 'webstrike.in',
            period: 'Nov 2024 - Feb 2025',
            image: '/assets/projects/pagebuilder.png',
            shortDesc: 'A customizable web page management system developed for a SaaS eCommerce platform, enabling non-technical users and business teams to create, customize, and manage website pages without developer support.',
            fullDesc: 'A customizable web page management system developed for a SaaS eCommerce platform, enabling non-technical users and business teams to create, customize, and manage website pages without developer support.\n\nKey Features:\n• Visual drag-and-drop page builder\n• Live preview and real-time editing\n• Custom HTML editor and page management\n• Theme, color, font, and layout customization\n• SEO and metadata management\n• Built-in analytics\n• HTML page upload and import\n• No-code page publishing and deployment',
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
                { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
                { name: 'REST APIs', icon: <Code size={14} color="#10B981" /> },
                { name: 'Page Builder', icon: <Layers size={14} color="#38BDF8" /> },
                { name: 'SEO', icon: <Sparkles size={14} color="#EAB308" /> },
            ],
            liveUrl: 'https://webstrike.in',
            caseStudyUrl: '#',
            layout: 'image-left'
        },
        {
            id: 'customer-onboarding',
            title: 'Customer Onboarding & Store Launcher',
            domain: 'webstrike.in',
            period: 'Nov 2024 - Feb 2025',
            image: '/assets/projects/onboarding.png',
            shortDesc: 'An end-to-end onboarding system designed to guide customers from domain search and selection to the configuration and launch of their eCommerce store.',
            fullDesc: 'An end-to-end onboarding system designed to guide customers from domain search and selection to the configuration and launch of their eCommerce store.\n\nKey Features:\n• Domain search and availability checking\n• Domain selection and purchase integration\n• Business information setup\n• Real-time location detection using latitude and longitude\n• Automated business location setup\n• Store configuration and customization\n• Guided onboarding workflow\n• Live setup progress and status\n• Instant store launch',
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Node.js', icon: <SiNodedotjs color="#5FA04E" /> },
                { name: 'REST APIs', icon: <Code size={14} color="#10B981" /> },
                { name: 'Domain APIs', icon: <Globe size={14} color="#38BDF8" /> },
                { name: 'JavaScript', icon: <Code size={14} color="#F7DF1E" /> },
                { name: 'Automated Onboarding', icon: <Sparkles size={14} color="#10B981" /> },
            ],
            liveUrl: 'https://webstrike.in',
            caseStudyUrl: '#',
            layout: 'image-right'
        },
        {
            id: 'unified-business',
            title: 'Unified Business Solutions',
            domain: 'webstrike.in',
            period: 'Nov 2024 - Feb 2025',
            image: '/assets/projects/unified_business.png',
            shortDesc: 'A centralized business management platform designed for small and medium-sized businesses to manage their digital operations without depending on developers.',
            fullDesc: 'A centralized business management platform designed for small and medium-sized businesses to manage their digital operations without depending on developers.\n\nKey Features:\n• Lead management\n• Career and job application management\n• Corporate blog management\n• Content management\n• Centralized business administration\n• Reusable and modular management components',
            tech: [
                { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'JavaScript', icon: <Code size={14} color="#F7DF1E" /> },
                { name: 'REST APIs', icon: <Code size={14} color="#10B981" /> },
                { name: 'MongoDB', icon: <Layers size={14} color="#47A248" /> },
                { name: 'CMS', icon: <FileText size={14} color="#38BDF8" /> },
            ],
            liveUrl: 'https://webstrike.in',
            caseStudyUrl: '#',
            layout: 'image-left'
        },
        {
            id: 'ecommerce-theme',
            title: 'Customizable eCommerce Web Theme',
            domain: 'webstrike.in',
            period: 'Nov 2024 - Feb 2025',
            image: '/assets/projects/ecommerce_theme.png',
            shortDesc: 'A scalable and customizable eCommerce theme built for SaaS-based online stores, providing businesses with a flexible storefront that can be customized without direct developer involvement.',
            fullDesc: 'A scalable and customizable eCommerce theme built for SaaS-based online stores, providing businesses with a flexible storefront that can be customized without direct developer involvement.\n\nKey Features:\n• Responsive eCommerce interface\n• Customizable storefront components\n• SEO optimization\n• Progressive Web App support\n• Code splitting\n• Image optimization\n• Web analytics integration\n• Performance-focused architecture',
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
                { name: 'JavaScript', icon: <Code size={14} color="#F7DF1E" /> },
                { name: 'PWA', icon: <Globe size={14} color="#38BDF8" /> },
                { name: 'SEO', icon: <Sparkles size={14} color="#EAB308" /> },
                { name: 'Web Analytics', icon: <Code size={14} color="#10B981" /> },
                { name: 'eCommerce', icon: <ShoppingBag size={14} color="#F59E0B" /> },
            ],
            liveUrl: 'https://webstrike.in',
            caseStudyUrl: '#',
            layout: 'image-right'
        }
    ];

    const displayedProjects = (showAllProjects || router.pathname === '/work') ? projects : projects.slice(0, 3);

    const renderBrowserFrame = (proj) => (
        <div className={styles.browserFrame}>
            <div className={styles.browserHeader}>
                <div className={styles.browserDots}>
                    <span className={`${styles.dot} ${styles.redDot}`}></span>
                    <span className={`${styles.dot} ${styles.yellowDot}`}></span>
                    <span className={`${styles.dot} ${styles.greenDot}`}></span>
                </div>
                <div className={styles.urlBar}>{proj.domain}</div>
            </div>
            <div className={styles.browserBody}>
                <img src={proj.image} alt={proj.title} className={styles.previewImage} />
                {proj.imageBadge && (
                    <span className={styles.imgBadge}>
                        <Camera size={12} /> {proj.imageBadge}
                    </span>
                )}
            </div>
        </div>
    );

    const renderDetails = (proj) => (
        <div className={styles.detailsCol}>
            <h3 className={styles.projectTitle}>{proj.title}</h3>
            <span className={styles.periodText}>{proj.period}</span>

            <p className={styles.descText}>
                {expandedDesc[proj.id] ? proj.fullDesc : proj.shortDesc}
            </p>

            <button
                className={styles.readMoreBtn}
                onClick={() => toggleExpand(proj.id)}
            >
                <span>{expandedDesc[proj.id] ? 'Read less' : 'Read more'}</span>
                <ChevronDown size={14} className={`${styles.chevron} ${expandedDesc[proj.id] ? styles.rotated : ''}`} />
            </button>

            <div className={styles.techGrid}>
                {proj.tech.map((t, idx) => (
                    <div key={idx} className={styles.techTag}>
                        <span className={styles.techIcon}>{t.icon}</span>
                        <span>{t.name}</span>
                    </div>
                ))}
            </div>

            <div className={styles.actionButtons}>
                {proj.liveUrl && (
                    <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewLiveBtn}
                    >
                        <ExternalLink size={16} />
                        <span>View Live</span>
                    </a>
                )}
                {proj.githubUrl && (
                    <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.secondaryBtn}
                    >
                        <Github size={16} />
                        <span>GitHub</span>
                    </a>
                )}
                {proj.caseStudyUrl && (
                    <button
                        onClick={() => setSelectedProject(proj)}
                        className={styles.secondaryBtn}
                    >
                        <FileText size={16} />
                        <span>Case study</span>
                    </button>
                )}
            </div>
        </div>
    );

    return (
        <section id="projects" className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>
                Featured Projects<span className={styles.blueDot}>.</span>
            </h2>
            <p className={styles.subtitle}>
                Selected projects focused on SaaS eCommerce, no-code website management, automated onboarding, and business management platforms.
            </p>

            <div className={styles.projectsList}>
                {displayedProjects.map((proj) => (
                    <div key={proj.id} className={styles.projectCard}>
                        {proj.layout === 'image-left' ? (
                            <>
                                <div className={styles.frameCol}>{renderBrowserFrame(proj)}</div>
                                {renderDetails(proj)}
                            </>
                        ) : (
                            <>
                                {renderDetails(proj)}
                                <div className={styles.frameCol}>{renderBrowserFrame(proj)}</div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {!showAllProjects && router.pathname !== '/work' && (
                <div className={styles.moreProjectsSection}>
                    <p className={styles.moreText}>Want to see more?</p>
                    <Link
                        href="/work"
                        className={styles.moreProjectsBtn}
                    >
                        <span>More Projects</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>
            )}

            {/* Case Study Modal */}
            {selectedProject && (
                <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                            <X size={20} />
                        </button>
                        <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                        <span className={styles.modalPeriod}>{selectedProject.period}</span>
                        <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, margin: '1rem 0' }}>
                            {selectedProject.fullDesc}
                        </div>

                        <div className={styles.techGrid} style={{ marginTop: '1.25rem' }}>
                            {selectedProject.tech.map((t, idx) => (
                                <div key={idx} className={styles.techTag}>
                                    <span className={styles.techIcon}>{t.icon}</span>
                                    <span>{t.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;