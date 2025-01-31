import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillTagCloud from './components/SkillTagCloud';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import SkillCard from './components/SkillCard';
import ContactMe from './components/ContactMe';
import Projects from './components/projects';
import { Link } from 'react-scroll';
import HomeSec from './components/HomeSec';

function App() {

  return (
    <>




      <div className='bg-black text-white'>

        {/* Navbar */}
        <div className="flex bg-black z-50 fixed right-0 w-full justify-center">

          <div className='flex w-[90%] justify-between py-4 px-10 border-b border-neutral-800'>
            <Link to='home' spy={true} smooth={true} offset={-100} duration={500} ><div className='flex font-bold text-4xl cursor-pointer'>
              <span className='text-[#8f9094]'>{'{'}</span>
              <span>A</span>
              <span className='text-[#8f9094]'>{'}'}</span>
            </div>
            </Link> 
            <div className='flex items-center gap-10 list-none font-semibold'>
             <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black  hover:border-neutral-500 cursor-pointer'>Home</li></Link>
             <Link to='about' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer'>About Me</li></Link>
             <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer'>Skills</li></Link>
             <Link to='project' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black  hover:border-neutral-500 cursor-pointer'>Projects</li></Link>
             <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer'>Contact</li></Link>
            </div>
          </div>
        </div>
        {/* <hr className='mt-3 mx-20 opacity-20' /> */}

       
        <HomeSec />





        {/* About Me  */}



        <AboutMe />









        <div className="skills flex mt-[7rem] px-20" id='skill'>

          <div className="skillsinfo w-1/2">

            <h2 className="text-3xl text-white font-bold ">⚡ Skills</h2>
            <div className="skillCard flex flex-wrap gap-5 py-10">
              <SkillCard name="HTML" />
              <SkillCard name="CSS" />
              <SkillCard name="JavaScript" />
              <SkillCard name="Node.js" />
              <SkillCard name="Tailwind" />
              <SkillCard name="Express" />
              <SkillCard name="Mongo DB" />
              <SkillCard name="React" />
              <SkillCard name="Next.js" />
              <SkillCard name="Java" />
              <SkillCard name="Git" />
              <SkillCard name="GitHub" />
              <SkillCard name="C" />
              <SkillCard name="Figma" />
              <SkillCard name="Bootstrap" />
              <SkillCard name="VS Code" />
              <SkillCard name="Postman" />
              <SkillCard name="Canva" />
            </div>
          </div>
          <div className="circle w-1/2">
            <SkillTagCloud />
          </div>
        </div>










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
