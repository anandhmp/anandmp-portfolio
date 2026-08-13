import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../blocks/Header/Header';
import Contact from '../blocks/Contact/Contact';
import Footer from '../blocks/Footer/Footer';

export default function ContactPage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    return (
        <>
            <NextSeo
                title="Contact & Get in Touch | Anand MP"
                description="Get in touch with Anand MP for software development projects, technical consultations, or collaborations."
                canonical="https://anand.webstrike.in/contact"
                openGraph={{
                    url: "https://anand.webstrike.in/contact",
                    title: "Contact & Get in Touch | Anand MP",
                    description: "Get in touch with Anand MP for software development projects, technical consultations, or collaborations.",
                }}
            />
            <Header displayDecorations={displayDecorations} setDisplayDecorations={setDisplayDecorations} />
            <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem 1.5rem' }}>
                <Contact />
            </main>
            <Footer />
        </>
    );
}

