import React from 'react'
import Hero from '@/blocks/Hero/Hero'
import About from '@/blocks/About/About'
import Projects from '@/blocks/Projects/Projects'
import TechStack from '@/blocks/TechStack/TechStack'
import Contact from '@/blocks/Contact/Contact'
import styles from './Home.module.scss'
import Header from '@/blocks/Header/Header'
import Footer from '@/blocks/Footer/Footer'

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <div className={styles.colorRays}></div>
      <div className='container' style={{ maxWidth: "1000px",marginInline: "auto", position: "relative", zIndex: 1 }}>
        <Header />
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <Contact />
        <Footer />
      </div>
    </div>)
}
