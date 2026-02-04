'use client'
import SkillBox from './../../components/SkillBox';

export default function About() {
  return (
    <div className="min-w-screen w-screen h-screen flex relative overflow-hidden bg-gray-600 ">
      {/* Left Half - About Me */}
      <div id="about" className="w-1/2 h-full bg-gray-600  flex items-center justify-center relative">
        <div className="max-w-xl px-12">
          <h1 className="text-6xl font-bold text-white mb-8 uppercase tracking-wider" style={{fontFamily: 'Cinzel, serif'}}>
            About Me
          </h1>
          <p className="text-white text-lg leading-relaxed" style={{fontFamily: 'Cinzel, serif'}}>
            I'm a Computer Science & Engineering undergrad at KIET with a builder's mindset and a 
            coder's heart. My core stack is MERN, but I'm always exploring — Next.js, PHP, and NLP 
            are part of my toolkit too. Whether it's coding, collaborating, or leading digital 
            initiatives, I'm all about pushing boundaries and growing with the tech community.
          </p>
         
        </div>
      </div>

      {/* Right Half - Skills */}
      <div id="skills" className="w-1/2 h-full bg-gray-600 flex items-center justify-center relative">
        <div className="w-full h-full px-12 py-3 relative">
         
          
          <div className="relative z-10 w-full h-full flex flex-col justify-center gap-3">
            {['Frontend', 'Backend', 'Tools'].map((skillCategory, index) => (
              <SkillBox key={index} title={skillCategory} skills="React, Next.js, HTML, CSS, JavaScript" position={index % 2 === 0 ? 'left' : 'right'} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
