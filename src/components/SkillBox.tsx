import React from 'react'

interface SkillBoxProps {
  title: string;
  skills: string;
  position: 'left' | 'right';
  index: number;
  isVisible: boolean;
}

const SkillBox = ({title, skills, position, index, isVisible}: SkillBoxProps) => {
  const delay = 0; // 200ms delay between each box
  
  // Determine positioning classes based on screen size and position
  const positionClasses = position === 'left' 
    ? 'mr-auto ml-4 sm:ml-6 md:ml-8 lg:ml-10' 
    : 'ml-auto mr-4 sm:mr-6 md:mr-8 lg:mr-10';
  
  return (
    <div 
      className={`group/skillbox w-[92%] sm:w-[80%] md:w-[75%] lg:w-[70%] xl:w-[60%] 
        bg-gradient-to-br from-[#4d5361] to-[#000000] 
        p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg border-l-4 border-gray-500 
        ${positionClasses}
        transition-all duration-700 ease-out
        hover:scale-105 hover:shadow-2xl hover:border-white hover:shadow-blue-500/50 hover:-translate-y-2
        ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}
        relative overflow-hidden`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms'
      }}
    >
      {/* Animated gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover/skillbox:from-blue-500/10 group-hover/skillbox:to-purple-500/10 transition-all duration-500 pointer-events-none"></div>
      
      {/* Floating particles effect */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-blue-400/0 rounded-full blur-2xl group-hover/skillbox:bg-blue-400/20 transition-all duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-purple-400/0 rounded-full blur-2xl group-hover/skillbox:bg-purple-400/20 transition-all duration-700"></div>
      
      <h2 className="relative z-10 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white uppercase tracking-wide mb-1 sm:mb-2 transition-all duration-300 group-hover/skillbox:text-blue-300 group-hover/skillbox:scale-105" style={{fontFamily: 'Cinzel, serif'}}>
        {title.split('').map((letter, index) => (
          <span 
            key={index} 
            className="inline-block transition-all duration-200 hover:text-purple-400 hover:scale-125 hover:-translate-y-1 cursor-default"
            style={{transitionDelay: `${index * 20}ms`}}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </h2>
      <p className="relative z-10 text-gray-300 text-[10px] sm:text-xs md:text-sm leading-tight sm:leading-relaxed group-hover/skillbox:text-gray-100 transition-colors duration-300" style={{fontFamily: 'Cinzel, serif'}}>
        {skills.split(', ').map((skill, index) => (
          <span 
            key={index} 
            className="inline-block transition-all duration-200 hover:text-blue-400 hover:scale-110 cursor-default"
          >
            {skill}{index < skills.split(', ').length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>
    </div>
  )
}

export default SkillBox
