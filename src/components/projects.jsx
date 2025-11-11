import React from 'react'
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
    const links = {
        github: {
            gemai: "https://github.com/imadnanali/GemAi",
            airbnb: "https://github.com/imadnanali/Airbnb",
            triangle: "https://github.com/imadnanali/Triangle-Finder",
        },
        live: {
            gemai: "https://gemai-tgq7.onrender.com/",
            airbnb: "https://airbnb-uaja.onrender.com/listings",
            triangle: "https://imadnanali.github.io/Triangle-Finder/",
        }
    }

    return (
        <div className='md:mt-0 mt-[16rem]' id='projects'>
            <div className="project flex flex-col py-10">


                <h1 className='px-5 md:px-24 font-semibold text-[2rem]'>All Creative projects.</h1>
                <h3 className='px-5 md:px-24 font-semibold text-[1.5rem] text-gray-400'>Here's my all projects.</h3>


                {/* GemAi*/}
                <div className='flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly'>
                    <div className="skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4">
                        <h1 className="heading py-10 uppercase font-semibold text-xl">
                            GemAi
                        </h1>
                        <div className="flex flex-wrap gap-4">
                            <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                React.js
                            </h1>
                            <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                Node.js
                            </h1>
                            <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                MongoDB
                            </h1>
                            <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                JWT Authentication
                            </h1>
                            <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                Express.js
                            </h1>
                        </div>
                        <h1 className="pt-5 text-neutral-400 leading-relaxed text-sm">
                            <span className='text-green-400 font-semibold italic'>🧠 GemAi</span> – an intelligent full-stack chat app built with <span className='text-green-400 font-semibold italic'>React.js, Node.js</span>, and <span className='text-green-400 font-semibold italic'>MongoDB</span>.
                            It features <span className='text-green-400 font-semibold italic'>JWT authentication, real-time AI chat</span>, and <span className='text-green-400 font-semibold italic'>threaded conversation management</span> — delivering a clean, fast, and responsive user experience.
                            Integrated <span className='text-green-400 font-semibold italic'>with modern APIs</span> to provide smooth and context-aware AI interactions.
                        </h1>
                        <div className="buttons flex gap-5 py-10">
                            <a href={links.github.gemai}>
                                <button className='font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500'>
                                    <TbBrandGithubFilled size={25} />
                                </button>
                            </a>
                            <a href={links.live.gemai} className='relative right-10'>
                                <button className='font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 '>
                                    <BsArrowUpRight size={25} />
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="aboutimage py-10 lg:pe-5">
                        <img src="assets/gemai.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                    </div>
                </div>

                {/* Airbnb Clone */}
                <div className='projectcard'>
                    <div className='flex h-lvh lg:flex-row flex-col-reverse lg:items-center justify-evenly'>
                        <div className="aboutimage py-10 lg:pe-5">
                            <img src="assets/project_airbnb.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                        </div>
                        <div className="skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4">
                            <h1 className="heading py-10 uppercase text-white font-semibold text-xl">
                                Airbnb Clone
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Node.js
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Express
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Cloudinary
                                </h1>

                            </div>
                            <h1 className="pt-5 text-neutral-400 leading-relaxed text-sm">
                                <span className=' font-semibold italic text-green-400'>Airbnb Clone</span> – a full-stack web application built with <span className='text-green-400 font-semibold italic'>Node.js, Express.js, MongoDB,</span> and <span className='text-green-400 font-semibold italic'>EJS</span>. It allows users to create, edit, and manage property listings with secure <span className='text-green-400 font-semibold italic'>authentication</span>. Integrated with <span className='text-green-400 font-semibold italic'>Cloudinary</span> for image uploads and styled using <span className='text-green-400 font-semibold italic'>Bootstrap CSS</span>, the app delivers a <span className='text-green-400 font-semibold italic'>responsive</span> and <span className='text-green-400 font-semibold italic'>modern user experience</span>. Deployed on <span className='text-green-400 font-semibold italic'>Render</span> for seamless hosting and accessibility.</h1>
                            <div className="buttons flex gap-5 py-10">
                                <a href={links.github.airbnb}>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500'>
                                        <TbBrandGithubFilled size={25} />
                                    </button>
                                </a>
                                <a href={links.live.airbnb} className='relative right-10'>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 '>
                                        <BsArrowUpRight size={25} />
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Triangle Calculator */}
                <div className='projectcard '>
                    <div className='flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly'>
                        <div className="skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4">
                            <h1 className="heading py-10 uppercase text-white font-semibold text-xl">
                                Triangle Finder
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    HTML
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    Tailwind
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    JavaScript
                                </h1>
                            </div>
                            <h1 className="pt-5 text-neutral-400 leading-relaxed text-sm">
                                <span className='text-green-400 font-semibold italic'>Triangle Finder</span> – a responsive website created using JavaScript, allowing users to <span className='text-green-400 font-semibold italic'>create triangles</span> by inputting values and calculating properties like <span className='text-green-400 font-semibold italic'>area, perimeter, and angles</span> with interactive <span className='text-green-400e italic font-semibold'>event handling</span> and <span className='text-green-400 italic font-semibold'>canvas drawing functions.</span>
                            </h1>
                            <div className="buttons flex gap-5 py-10">
                                <a href={links.github.triangle}>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500'>
                                        <TbBrandGithubFilled size={25} />
                                    </button>
                                </a>
                                <a href={links.live.triangle} className='relative right-10'>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 '>
                                        <BsArrowUpRight size={25} />
                                    </button>
                                </a>
                            </div>
                        </div>
                        <div className="aboutimage py-10 lg:pe-5 rounded-xl">
                            <img src="assets/triangle.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                        </div>
                    </div>
                </div>






            </div>
        </div>
    )
}

export default Projects
