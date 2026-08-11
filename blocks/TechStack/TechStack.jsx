import React from 'react';
import styles from './TechStack.module.scss';
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript,
    SiNodedotjs, SiExpress, SiNpm, SiPnpm, SiGit, SiGithub,
    SiFigma, SiTurborepo, SiDeno, SiPostgresql, SiMysql, SiMongodb,
    SiDiscord, SiDocker, SiVercel, SiAstro, SiEslint, SiRollupdotjs
} from 'react-icons/si';

const TechStack = () => {
    const techItems = [
        { name: 'React', icon: <SiReact color="#61DAFB" /> },
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TailwindCSS', icon: <SiTailwindcss color="#38BDF8" /> },
        { name: 'Javascript', icon: <SiJavascript color="#F7DF1E" /> },
        { name: 'Typescript', icon: <SiTypescript color="#3178C6" /> },
        { name: 'Node.js', icon: <SiNodedotjs color="#339933" /> },
        { name: 'Express.js', icon: <SiExpress /> },
        { name: 'NPM', icon: <SiNpm color="#CB3837" /> },
        { name: 'PNPM', icon: <SiPnpm color="#F69220" /> },
        { name: 'Git', icon: <SiGit color="#F05032" /> },
        { name: 'Github', icon: <SiGithub /> },
        { name: 'Figma', icon: <SiFigma color="#F24E1E" /> },
        { name: 'Turborepo', icon: <SiTurborepo color="#EF4444" /> },
        { name: 'Deno', icon: <SiDeno /> },
        { name: 'PostgreSQL', icon: <SiPostgresql color="#4169E1" /> },
        { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
        { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
        { name: 'Discord.js', icon: <SiDiscord color="#5865F2" /> },
        { name: 'Rollup', icon: <SiRollupdotjs color="#EC4A3F" /> },
        { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
        { name: 'Vercel', icon: <SiVercel /> },
        { name: 'Astro', icon: <SiAstro color="#FF5D01" /> },
        { name: 'ESlint', icon: <SiEslint color="#4B32C6" /> },
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