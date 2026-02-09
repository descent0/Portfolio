'use client'

import { useState } from 'react'
import ChatBot from '@/components/ChatBot'
import Link from 'next/link'

export default function Hero() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }
  return (
    <div id="hero" className="min-w-screen w-screen h-screen flex relative bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 overflow-hidden">
      {/* Left Side */}
      {/* Left Side Container (The "Border" Layer) */}
<div className="relative h-screen w-full md:w-[50%] md:min-w-fit bg-white md:[clip-path:polygon(0%_0%,_82%_0%,_100%_50%,_82%_100%,_0%_100%)] z-[2]">
  
  {/* The Content Layer (The Dark Part) */}
  {/* We make this 12px smaller on the right side to let the white show through */}
  <div className="absolute inset-y-0 left-0 w-full md:min-w-[calc(fit-8px)] md:w-[calc(100%-8px)] bg-gradient-to-br from-[#4d5361] to-[#000000] flex items-center justify-center px-8 md:pr-[10%] md:[clip-path:polygon(0%_0%,_81%_0%,_100%_50%,_81%_100%,_0%_100%)]">
    
    <div className="max-w-[600px]">
      <h1 className="text-7xl font-black text-white leading-tight mb-6 tracking-tight" style={{fontFamily: 'Cinzel, serif'}}>
        {"DISHANT".split('').map((letter, index) => (
          <span 
            key={index} 
            className="inline-block transition-all duration-300  hover:text-blue-400 hover:scale-125 hover:-translate-y-2 hover:rotate-6 cursor-default"
            style={{transitionDelay: `${index * 20}ms`}}
          >
            {letter}
          </span>
        ))}<br />
        {"RAJPUT".split('').map((letter, index) => (
          <span 
            key={index} 
            className="inline-block transition-all duration-300 hover:text-blue-400 hover:scale-125 hover:-translate-y-2 hover:-rotate-6 cursor-default"
            style={{transitionDelay: `${index * 20}ms`}}
          >
            {letter}
          </span>
        ))}
      </h1>
      <p className="text-2xl text-gray-200 mb-12 leading-relaxed font-light" style={{fontFamily: 'Cinzel, serif'}}>
        {"I BUILD SYSTEMS,".split(' ').map((word, index) => (
          <span 
            key={index} 
            className="inline-block transition-all duration-200 hover:text-blue-300 hover:scale-110 cursor-default mr-2"
          >
            {word}
          </span>
        ))}<br />
        {"NOT JUST CODE".split(' ').map((word, index) => (
          <span 
            key={index} 
            className="inline-block transition-all duration-200 hover:text-blue-300 hover:scale-110 cursor-default mr-2"
          >
            {word}
          </span>
        ))}
      </p>
      
      {/* Social Icons */}
      <div className="flex gap-6 mb-12">
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/dishant0" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-blue-500/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="group-hover:scale-110 transition-transform duration-300">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        
        {/* GitHub */}
        <a href="https://github.com/descent0" target="_blank" rel="noopener noreferrer" className="group w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:scale-110 hover:-rotate-6 hover:shadow-2xl hover:shadow-purple-500/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="group-hover:scale-110 transition-transform duration-300">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        
        {/* Email */}
        <a href="mailto:rajputdishant891@gmail.com" className="group w-12 h-12 bg-white rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-200 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-green-500/50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000" className="group-hover:scale-110 transition-transform duration-300">
            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
          </svg>
        </a>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 flex-wrap">
         <Link href={"da"}>
        <button className="px-10 py-4 text-lg rounded-full border-2 border-white cursor-pointer transition-all duration-300 font-medium tracking-wide bg-transparent text-white hover:bg-white hover:text-gray-700">
          View Resume
        </button>
        </Link>
        <Link href={"#"}>
        <button className="px-10 py-4 text-lg rounded-full border-2 border-white cursor-pointer transition-all duration-300 font-medium tracking-wide bg-white text-gray-700 hover:bg-transparent hover:text-white">
          Connect
        </button>
        </Link>
      </div>
    </div>
  </div>
</div>

    
      {/* Right Side */}
      <div className="hidden md:flex flex-1 flex-col p-8 relative z-[1]">
        <nav className="flex justify-end gap-8 px-8 py-4 mb-8">
          <button onClick={() => scrollToSection('about')} className="text-white no-underline text-base font-medium transition-all duration-300 relative hover:text-gray-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer">
            About
          </button>
          <button onClick={() => scrollToSection('projects')} className="text-white no-underline text-base font-medium transition-all duration-300 relative hover:text-gray-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollToSection('experiences')} className="text-white no-underline text-base font-medium transition-all duration-300 relative hover:text-gray-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer">
            Experiences
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-white no-underline text-base font-medium transition-all duration-300 relative hover:text-gray-200 after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full bg-transparent border-none cursor-pointer">
            Skills
          </button>
        </nav>

        <div className="flex-1 flex items-center justify-center gap-8 relative p-8">
          <div className="group bg-gray-800 rounded-[20px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 max-w-[300px] z-[2] -mt-12 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(59,130,246,0.5)] hover:scale-105 hover:rotate-2">
            <img src="/portfolio.png" alt="Project showcase" className="w-full h-auto rounded-[10px] block group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="group bg-gray-800 rounded-[20px] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 max-w-[300px] mt-12 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(168,85,247,0.5)] hover:scale-105 hover:-rotate-2">
            <img src="/finance.png" alt="Project showcase" className="w-full h-auto rounded-[10px] block group-hover:scale-105 transition-transform duration-300" />
          </div>
        </div>

        <button 
          onClick={() => setIsChatOpen(true)}
          className="self-end px-8 py-4 bg-transparent border-2 border-white text-white rounded-full text-base font-medium cursor-pointer flex items-center gap-2 transition-all duration-300 mx-8 my-4 mb-4 hover:bg-white hover:text-gray-600 hover:translate-x-1 [&>svg]:hover:translate-x-1"
        >
          Ask AI
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </button>
      </div>

      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  )
}
