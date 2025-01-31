import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SkillTagCloud from './components/SkillTagCloud';
import Home from './components/Home';
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import AboutMe from './components/AboutMe';
import SkillCard from './components/SkillCard';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {

  return (
    <>




      <div className='bg-black text-white'>

        {/* Navbar */}
        <div className="flex bg-black z-50 fixed right-0 w-full justify-center">

          <div className='flex w-[90%] justify-between py-4 px-10 border-b border-neutral-800'>
            <div className='flex font-bold text-4xl'>
              <span className='text-[#8f9094]'>{'{'}</span>
              <span>A</span>
              <span className='text-[#8f9094]'>{'}'}</span>
            </div>
            <div className='flex items-center gap-10 list-none font-semibold'>
              <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black  hover:border-neutral-500 cursor-pointer'>Home</li>
              <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer'>About Me</li>
              <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black  hover:border-neutral-500 cursor-pointer'>Projects</li>
              <li className='"text-md text-neutral-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full border border-black hover:border-neutral-500 cursor-pointer'>Contact</li>
            </div>
          </div>
        </div>
        {/* <hr className='mt-3 mx-20 opacity-20' /> */}

        <div className="head pt-20">

          <img className='w-44 h-56 mt-10 ms-20 invert opacity-15 ' src="https://svgsilh.com/svg/26432.svg" alt="" />
          <div className="relative flex flex-col mt-[-12rem] ms-20 items-start min-h-screen px-8 ">
            {/* Text Section */}
            <div className="z-10">
              <p className="text-green-400 font-semibold text-4xl">Hey there!, I'm-</p>
              <h1 className="text-[10rem] font-bold   mt-[-2rem] ">Adnan Ali.</h1>
              <h2 className="text-3xl font-semibold mt-[-2rem]"><Home /><h1 className=' text-gray-400 mt-4'>Currently mastering JavaScript with hands-on projects.</h1></h2>

              <div className="buttons flex gap-5 mt-10">
                <a href="#">
                  <button className='font-semibold  bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out  px-4 py-2 rounded-md flex items-center gap-2'><BsGithub color='#4ade80' />GitHub</button>
                </a>
                <a href="#">
                  <button className='font-semibold bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out  px-4 py-2 rounded-md flex items-center gap-2'><FaLinkedin color='#4ade80' />LinkedIn</button>
                </a>
              </div>
            </div>


          </div>
        </div>






        {/* About Me  */}



        <AboutMe />









        <div className="skills flex mt-[7rem] px-20">

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

         
          <Projects />
        </div>


<div className='Contact '>
    <ContactMe/>
</div>







      </div>



    </>
  )
}

export default App
