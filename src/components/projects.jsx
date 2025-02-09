import React from 'react'
import { TbBrandGithubFilled } from "react-icons/tb";
import { BsArrowUpRight } from "react-icons/bs";

const Projects = () => {
    const links = {
        github: {
            triangle: "https://github.com/imadnanali/Triangle-Finder",
            todo: "https://github.com/imadnanali/ToDO-List",
            weather: "https://github.com/imadnanali/Weather-App",
        },
        live: {
            triangle: "https://imadnanali.github.io/Triangle-Finder/",
            todo: "https://imadnanali.github.io/ToDO-List/",
            weather: "https://imadnanali.github.io/Weather-App/",
        }
    }

    return (
        <div className='md:mt-0 mt-[16rem]' id='projects'>
            <div className="project flex flex-col py-10">
                

                <h1 className='px-5 md:px-24 font-semibold text-[2rem]'>All Creative projects.</h1>
                <h3 className='px-5 md:px-24 font-semibold text-[1.5rem] text-gray-400'>Here's my all projects.</h3>

                {/* Weather*/}
                <div className='flex h-lvh lg:flex-row flex-col lg:items-center justify-evenly'>
                            <div className="skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4">
                                <h1 className="heading py-10 uppercase font-semibold text-xl">
                                    Weather App
                                </h1>
                                <div className="flex flex-wrap gap-4">
                                    <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                        HTML
                                    </h1>
                                    <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                        CSS
                                    </h1>
                                    <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                        JavaScript
                                    </h1>
                                </div>
                                <h1 className="pt-5 text-neutral-400 leading-relaxed text-sm">
                                    <span className='text-green-400 font-semibold italic'>Weater App</span> – A responsive website built using JavaScript, allowing users to check <span className='text-green-400 font-semibold italic'>real-time weather</span> conditions by entering a city name. It details like <span className='text-green-400 font-semibold italic'>temperature, weather conditions, and location</span> with an interactive search functionality and a clean UI.
                                </h1>
                                <div className="buttons flex gap-5 py-10">
                                    <a href={links.github.weather}>
                                        <button className='font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500'>
                                            <TbBrandGithubFilled size={25} />
                                        </button>
                                    </a>
                                    <a href={links.live.weather}>
                                        <button className='font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10'>
                                            <BsArrowUpRight size={25} />
                                        </button>
                                    </a>
                                </div>
                            </div>
                            <div className="aboutimage py-10 lg:pe-5">
                                <img src="assets/weather.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                            </div>
                        </div>


                {/* Todo List */}
                <div className='projectcard'>
                    <div className='flex h-lvh lg:flex-row flex-col-reverse lg:items-center justify-evenly'>
                        <div className="aboutimage py-10 lg:pe-5">
                            <img src="assets/todo.png" alt="image" className='lg:w-[50rem] rounded-lg' />
                        </div>
                        <div className="skills lg:py-5 lg:pt-10 pt-5 px-5 lg:ps-5 lg:w-1/4">
                            <h1 className="heading py-10 uppercase text-white font-semibold text-xl">
                                Todo List
                            </h1>
                            <div className="flex flex-wrap gap-4">
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    HTML
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    CSS
                                </h1>
                                <h1 className="px-3 py-1 rounded-full border border-neutral-500 text-neutral-400 leading-relaxed text-base">
                                    JavaScript
                                </h1>
                                
                            </div>
                            <h1 className="pt-5 text-neutral-400 leading-relaxed text-sm">
                                <span className=' font-semibold italic text-green-400'>Todo List</span> – a responsive React-based website styled with Tailwind CSS, enabling <span className='text-green-400 font-semibold italic'>task creation, editing, and deletion</span>. Integrated with <span className='text-green-400 font-semibold italic'>local storage for offline functionality</span>, it ensures todos are preserved and reloaded seamlessly upon reopening the site.</h1>
                            <div className="buttons flex gap-5 py-10">
                                <a href={links.github.todo}>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-black text-white hover:text-black hover:bg-white rounded-full p-5 border border-neutral-500'>
                                        <TbBrandGithubFilled size={25} />
                                    </button>
                                </a>
                                <a href={links.live.todo}>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10'>
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
                                <a href={links.live.triangle}>
                                    <button className='font-semibold transition ease-in-out duration-300 bg-white text-black hover:text-white hover:bg-black hover:border border  rounded-full p-5 relative right-10'>
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
