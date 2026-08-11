import React from 'react';
import styles from './StatsBanner.module.scss';
import { Star, GitGraph, GitFork, Users } from 'lucide-react';

const StatsBanner = () => {
    const stats = [
        {
            icon: <Star size={18} />,
            label: '180 stars',
            href: 'https://github.com/anandhmp'
        },
        {
            icon: <GitGraph size={18} />,
            label: '6.33K commits',
            href: 'https://github.com/anandhmp'
        },
        {
            icon: <GitFork size={18} />,
            label: '18 repositories forks',
            href: 'https://github.com/anandhmp'
        },
        {
            icon: <Users size={18} />,
            label: '614 Github followers',
            href: 'https://github.com/anandhmp?tab=followers'
        }
    ];

    return (
        <section className={styles.statsSection}>
            {stats.map((stat, idx) => (
                <a
                    key={idx}
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
