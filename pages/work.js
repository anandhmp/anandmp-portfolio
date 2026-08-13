import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../blocks/Header/Header';
import Projects from '../blocks/Projects/Projects';
import Footer from '../blocks/Footer/Footer';

export default function WorkPage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    return (
        <>
            <NextSeo
                title="Projects & Works | Anand MP"
                description="Explore selected projects, full-stack applications, SaaS tools, and software solutions built by Anand MP."
                canonical="https://anand.webstrike.in/work"
                openGraph={{
                    url: "https://anand.webstrike.in/work",
                    title: "Projects & Works | Anand MP",
                    description: "Explore selected projects, full-stack applications, SaaS tools, and software solutions built by Anand MP.",
                }}
            />
            <Header displayDecorations={displayDecorations} setDisplayDecorations={setDisplayDecorations} />
            <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem 1.5rem' }}>
                <Projects />
            </main>
            <Footer />
        </>
    );
}

