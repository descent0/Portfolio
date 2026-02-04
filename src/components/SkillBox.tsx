import React from 'react'

const SkillBox = ({title, skills, position}: {title: string, skills: string, position: 'left' | 'right'}) => {
  return (
    <div className={`w-[50%] h-1/2 bg-gradient-to-br from-[#4d5361] to-[#000000] p-6 rounded-lg border-l-4 border-gray-500 ${position === 'left' ? 'ml-8' : 'ml-auto mr-8'}`}>
      <h2 className="text-xl font-semibold text-white uppercase tracking-wide" style={{fontFamily: 'Cinzel, serif'}}>
        {title}
      </h2>
    </div>
  )
}

export default SkillBox
