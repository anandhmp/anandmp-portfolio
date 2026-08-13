import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../blocks/Header/Header';
import TechStack from '../blocks/TechStack/TechStack';
import Footer from '../blocks/Footer/Footer';

export default function TechnologyPage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    return (
        <>
            <NextSeo
                title="Technologies & Skills | Anand MP"
                description="Technologies, frameworks, programming languages, and toolchains mastered by Anand MP."
                canonical="https://anand.webstrike.in/technology"
                openGraph={{
                    url: "https://anand.webstrike.in/technology",
                    title: "Technologies & Skills | Anand MP",
                    description: "Technologies, frameworks, programming languages, and toolchains mastered by Anand MP.",
                }}
            />
            <Header displayDecorations={displayDecorations} setDisplayDecorations={setDisplayDecorations} />
            <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem 1.5rem' }}>
                <TechStack />
            </main>
            <Footer />
        </>
    );
}

