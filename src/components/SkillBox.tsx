import React from 'react'

interface SkillBoxProps {
  title: string;
  skills: string;
  position: 'left' | 'right';
  index: number;
  isVisible: boolean;
}

const SkillBox = ({title, skills, position, index, isVisible}: SkillBoxProps) => {
  const delay = index * 200; // 200ms delay between each box
  
  return (
    <div 
      className={`w-[50%] h-1/2 bg-gradient-to-br from-[#4d5361] to-[#000000] p-6 rounded-lg border-l-4 border-gray-500 
        ${position === 'left' ? 'ml-8' : 'ml-auto mr-8'}
        transition-all duration-700 ease-out
        hover:scale-105 hover:shadow-2xl hover:border-white
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      <h2 className="text-xl font-semibold text-white uppercase tracking-wide mb-3" style={{fontFamily: 'Cinzel, serif'}}>
        {title}
      </h2>
      <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Cinzel, serif'}}>
        {skills}
      </p>
    </div>
  )
}

export default SkillBox
