// components/TechStack/TechStack.jsx
import React from 'react';
import styles from './TechStack.module.scss';

const TechStack = () => {
  const technologies = [
    { name: 'React', emoji: '⚛️', url: 'https://reactjs.org' },
    { name: 'Next.js', emoji: '▲', url: 'https://nextjs.org' },
    { name: 'TailwindCSS', emoji: '💨', url: 'https://tailwindcss.com' },
    { name: 'JavaScript', emoji: '🟡', url: '#' },
    { name: 'TypeScript', emoji: '🔷', url: 'https://typescriptlang.org' },
    { name: 'Node.js', emoji: '🟢', url: 'https://nodejs.org' },
    { name: 'Express.js', emoji: '⚡', url: 'https://expressjs.com' },
    { name: 'NPM', emoji: '📦', url: 'https://npmjs.com' },
    { name: 'PNPM', emoji: '📦', url: 'https://pnpm.io' },
    { name: 'Git', emoji: '🐙', url: 'https://git-scm.com' },
    { name: 'GitHub', emoji: '🐙', url: 'https://github.com' },
    { name: 'Figma', emoji: '🎨', url: 'https://figma.com' },
    { name: 'Turborepo', emoji: '⚡', url: 'https://turbo.build' },
    { name: 'Deno', emoji: '🦕', url: 'https://deno.land' },
    { name: 'PostgreSQL', emoji: '🐘', url: '#' },
    { name: 'MySQL', emoji: '🐬', url: 'https://mysql.com' },
    { name: 'MongoDB', emoji: '🍃', url: 'https://mongodb.com' },
    { name: 'Discord.js', emoji: '💬', url: 'https://discord.js.org' },
    { name: 'Docker', emoji: '🐳', url: 'https://docker.com' },
    { name: 'Vercel', emoji: '▲', url: 'https://vercel.com' },
    { name: 'Astro', emoji: '🚀', url: 'https://astro.build' },
    { name: 'ESLint', emoji: '🔍', url: 'https://eslint.org' },
  ];

  return (
    <section id="tech" className={styles.techSection}>
      <h2 className={styles.sectionHeading}>
        Technologies I use<span className={styles.gradText}>.</span>
      </h2>
      <p className={styles.sectionDesc}>
        Over the years, I have worked with a variety of technologies. Here are some I have experience with:
      </p>
      <div className={styles.techCloud}>
        {technologies.map(tech => (
          <a
            key={tech.name}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.techItem}
          >
            <span className={styles.techEmoji}>{tech.emoji}</span>
            {tech.name}
          </a>
        ))}
      </div>
      <p className={styles.techMore}>...and many more!</p>
    </section>
  );
};

export default TechStack;