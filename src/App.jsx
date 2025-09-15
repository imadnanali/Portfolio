import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import Projects from './components/projects';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

function App() {

  return (
    <>
      <div className='bg-black text-white'>
        <Navbar />
        <Home />
        <AboutMe />
        <Skills />

        {/* Projects  */}
        <div className="allProjects">
          <Projects />
        </div>
        <Certificates />
        <div className='Contact '>
          <ContactMe />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
