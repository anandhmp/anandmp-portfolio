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
            domain: 'skartio.com',
            period: 'May 2024 - Present',
            image: '/assets/projects/pagebuilder.png',
            shortDesc: 'Fully customizable web page management system developed for Skartio’s SaaS platform. This tool was built to enable non-developers and business users to take full control of content and layouts...',
            fullDesc: 'Fully customizable web page management system developed for Skartio’s SaaS platform. This tool was built to enable non-developers and business users to take full control of their website content and layout, eliminating the need for technical support.\n\nKey Capabilities:\n• Visual Drag-and-Drop Interface\n• Live Preview & Real-Time Editing\n• Theme Customization & Layout Controls\n• Page Management Tools & Built-in Analytics\n• SEO & Metadata Management\n• Instant No-Code Deployment',
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'React', icon: <SiReact color="#61DAFB" /> },
                { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
                { name: 'Page Builder', icon: <Layers size={14} color="#38BDF8" /> },
                { name: 'SEO & Analytics', icon: <Sparkles size={14} color="#EAB308" /> },
            ],
            liveUrl: 'https://webstrike.in',
            caseStudyUrl: '#',
            layout: 'image-left'
        },
        {
            id: 'customer-onboarding',
            title: 'Customer Onboarding & Store Launcher',
            domain: 'skartio.cloud',
            period: 'May 2024 - Present',
            image: '/assets/projects/onboarding.png',
            shortDesc: 'Automated customer onboarding platform featuring live domain search, instant domain acquisition, tiered pricing model selection, and zero-downtime eCommerce store launching...',
            fullDesc: 'End-to-end customer onboarding platform integrated with live domain search and instant domain acquisition APIs. Enables clients to search available domain names, acquire domains, submit registration details, select appropriate pricing plans, and instantly launch their targeted eCommerce store model (B2C, B2B, Dropshipping, Hybrid Commerce Cloud, Marketplace, or Enterprise Cloud flow) with zero technical friction.',
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Domain Search API', icon: <Globe size={14} color="#38BDF8" /> },
                { name: 'Automated Onboarding', icon: <Code size={14} color="#10B981" /> },
                { name: 'B2B / B2C Cloud', icon: <ShoppingBag size={14} color="#F59E0B" /> },
                { name: 'Node.js', icon: <SiNodedotjs color="#5FA04E" /> },
            ],
            liveUrl: 'https://webstrike.in',
            caseStudyUrl: '#',
            layout: 'image-right'
        },
        {
            id: 'unified-business',
            title: 'Unified Business Solutions',
            domain: 'webstrike.in',
            period: 'May 2024 - Present',
            image: '/assets/projects/unified_business.png',
            shortDesc: 'A comprehensive business management platform for small enterprises to manage lead pipelines, career portals, corporate blogs, and content without developer dependency...',
            fullDesc: 'A unified digital management platform tailored for small and medium enterprises to manage lead generation pipelines, career application portals, corporate blogs, and marketing content seamlessly without any developer dependency.',
            tech: [
                { name: 'React', icon: <SiReact color="#61DAFB" /> },
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'Lead Manager', icon: <Sparkles size={14} color="#38BDF8" /> },
                { name: 'CMS Engine', icon: <FileText size={14} color="#10B981" /> },
            ],
            liveUrl: 'https://webstrike.in',
            caseStudyUrl: '#',
            layout: 'image-left'
        },
        {
            id: 'ecommerce-theme',
            title: 'Customizable eCommerce Web Theme',
            domain: 'stepzo.com',
            period: '2024 - Present',
            image: '/assets/projects/ecommerce_theme.png',
            shortDesc: 'A scalable and flexible eCommerce web application theme built with Next.js, featuring SEO optimization, PWA support, code splitting, image optimization, and built-in web analytics...',
            fullDesc: 'A scalable and flexible eCommerce web application theme built with Next.js, featuring SEO optimization, PWA support, code splitting, image optimization, and built-in web analytics. Empowers non-developers to fully customize their storefronts without any developer dependency.',
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'PWA', icon: <Globe size={14} color="#38BDF8" /> },
                { name: 'SEO Optimization', icon: <Sparkles size={14} color="#EAB308" /> },
                { name: 'Web Analytics', icon: <Code size={14} color="#10B981" /> },
                { name: 'eCommerce Engine', icon: <ShoppingBag size={14} color="#F59E0B" /> },
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
                High-converting Page Builders, automated store launchers, and enterprise SaaS business platforms.
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
                    <button
                        onClick={() => setShowAllProjects(true)}
                        className={styles.moreProjectsBtn}
                    >
                        <span>More Projects</span>
                        <ArrowRight size={14} />
                    </button>
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