import React, { useState } from 'react';
import Header from '../blocks/Header/Header';
import Footer from '../blocks/Footer/Footer';
import { FileText, Download } from 'lucide-react';

export default function ResumePage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    return (
        <>
            <Header displayDecorations={displayDecorations} setDisplayDecorations={setDisplayDecorations} />
            <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '3rem 1.5rem' }}>
                <div style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#3b82f6', fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                            <FileText size={18} />
                            <span>CURRICULUM VITAE</span>
                        </div>
                        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                            Interactive Resume<span style={{ color: '#3b82f6' }}>.</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', fontFamily: 'var(--font-mono)' }}>
                            Anand — Full-Stack Engineer & Founder
                        </p>
                    </div>

                    <a
                        href="/resume.pdf"
                        download
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.65rem 1.35rem',
                            borderRadius: '0.5rem',
                            background: '#3b82f6',
                            color: '#ffffff',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 500,
                            fontSize: '0.9rem',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                        }}
                    >
                        <Download size={16} />
                        <span>Download PDF</span>
                    </a>
                </div>

                {/* Resume Card Details */}
                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '1.25rem', padding: '2rem', backdropFilter: 'blur(12px)' }}>
                    <div style={{ marginBottom: '2rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem' }}>
                        <h2 style={{ fontSize: '1.4rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                            Anand MP
                        </h2>
                        <p style={{ color: '#3b82f6', fontSize: '0.95rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                            Full-Stack Software Engineer & Founder @ Pronexus
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', fontFamily: 'var(--font-mono)', marginTop: '0.5rem' }}>
                            Trivandrum, Kerala, India • 5+ Years Experience • anandmpmtd@gmail.com
                        </p>
                    </div>

                    {/* Core Competencies */}
                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', marginBottom: '1rem' }}>
                            Core Competencies
                        </h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                            <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', padding: '1rem', borderRadius: '0.75rem' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#3b82f6', marginBottom: '0.4rem' }}>Frontend Mastery</h4>
                                <p style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', margin: 0 }}>React, Next.js 16, TypeScript, SCSS Modules, TailwindCSS</p>
                            </div>

                            <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', padding: '1rem', borderRadius: '0.75rem' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#3b82f6', marginBottom: '0.4rem' }}>Backend & Cloud</h4>
                                <p style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', margin: 0 }}>Node.js, Express, NestJS, PostgreSQL, Prisma, AWS, Vercel</p>
                            </div>

                            <div style={{ background: 'var(--bg-subtle)', border: '1px solid var(--border-color)', padding: '1rem', borderRadius: '0.75rem' }}>
                                <h4 style={{ fontSize: '0.9rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: '#3b82f6', marginBottom: '0.4rem' }}>AI & Automation</h4>
                                <p style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)', margin: 0 }}>PyTorch, OpenAI API, Vector Databases, Python Workers</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
