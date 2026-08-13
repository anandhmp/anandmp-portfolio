import React from 'react';
import styles from './StatsBanner.module.scss';
import { FolderCode, Award, Cpu, Zap } from 'lucide-react';

const StatsBanner = () => {
    const stats = [
        {
            icon: <FolderCode size={18} color="#3b82f6" />,
            label: '50+ Projects',
            href: '#projects'
        },
        {
            icon: <Award size={18} color="#10b981" />,
            label: '5+ Years Learning & Building',
            href: '#experience'
        },
        {
            icon: <Cpu size={18} color="#8b5cf6" />,
            label: '15+ Technologies',
            href: '/technology'
        },
        {
            icon: <Zap size={18} color="#f59e0b" />,
            label: '100% Passion for Development',
            href: '#about'
        }
    ];

    return (
        <section className={styles.statsSection}>
            {stats.map((stat, idx) => (
                <a
                    key={idx}
                    href={stat.href}
                    className={styles.statItem}
                >
                    <span className={styles.iconWrapper}>{stat.icon}</span>
                    <span>{stat.label}</span>
                </a>
            ))}
        </section>
    );
};

export default StatsBanner;
