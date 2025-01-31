import React from 'react'
import Home from './Home'
import { FaPhoneAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { Link } from 'react-scroll';


const HomeSec = () => {
  return (
    <div>
       <div className="head pt-20" id='home'>

<img className='w-44 h-56 mt-10 ms-20 invert opacity-15 ' src="https://svgsilh.com/svg/26432.svg" alt="" />
<div className="relative flex flex-col mt-[-12rem] ms-20 items-start min-h-screen px-8 ">
  {/* Text Section */}
  <div className="z-10">
    <p className="text-green-400 font-semibold text-4xl">Hey there!, I'm-</p>
    <h1 className="text-[10rem] font-bold   mt-[-2rem] ">Adnan Ali.</h1>
    <h2 className="text-3xl font-semibold mt-[-2rem]"><Home /><h1 className=' text-gray-400 mt-4'>Currently mastering JavaScript with hands-on projects.</h1></h2>
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
    </div>
  )
}

export default HomeSec
