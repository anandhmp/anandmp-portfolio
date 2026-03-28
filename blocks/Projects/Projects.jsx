// components/Projects/Projects.jsx
import React, { useState } from 'react';
import styles from './Projects.module.scss';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const projects = [
    {
      id: 1,
      title: 'Percify — AI Avatar Generation Platform',
      date: 'October 2025 — Present',
      description: 'Percify is a cutting-edge AI-powered SaaS platform for creating the most photorealistic talking avatars from just a single image. Features advanced neural technology for perfect lip-sync, natural emotion expressions, voice cloning, and multi-language support across 25+ languages.',
      platform: 'Web',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind', 'OpenAI', 'PostgreSQL'],
      liveUrl: 'https://percify.io',
      caseStudy: '#',
      previewBg: 'linear-gradient(135deg, #dbeafe, #f0f9ff, #ede9fe)',
    },
    {
      id: 2,
      title: 'ByteCrew — NammaSuraksha (AI Scam & Phishing Detection)',
      date: 'April 2025 — Present',
      description: 'A cross-platform AI-powered scam and phishing detection system built during NammaSuraksha Hackathon 2025. Intelligently detects malicious links and scam messages using OpenAI\'s GPT-4. Includes a Next.js dashboard, React Native app, and Chrome extension.',
      platform: 'Web + Mobile',
      tech: ['Next.js', 'React Native', 'Express.js', 'PostgreSQL', 'OpenAI'],
      liveUrl: 'https://github.com/Suhaib3100/bytecrew-nammasuraksha',
      githubUrl: 'https://github.com/Suhaib3100/bytecrew-nammasuraksha',
      previewBg: 'linear-gradient(135deg, #dcfce7, #f0fdf4, #dbeafe)',
    },
    {
      id: 3,
      title: 'AI Music Rap Generator — Research & Development',
      date: 'October 2025 — Present',
      description: 'An advanced AI-powered music generation system for rap creation, leveraging Azure ML with NVIDIA A100 GPUs. Uses the ACE step model architecture for high-quality music generation — original beats, lyrics, and vocal synthesis.',
      platform: 'Research',
      tech: ['Python', 'Azure ML', 'PyTorch', 'NVIDIA A100', 'Docker'],
      caseStudy: '#',
      previewBg: 'linear-gradient(135deg, #fef3c7, #fff7ed, #ede9fe)',
    },
  ];

  const toggleReadMore = (id) => {
    setExpandedProjects(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionHeading}>
        Featured Projects<span className={styles.gradText}>.</span>
      </h2>
      <p className={styles.sectionDesc}>
        Highlighting my latest work: AI research, security innovation, and full-stack development.
      </p>

      {projects.map(project => (
        <div key={project.id} className={styles.projectCard}>
          <div className={styles.projectInner}>
            <div className={styles.projectPreview} style={{ background: project.previewBg }}>
              <div className={styles.platformBadge}>💻 {project.platform}</div>
              <div className={styles.browserChrome}>
                <div className={styles.browserBar}>
                  <div className={styles.trafficLights}>
                    <div className={`${styles.tl} ${styles.tlRed}`}></div>
                    <div className={`${styles.tl} ${styles.tlYellow}`}></div>
                    <div className={`${styles.tl} ${styles.tlGreen}`}></div>
                  </div>
                  <div className={styles.urlBar}>
                    {project.liveUrl ? new URL(project.liveUrl).hostname : 'project.demo'}
                  </div>
                </div>
                <div className={styles.browserContent}>
                  <div className={styles.browserMockupInner}>
                    <div className={styles.mockupScreen}>
                      <div className={styles.mockupNav}>
                        <div className={styles.mockupNavDot}></div>
                        <div className={styles.mockupNavDot} style={{ width: '16px' }}></div>
                      </div>
                      <div className={styles.mockupHero}>
                        <span style={{ fontSize: '18px' }}>
                          {project.id === 1 && '🤖'}
                          {project.id === 2 && '🛡️'}
                          {project.id === 3 && '🎵'}
                        </span>
                      </div>
                      <div className={styles.mockupGrid}>
                        <div className={styles.mockupCard}></div>
                        <div className={styles.mockupCard}></div>
                        <div className={styles.mockupCard}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.hoverOverlay}>
                    <svg viewBox="0 0 24 24">
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <span>Click to view</span>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.projectBody}>
              <div>
                <div className={styles.projectDate}>{project.date}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p 
                  className={styles.projectDesc}
                  style={{
                    WebkitLineClamp: expandedProjects[project.id] ? 'unset' : 3,
                  }}
                >
                  {project.description}
                </p>
                <button 
                  className={styles.readMore}
                  onClick={() => toggleReadMore(project.id)}
                >
                  {expandedProjects[project.id] ? '↑ Read less' : '↓ Read more'}
                </button>
                <div className={styles.techHeading}>Technologies</div>
                <div className={styles.techPills}>
                  {project.tech.map(tech => (
                    <div key={tech} className={styles.techPill}>
                      {tech === 'Next.js' && '▲'}
                      {tech === 'React' && '⚛'}
                      {tech === 'TypeScript' && '🔷'}
                      {tech === 'Tailwind' && '💨'}
                      {tech === 'OpenAI' && '🤖'}
                      {tech === 'PostgreSQL' && '🐘'}
                      {tech === 'React Native' && '📱'}
                      {tech === 'Express.js' && '⚡'}
                      {tech === 'Python' && '🐍'}
                      {tech === 'Azure ML' && '☁️'}
                      {tech === 'PyTorch' && '🔥'}
                      {tech === 'NVIDIA A100' && '🖥️'}
                      {tech === 'Docker' && '🐳'}
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.projectActions}>
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnBlue}`}>
                    <svg viewBox="0 0 24 24">
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                    View Live
                    <span className={styles.btnArrow}>
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                )}
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnNeutral}`}>
                    <svg viewBox="0 0 25 25" fill="currentColor" style={{ width: '14px', height: '14px' }}>
                      <path fillRule="evenodd" d="M12.5103 0C5.59245 0 0 5.72914 0 12.8169C0 18.4825 3.58327 23.2783 8.55422 24.9757C9.17572 25.1033 9.40337 24.6999 9.40337 24.3606C9.40337 24.0634 9.38289 23.045 9.38289 21.9838C5.90281 22.7478 5.17812 20.4559 5.17812 20.4559C4.61885 18.9705 3.79018 18.5887 3.79018 18.5887C2.65116 17.8036 3.87315 17.8036 3.87315 17.8036C5.13663 17.8885 5.79961 19.1192 5.79961 19.1192C6.9179 21.0713 8.7199 20.5197 9.44486 20.1801C9.54831 19.3525 9.87993 18.7796 10.232 18.4614C7.45642 18.1642 4.53613 17.0609 4.53613 12.1377C4.53613 10.7372 5.03292 9.59137 5.8201 8.70022C5.6959 8.382 5.26083 7.06612 5.94455 5.30493C5.94455 5.30493 7.00087 4.96534 9.38263 6.62055C10.4023 6.33999 11.454 6.19727 12.5103 6.19607C13.5667 6.19607 14.6435 6.34477 15.6378 6.62055C18.0198 4.96534 19.0761 5.30493 19.0761 5.30493C19.7599 7.06612 19.3245 8.382 19.2003 8.70022C20.0083 9.59137 20.4846 10.7372 20.4846 12.1377C20.4846 17.0609 17.5643 18.1429 14.7679 18.4614C15.2237 18.8645 15.6171 19.6283 15.6171 20.8379C15.6171 22.5567 15.5966 23.9361 15.5966 24.3603C15.5966 24.6999 15.8245 25.1033 16.4457 24.9759C21.4167 23.278 24.9999 18.4825 24.9999 12.8169C25.0204 5.72914 19.4075 0 12.5103 0Z" />
                    </svg>
                    GitHub
                    <span className={styles.btnArrow}>
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                )}
                {project.caseStudy && (
                  <a href={project.caseStudy} className={`${styles.btn} ${styles.btnOutline}`}>
                    <svg viewBox="0 0 24 24">
                      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    </svg>
                    Case Study
                    <span className={styles.btnArrow}>
                      <svg viewBox="0 0 24 24">
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className={styles.seeMoreWrap}>
        <p className={styles.seeMoreText}>Want to see more?</p>
        <a href="#" className={`${styles.btn} ${styles.btnNeutral}`}>
          More Projects
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

export default Projects;