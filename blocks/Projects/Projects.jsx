import React, { useState } from 'react';
import styles from './Projects.module.scss';
import { ExternalLink, Github, ArrowRight, FileText, ChevronDown, Camera, X, Sparkles, Cpu } from 'lucide-react';
import {
    SiNextdotjs, SiReact, SiTypescript, SiTailwindcss,
    SiPostgresql, SiExpress, SiPython, SiPytorch, SiTensorflow, SiDocker
} from 'react-icons/si';

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [expandedDesc, setExpandedDesc] = useState({});

    const toggleExpand = (id) => {
        setExpandedDesc((prev) => ({ ...prev, [id]: !prev[id] }));
    };

    const projects = [
        {
            id: 'percify',
            title: 'Percify - AI Avatar Generation Platform',
            domain: 'percify.io',
            period: 'October 30, 2025 - Present',
            image: '/assets/projects/percify.png',
            shortDesc: 'Percify is a cutting-edge AI-powered SaaS platform for creating the most photorealistic talking avatars from just a single image. The platform features...',
            fullDesc: 'Percify is a cutting-edge AI-powered SaaS platform for creating the most photorealistic talking avatars from just a single image. The platform features advanced neural technology for perfect lip-sync, natural emotion expressions, voice cloning capabilities, and multi-language support across 25+ languages. Users can generate infinite-length talking videos with HD 4K output quality, making it perfect for content creators, marketers, game developers, and businesses.',
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'React', icon: <SiReact color="#61DAFB" /> },
                { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
                { name: 'TailwindCSS', icon: <SiTailwindcss color="#38BDF8" /> },
                { name: 'OpenAI', icon: <Sparkles size={14} /> },
                { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
            ],
            liveUrl: 'https://percify.io',
            caseStudyUrl: '#',
            layout: 'image-left'
        },
        {
            id: 'nammasuraksha',
            title: 'ByteCrew - NammaSuraksha (AI Scam & Phishing Detection)',
            domain: 'github.com',
            period: 'April 31, 2025 - Present',
            image: '/assets/projects/nammasuraksha.png',
            shortDesc: 'NammaSuraksha is a cross-platform AI-powered scam and phishing detection system developed during the NammaSuraksha Hackathon 2025 by Team ByteCrew. It...',
            fullDesc: "NammaSuraksha is a cross-platform AI-powered scam and phishing detection system developed during the NammaSuraksha Hackathon 2025 by Team ByteCrew. It intelligently detects malicious links and scam messages across web pages, emails, instant messaging platforms, social media, and SMS using OpenAI's GPT-4. Features include a Next.js web dashboard, React Native mobile app, and Chrome extension for live phishing alerts.",
            tech: [
                { name: 'Next.js', icon: <SiNextdotjs /> },
                { name: 'React Native', icon: <SiReact color="#61DAFB" /> },
                { name: 'Express.js', icon: <SiExpress /> },
                { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
                { name: 'OpenAI', icon: <Sparkles size={14} /> },
            ],
            liveUrl: 'https://github.com/anandhmp',
            githubUrl: 'https://github.com/anandhmp',
            layout: 'image-right'
        },
        {
            id: 'rap-ai',
            title: 'AI Music Rap Generator - Research & Development',
            domain: 'preview',
            period: 'October 30, 2025 - Present',
            image: '/assets/projects/rapai.png',
            imageBadge: '6',
            shortDesc: 'An advanced AI-powered music generation system focused on rap music creation, developed as part of ongoing machine learning research. This project...',
            fullDesc: 'An advanced AI-powered music generation system focused on rap music creation, developed as part of ongoing machine learning research. This project leverages Azure\'s cutting-edge ML infrastructure with sponsored NVIDIA A100 GPU engines to train and deploy sophisticated music generation models. The system utilizes the ACE (Audio Continuation Engine) step model architecture for high-quality music generation, capable of producing original rap beats, lyrics, and vocal synthesis.',
            tech: [
                { name: 'Python', icon: <SiPython color="#3776AB" /> },
                { name: 'Azure ML', icon: <SiNextdotjs /> },
                { name: 'PyTorch', icon: <SiPytorch color="#EE4C2C" /> },
                { name: 'NVIDIA A100', icon: <SiReact color="#76B900" /> },
                { name: 'TensorFlow', icon: <SiTensorflow color="#FF6F00" /> },
                { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
            ],
            caseStudyUrl: '#',
            layout: 'image-left'
        }
    ];

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
                Highlighting my latest work: AI research, security innovation, and full-stack development.
            </p>

            <div className={styles.projectsList}>
                {projects.map((proj) => (
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

            <div className={styles.moreProjectsSection}>
                <p className={styles.moreText}>Want to see more?</p>
                <a
                    href="https://github.com/anandhmp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.moreProjectsBtn}
                >
                    <span>More Projects</span>
                    <ArrowRight size={14} />
                </a>
            </div>

            {/* Case Study Modal */}
            {selectedProject && (
                <div className={styles.modalOverlay} onClick={() => setSelectedProject(null)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.closeBtn} onClick={() => setSelectedProject(null)}>
                            <X size={20} />
                        </button>
                        <h2 className={styles.modalTitle}>{selectedProject.title}</h2>
                        <span className={styles.modalPeriod}>{selectedProject.period}</span>
                        <p className={styles.modalBody}>{selectedProject.fullDesc}</p>

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