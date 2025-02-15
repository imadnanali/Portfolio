import React from "react";

const AboutMe = () => {
    return (
        <section className=" text-gray-400  flex flex-col items-center justify-center" id="about">
            <div className="max-w-6xl flex flex-col md:flex-row items-center justify-evenly space-y-8 md:space-y-0 md:space-x-10">


                {/* About Me Content */}
                <div className="space-y-4 md:w-1/2 px-5 md:px-0">
                    <h2 className="text-3xl text-white font-bold">🚀 Who Am I?</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Hey! I'm <span className="text-green-400 font-semibold"><i> Adnan Ali</i></span>.
                        I've always been curious about technology, and over the years, I've transformed my curiosity into a passion for
                        <span className="text-green-400 font-semibold"><i> web development</i></span>, problem-solving, and crafting beautiful digital experiences.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        My journey began with exploring <span className="text-green-400 font-semibold"><i> code and creativity</i></span>, and today, I’m honing my skills in
                        <span className="text-green-400 font-semibold"><i> Full-Stack Development</i></span>. From tackling real-world challenges to learning new technologies, I strive to grow every day.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Beyond coding, I enjoy spending time with friends, engaging in thoughtful conversations, and continuously seeking ways to make a positive impact. Let’s connect and create something amazing together!
                    </p>
                </div>
                <div className="md:block flex flex-col md:pt-0 pt-10">
                    {/* Profile Image */}
                    <img className='md:w-[9.5rem] w-[6rem] md:ms-60 ms-48 backdrop-invert-0 md:relative absolute' src="assets/dots.svg" alt="" />
                    <img
                        src="assets/mypic1.jpg"// Replace with your image URL
                        alt="Your Name"
                        className="md:w-[22rem] flex items-center w-72 rounded-full md:mt-[-8rem]"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
