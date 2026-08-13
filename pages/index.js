import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
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

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Anand MP",
        "url": "https://anand.webstrike.in/",
        "image": "https://anand.webstrike.in/og-image.png",
        "jobTitle": "Full-Stack Engineer & Tech Executive",
        "worksFor": {
            "@type": "Organization",
            "name": "Webstrike"
        },
        "description": "Full-stack developer, designer, and innovator building web applications, AI solutions, and real-world SaaS products.",
        "sameAs": [
            "https://github.com/anandmp",
            "https://linkedin.com/in/anandmp"
        ]
    };

    return (
        <>
            <NextSeo
                title="Anand MP | Full-Stack Engineer & Tech Executive"
                description="Full-stack developer, designer, and innovator building web applications, AI solutions, and real-world SaaS products."
                canonical="https://anand.webstrike.in/"
                openGraph={{
                    url: "https://anand.webstrike.in/",
                    title: "Anand MP | Full-Stack Engineer & Tech Executive",
                    description: "Full-stack developer, designer, and innovator building web applications, AI solutions, and real-world SaaS products.",
                    images: [
                        {
                            url: "https://anand.webstrike.in/og-image.png",
                            width: 1200,
                            height: 630,
                            alt: "Anand MP Portrait",
                        },
                    ],
                    siteName: "Anand MP Portfolio",
                }}
            />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
                />
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

