import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Header from '@/blocks/Header/Header';
import Hero from '@/blocks/Hero/Hero';
import StatsBanner from '@/blocks/Stats/StatsBanner';
import About from '@/blocks/About/About';
import Experience from '@/blocks/Experience/Experience';
import Projects from '@/blocks/Projects/Projects';
import TechStack from '@/blocks/TechStack/TechStack';
import Contact from '@/blocks/Contact/Contact';
import Footer from '@/blocks/Footer/Footer';

import styles from './Home.module.scss';

export default function Home() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    useEffect(() => {
        const savedDeco = localStorage.getItem('displayDecorations');
        if (savedDeco !== null) {
            setDisplayDecorations(savedDeco === 'true');
        }
    }, []);

    const toggleDecorations = (val) => {
        const nextVal = typeof val === 'boolean' ? val : !displayDecorations;
        setDisplayDecorations(nextVal);
        localStorage.setItem('displayDecorations', String(nextVal));
    };

    return (
        <>
            <Head>
                <title>Suhaib SZ | Full-stack Developer & Tech Executive</title>
                <meta name="description" content="Full-stack developer, designer, and innovator building web applications, AI solutions, and real-world SaaS products." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
                {displayDecorations && <div className={styles.colorRays}></div>}
                <Header
                    displayDecorations={displayDecorations}
                    setDisplayDecorations={toggleDecorations}
                />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <Hero />
                    <StatsBanner />
                    <About />
                    <Experience />
                    <Projects />
                    <TechStack />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    );
}
