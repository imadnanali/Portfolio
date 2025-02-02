import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-scroll';
import Title from './Title';


const Home = () => {
  return (
      <div className="head h-lvh" id='home'>
        <img className='absolute top-40 md:top-20 md:w-44 w-30 md:h-56 h-40 md:ms-20 invert opacity-15 ' src="https://svgsilh.com/svg/26432.svg" alt="" />
        <div className="relative flex justify-center flex-col md:ms-20 items-start min-h-lvh px-8 ">
          {/* Text Section */}
          <div className="z-10">
            <p className="text-green-400 font-semibold md:text-4xl text-2xl">Hey there!, I'm-</p>
            <h1 className="md:text-[10rem] text-6xl font-bold py-10 mt-[-2rem] ">Adnan Ali.</h1>
            <h2 className="md:text-3xl text-2xl font-semibold mt-[-2rem] "><Title /><h1 className='text-gray-400 mt-4'>Currently mastering React with hands-on projects.</h1></h2>
            <div className="buttons flex gap-5 mt-10">
              <a href="assets/Adnan Ali Resume.pdf" download>
                <button className='font-semibold  bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out  px-4 py-2 rounded-md flex items-center gap-2'><FaFileDownload color='#4ade80' />Resume</button>
              </a>
              <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} ><a href="#">
                <button className='font-semibold bg-neutral-900 hover:bg-neutral-800 transition-all ease-in-out  px-4 py-2 rounded-md flex items-center gap-2'><FaPhoneAlt color='#4ade80' />Contact Me</button>
              </a></Link>
            </div>
          </div>


        </div>
      </div>
    
  )
}

export default Home
