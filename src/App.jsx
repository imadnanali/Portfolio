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

function App() {

  return (
    <>
      <div className='bg-black text-white'>
        <Navbar/>
        <Home />
        <AboutMe />
        <Skills/>

        {/* Projects  */}
        <div className="allProjects">


  <Projects/>         
        </div>


<div className='Contact '>
    <ContactMe/>
</div>







      </div>



    </>
  )
}

export default App
