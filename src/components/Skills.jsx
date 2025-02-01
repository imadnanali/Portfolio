import React from 'react'
import SkillCard from './SkillCard';
import SkillTagCloud from './SkillTagCloud';
import SkillTagMobile from './SkillTagMobile';
const Skills = () => {
    return (
        <div className="skills flex flex-col md:flex-row items-center mt-[5rem] h-lvh " id='skill'>

            <div className="skillsinfo w-full md:w-1/2 md:px-20 px-5">
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
            <div className="circle md:block hidden w-1/2 md:px-20 px-40">
                <SkillTagCloud />
            </div>
            <div className="circle block md:hidden w-1/2 md:px-20 px-40">
                <SkillTagMobile />
            </div>
        </div>
    )
}

export default Skills
