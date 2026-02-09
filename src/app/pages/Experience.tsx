'use client'

import { useEffect, useState, useRef } from 'react'
import HangingLetters from '@/components/HangingLetters'

interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [showAll, setShowAll] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/data/experiences.json')
      .then((res) => res.json())
      .then((data) => setExperiences(data.experiences))
  }, [])

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isInView])

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 3)

  // Calculate dynamic width based on number of experiences
  const experienceWidth = 320
  const gap = 64
  const paddingLeft = 80
  const buttonWidth = experiences.length > 3 ? 200 : 0
  const pattiWidth = 120 // Width of the decorative strip at the end
  const calculatedWidth = paddingLeft + (visibleExperiences.length * experienceWidth) + ((visibleExperiences.length - 1) * gap) + buttonWidth + pattiWidth
  const containerWidth = `${calculatedWidth}px`

  return (
    <div 
      ref={sectionRef}
      id="experiences" 
      className="relative h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 overflow-hidden transition-all duration-700" 
      style={{ width: containerWidth }}
    >
      {/* Title Section */}
      <div className="absolute top-8 left-0 z-20">
        <h1 className="text-6xl font-bold text-white uppercase tracking-[0.15em]" style={{fontFamily: 'Cinzel, serif'}}>
          <HangingLetters text="EXPERIENCE" isInView={isInView} />
        </h1>
      </div>

      {/* Timeline Container */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 transition-all duration-700" style={{width: `calc(${calculatedWidth - pattiWidth - 40}px)`}}>
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 transform -translate-y-1/2 z-0 transition-all duration-700" style={{width: `calc(100% - 40px)`}}></div>
        

        {/* Timeline Experiences */}
        <div className="relative flex items-center justify-start pl-20 pr-32 gap-16">
          {visibleExperiences.map((experience, index) => (
            <div key={experience.id} className="relative flex flex-col items-center" style={{ minWidth: '280px' }}>
              
              {/* Experience Card - alternating above/below timeline */}
              <div className={`relative ${index % 2 === 0 ? 'mt-24' : 'mb-24 -order-1'} group`}>
                <div className="w-72 bg-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-slate-500/30 hover:border-slate-500">
                  {/* Experience Header */}
                  <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 p-6 border-b border-slate-600/50">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-600/20 rounded-full blur-3xl"></div>
                    <h3 className="text-xl font-bold text-white mb-2 relative z-10">{experience.title}</h3>
                    <p className="text-slate-300 font-semibold mb-1 relative z-10">{experience.company}</p>
                    <p className="text-slate-400 text-sm relative z-10">📅 {experience.period}</p>
                  </div>

                  {/* Experience Info */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">{experience.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700/70 text-slate-200 rounded-full text-xs font-medium border border-slate-600">
                          {tech}
                        </span>
                      ))}
                      {experience.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-slate-700/70 text-slate-200 rounded-full text-xs font-medium border border-slate-600">
                          +{experience.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute ${index % 2 === 0 ? '-top-4' : '-bottom-4'} left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl`}></div>
              </div>
            </div>
          ))}
          
          {/* Show More/Less Button */}
          {experiences.length > 3 && (
            <div className="relative flex flex-col items-center" style={{ minWidth: '200px' }}>
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-4 bg-slate-600 hover:bg-slate-500 text-white rounded-lg font-bold text-lg uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-slate-500/50 border border-slate-500"
              >
                {showAll ? 'Show Less' : 'Show More'}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Vertical Strip at Right End */}
      <div className="absolute right-0 top-0 h-full w-[8%] bg-gradient-to-br  from-[#4d5361] to-[#000000]  border-l-2 border-slate-500/50 flex items-center justify-center shadow-2xl">
        <div className="transform -rotate-90 whitespace-nowrap">
          <span className="text-slate-300 text-lg font-extrabold uppercase tracking-[0.3em]" style={{fontFamily: 'Cinzel, serif'}}>
            Thank You
          </span>
            
        </div>
      </div>
    </div>
  )
}
