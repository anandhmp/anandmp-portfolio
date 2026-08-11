import React, { useState } from 'react';
import Header from '../blocks/Header/Header';
import TechStack from '../blocks/TechStack/TechStack';
import Footer from '../blocks/Footer/Footer';

export default function TechnologyPage() {
    const [displayDecorations, setDisplayDecorations] = useState(true);

    return (
        <>
            <Header displayDecorations={displayDecorations} setDisplayDecorations={setDisplayDecorations} />
            <main style={{ maxWidth: '1024px', margin: '0 auto', padding: '2rem 1.5rem' }}>
                <TechStack />
            </main>
            <Footer />
        </>
    );
}
