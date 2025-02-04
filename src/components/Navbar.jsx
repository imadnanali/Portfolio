import React from 'react'
import { Link } from 'react-scroll';
import Hamburger from './Hamburger';

const Navbar = () => {
    return (
        <div>
            <nav className="flex bg-black z-50 fixed right-0 w-full justify-center">
                <div className='flex w-[90%] justify-between py-4 md:px-10 border-b border-neutral-800'>
                    <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >
                        <div className='flex font-bold text-4xl cursor-pointer'>
                            <span className='text-[#8f9094]'>{'{'}</span>
                            <span>A</span>
                            <span className='text-[#8f9094]'>{'}'}</span>
                        </div>
                    </Link>
                    <div className='md:flex hidden items-center gap-10 list-none font-semibold'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 rounded-full  cursor-pointer'>Home</li></Link>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 rounded-full cursor-pointer'>About Me</li></Link>
                        <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 rounded-full cursor-pointer'>Skills</li></Link>
                        <Link to='project' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 rounded-full  cursor-pointer'>Projects</li></Link>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-white hover:text-green-400 transition ease-in-out duration-200 px-4 py-2 rounded-full cursor-pointer'>Contact</li></Link>
                    </div>
                    <div className='flex md:hidden'>
                        <Hamburger />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
