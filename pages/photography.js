import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import Header from '../blocks/Header/Header';
import Footer from '../blocks/Footer/Footer';
import { Camera } from 'lucide-react';

export default function PhotographyPage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    const photos = [

        {
            title: "Urban Architecture & Light",
            category: "Architecture",
            url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
        },
        {
            title: "Minimalist Geometry",
            category: "Minimalism",
            url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80"
        },
        // {
        //     title: "Street Shadows & Perspectives",
        //     category: "Street",
        //     url: "https://images.unsplash.com/photo-1477959858617-67f30ac4ce78?auto=format&fit=crop&w=1000&q=80"
        // },
        {
            title: "Cyberpunk Night Lights",
            category: "Night",
            url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80"
        }
    ];

    return (
        <>
            <NextSeo
                title="Photography Portfolio | Anand MP"
                description="Visual portfolio capturing urban landscapes, architecture, minimalist geometry, and low-light visual art by Anand MP."
                canonical="https://anand.webstrike.in/photography"
                openGraph={{
                    url: "https://anand.webstrike.in/photography",
                    title: "Photography Portfolio | Anand MP",
                    description: "Visual portfolio capturing urban landscapes, architecture, minimalist geometry, and low-light visual art by Anand MP.",
                }}
            />
            <Header displayDecorations={displayDecorations} setDisplayDecorations={setDisplayDecorations} />

            <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '3rem 1.5rem' }}>
                <div style={{ marginBottom: '2.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3b82f6', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                        <Camera size={18} />
                        <span>VISUAL PORTFOLIO</span>
                    </div>
                    <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>
                        Photography Portfolio<span style={{ color: '#3b82f6' }}>.</span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontFamily: 'var(--font-mono)', maxWidth: '650px' }}>
                        Capturing urban landscapes, architecture, minimalist geometry, and low-light visual art.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {photos.map((item, idx) => (
                        <div
                            key={idx}
                            style={{
                                position: 'relative',
                                background: '#0a0a0c',
                                border: 'none',
                                borderRadius: '0',
                                overflow: 'hidden',
                                height: '320px',
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                            }}
                        >
                            <img
                                src={item.url}
                                alt={item.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    display: 'block',
                                    transition: 'transform 0.4s ease'
                                }}
                            />

                            {/* Frosted Glass Blurred Text Overlay - Border None, Reduced Font Size/Weight, Italic */}
                            <div
                                style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '0.85rem 1rem',
                                    background: 'rgba(10, 10, 12, 0.7)',
                                    backdropFilter: 'blur(12px)',
                                    WebkitBackdropFilter: 'blur(12px)',
                                    border: 'none',
                                }}
                            >
                                <span style={{ fontSize: '0.68rem', color: '#60a5fa', fontFamily: 'var(--font-mono)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                    {item.category}
                                </span>
                                <h3 style={{ fontSize: '0.9rem', fontWeight: 400, fontStyle: 'italic', fontFamily: 'var(--font-mono)', color: '#ffffff', marginTop: '0.15rem' }}>
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
