import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Hamburger = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <StyledWrapper>
                <label className="burger" htmlFor="burger">
                    <input type="checkbox" id="burger" checked={isOpen} onChange={toggleMenu} />
                    <span />
                    <span />
                    <span />
                </label>
            </StyledWrapper>

            <OffcanvasMenu isOpen={isOpen}>
                <nav>
                    <ul className='flex flex-col items-center'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-green-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full  cursor-pointer'>Home</li></Link>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-green-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full cursor-pointer'>About Me</li></Link>
                        <Link to='skills' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-green-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full cursor-pointer'>Skills</li></Link>
                        <Link to='project' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-green-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full  cursor-pointer'>Projects</li></Link>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} >  <li className='"text-md text-green-400 hover:text-white transition ease-in-out duration-200 px-4 py-2 rounded-full cursor-pointer'>Contact</li></Link>
                    </ul>
                </nav>
            </OffcanvasMenu>
        </>
    );
}

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 40px;
    height: 30px;
    background: transparent;
    cursor: pointer;
    display: block;
    z-index: 1001; /* Ensure the hamburger is above the offcanvas menu */
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 28px;
    left: 5px;
  }
`;

const OffcanvasMenu = styled.div`
  position: fixed;
  top: 70px; /* Position the menu below the hamburger icon */
  right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  width: 300px;
  height: calc(100% - 60px); /* Reduce height to avoid covering the hamburger */
  background: #000;
  transition: right 0.5s ease-in-out;
  padding: 25px;
  color: white;
  z-index: 1000; /* Ensure it's below the hamburger icon */

  nav ul {
    list-style: none;
    padding: 0;
  }

  nav ul li {
    margin: 30px 0;
  }

  nav ul li a {
    color: rgb(74 222 128);
    text-decoration: none;
    font-size: 1.2rem;
  }

  nav ul li button {
    background: #555;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
  }
`;

export default Hamburger;