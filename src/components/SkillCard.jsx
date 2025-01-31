import React from 'react'

const SkillCard = (props) => {
  return (
    <div>
      <div className='hover:scale-110 cursor-pointer transition-all ease-in-out duration-200 flex border w-fit rounded-3xl py-2 px-7 border-neutral-500'>{props.name}</div>
    </div>
  )
}

export default SkillCard
