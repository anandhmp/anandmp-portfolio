import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../blocks/Header/Header';
import Experience from '../blocks/Experience/Experience';
import Footer from '../blocks/Footer/Footer';

export default function ExperiencePage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    return (
        <>
            <NextSeo
                title="Professional Experience | Anand MP"
                description="Engineering leadership, full-stack software development experience, and technical accomplishments of Anand MP."
                canonical="https://anand.webstrike.in/experience"
                openGraph={{
                    url: "https://anand.webstrike.in/experience",
                    title: "Professional Experience | Anand MP",
                    description: "Engineering leadership, full-stack software development experience, and technical accomplishments of Anand MP.",
                }}
            />
            <Header displayDecorations={displayDecorations} setDisplayDecorations={setDisplayDecorations} />
            <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem 1.5rem' }}>
                <Experience />
            </main>
            <Footer />
        </>
    );
}

