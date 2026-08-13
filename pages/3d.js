import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Header from '../blocks/Header/Header';
import Hero from '../blocks/Hero/Hero';
import StatsBanner from '../blocks/Stats/StatsBanner';
import About from '../blocks/About/About';
import Experience from '../blocks/Experience/Experience';
import Projects from '../blocks/Projects/Projects';
import TechStack from '../blocks/TechStack/TechStack';
import Contact from '../blocks/Contact/Contact';
import Footer from '../blocks/Footer/Footer';
import ThreePlanetCanvas from '../blocks/ThreePlanetCanvas/ThreePlanetCanvas';

export default function ThreeDimensionPage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    const toggleDecorations = () => {
        setDisplayDecorations((prev) => !prev);
    };

    // Force Dark Mode on 3D planet page for 100% crystal clear contrast & visibility
    useEffect(() => {
        const originalTheme = document.documentElement.getAttribute('data-theme');
        document.documentElement.setAttribute('data-theme', 'dark');
        return () => {
            if (originalTheme) {
                document.documentElement.setAttribute('data-theme', originalTheme);
            } else {
                document.documentElement.removeAttribute('data-theme');
            }
        };
    }, []);

    return (
        <div data-theme="dark" style={{ background: '#0a0a0c', color: '#ffffff', minHeight: '100vh', position: 'relative' }}>
            <NextSeo
                title="3D Interactive World | Anand MP"
                description="Explore Anand's portfolio in an immersive, interactive 3D planet space environment powered by Three.js."
                canonical="https://anand.webstrike.in/3d"
                openGraph={{
                    url: "https://anand.webstrike.in/3d",
                    title: "3D Interactive World | Anand MP",
                    description: "Explore Anand's portfolio in an immersive, interactive 3D planet space environment powered by Three.js.",
                }}
            />
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>


            {/* Interactive Three.js Planet Space Canvas */}
            <ThreePlanetCanvas />

            {/* Page Main Content with Header & Footer */}
            <div style={{ position: 'relative', width: '100%', minHeight: '100vh', zIndex: 10 }}>
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
        </div>
    );
}
