import React, { useState } from 'react';
import Header from '../blocks/Header/Header';
import Projects from '../blocks/Projects/Projects';
import Footer from '../blocks/Footer/Footer';

export default function WorkPage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    return (
        <>
            <Header displayDecorations={displayDecorations} setDisplayDecorations={setDisplayDecorations} />
            <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem 1.5rem' }}>
                <Projects />
            </main>
            <Footer />
        </>
    );
}
