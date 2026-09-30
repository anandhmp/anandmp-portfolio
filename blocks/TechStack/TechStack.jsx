import React from 'react';
import styles from './TechStack.module.scss';
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
    SiNodedotjs, SiExpress, SiNpm, SiPnpm, SiGit, SiGithub,
    SiFigma, SiTurborepo, SiDeno, SiPostgresql, SiMysql, SiMongodb,
    SiDiscord, SiDocker, SiVercel, SiAstro, SiEslint, SiRollupdotjs,
    SiHtml5, SiCss, SiBootstrap, SiRedux, SiReduxsaga, SiAxios, SiRemix,
    SiJsonwebtokens, SiPostman, SiJest, SiNetlify, SiRender,
    SiCloudflare, SiJira, SiTrello, SiSublimetext, SiXml, SiJson
} from 'react-icons/si';
import { Server, MessageSquare, Users, Code, Image } from 'lucide-react';

const TechStack = () => {
    const techItems = [
        // Languages & Core Frontend
        { name: 'React.js', icon: <SiReact color="#61DAFB" /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'HTML5', icon: <SiHtml5 color="#E34F26" /> },
        { name: 'CSS3', icon: <SiCss color="#1572B6" /> },
        { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss color="#38BDF8" /> },
        { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
        { name: 'Redux Saga', icon: <SiReduxsaga color="#999999" /> },
        { name: 'Axios', icon: <SiAxios color="#5A29E4" /> },
        { name: 'Remix', icon: <SiRemix color="#E8E8E8" /> },

        // Backend, Databases & APIs
        { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'REST APIs', icon: <Server size={18} color="#10B981" /> },
        { name: 'JWT', icon: <SiJsonwebtokens color="#D63AF9" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },

        // Formats, Package Managers & Testing
        { name: 'JSON', icon: <SiJson color="#F7DF1E" /> },
        { name: 'XML', icon: <SiXml color="#E44D26" /> },
        { name: 'NPM', icon: <SiNpm color="#CB3837" /> },
        { name: 'PNPM', icon: <SiPnpm color="#F69220" /> },
        { name: 'Git', icon: <SiGit color="#F05032" /> },
        { name: 'GitHub', icon: <SiGithub /> },
        { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
        { name: 'Jest', icon: <SiJest color="#C21325" /> },

        // Cloud & Deployment Platforms
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
        { name: 'Render', icon: <SiRender color="#46E3B7" /> },
        { name: 'GitHub Pages', icon: <SiGithub /> },
        { name: 'Cloudflare', icon: <SiCloudflare color="#F38020" /> },
        { name: 'Docker', icon: <SiDocker color="#2496ED" /> },

        // Work Management & Collaboration
        { name: 'Jira', icon: <SiJira color="#0052CC" /> },
        { name: 'Slack', icon: <MessageSquare size={18} color="#4A154B" /> },
        { name: 'Trello', icon: <SiTrello color="#0052CC" /> },
        { name: 'Microsoft Teams', icon: <Users size={18} color="#6264A7" /> },

        // Editors & Design Tools
        { name: 'VS Code', icon: <Code size={18} color="#007ACC" /> },
        { name: 'Sublime Text', icon: <SiSublimetext color="#FF9800" /> },
        { name: 'Adobe Photoshop', icon: <Image size={18} color="#31A8FF" /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
    ];

    return (
        <section id="tech" className={styles.techSection}>
            <h2 className={styles.sectionTitle}>
                Technologies I use<span className={styles.blueDot}>.</span>
            </h2>
            <p className={styles.subtitle}>
                Over the years, I have worked with a variety of technologies. Here are some of the technologies I have experience with:
            </p>

            <div className={styles.techGrid}>
                {techItems.map((item, idx) => (
                    <div key={idx} className={styles.techBadge}>
                        <span className={styles.badgeIcon}>{item.icon}</span>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>

            <p className={styles.manyMoreText}>...and many more!</p>
        </section>
    );
};

export default TechStack;