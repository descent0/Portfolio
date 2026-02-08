'use client'

import { useEffect, useState, useRef } from 'react'
import HangingLetters from '@/components/HangingLetters'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
}

export default function Project() {
  const [projects, setProjects] = useState<Project[]>([])
  const [showAll, setShowAll] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch('/data/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
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

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  // Calculate dynamic width based on number of projects
  const projectWidth = 320
  const gap = 64
  const paddingLeft = 80
  const paddingRight = 128
  const buttonWidth = 200
  const calculatedWidth = paddingLeft + (visibleProjects.length * projectWidth) + ((visibleProjects.length - 1) * gap) + buttonWidth + paddingRight
  const containerWidth = `${Math.max(calculatedWidth, typeof window !== 'undefined' ? window.innerWidth : 1024)}px`

  return (
    <div 
      ref={sectionRef}
      id="projects" 
      className="relative h-screen bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 overflow-hidden transition-all duration-700" 
      style={{ width: containerWidth }}
    >
      {/* Title Section */}
      <div className="absolute top-8 left-0 z-20">
        <h1 className="text-6xl font-bold text-white uppercase tracking-[0.15em]" style={{fontFamily: 'Cinzel, serif'}}>
          <HangingLetters text="FEATURED" isInView={isInView} />
        </h1>
      </div>

      {/* Timeline Container */}
      <div className="absolute top-1/2 left-10 w-full transform -translate-y-1/2 transition-all duration-700">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-[calc[100%-10px]] h-1 bg-gradient-to-r from-slate-600 via-slate-500 to-slate-600 transform -translate-y-1/2 z-0 transition-all duration-700"></div>
        
        {/* Animated glow effect on timeline */}
        <div className="absolute top-1/2 left-0 w-full h-1 transform -translate-y-1/2 z-0 transition-all duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400 to-transparent opacity-30 animate-pulse"></div>
        </div>

        {/* Timeline Projects */}
        <div className="relative flex items-center justify-start pl-20 pr-32 gap-16">
          {visibleProjects.map((project, index) => (
            <div key={project.id} className="relative flex flex-col items-center" style={{ minWidth: '280px' }}>
              {/* Timeline Node */}
                
              
              {/* Project Card - alternating above/below timeline */}
              <div className={`relative ${index % 2 === 0 ? 'mt-24' : 'mb-24 -order-1'} group`}>
                <div className="w-72 bg-slate-900/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-600/50 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-slate-500/30 hover:border-slate-500">
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                      {project.title === 'Safe Stranger' && '🛡️'}
                      {project.title === 'Portfolio Website' && '💼'}
                      {project.title === 'Finance Tracker' && '💰'}
                      {project.title === 'EFAT' && '📚'}
                      {project.title === 'NoWaitz' && '⏱️'}
                      {project.title === 'Nyaauta' && '🎌'}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                    
                    {/* Project Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-2xl font-bold text-white drop-shadow-lg">{project.title}</h3>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{project.description}</p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-700/70 text-slate-200 rounded-full text-xs font-medium border border-slate-600">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-slate-700/70 text-slate-200 rounded-full text-xs font-medium border border-slate-600">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a href={project.liveUrl} className="flex-1 px-4 py-2 bg-slate-600 text-white rounded-lg text-sm font-medium text-center hover:bg-slate-500 transition-all duration-300">
                        View Live
                      </a>
                      <a href={project.githubUrl} className="px-4 py-2 bg-slate-700 text-white rounded-lg text-sm font-medium hover:bg-slate-600 transition-all duration-300">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className={`absolute ${index % 2 === 0 ? '-top-4' : '-bottom-4'} left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-slate-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300 blur-xl`}></div>
              </div>
            </div>
          ))}
          
          {/* Show More/Less Button */}
          {projects.length > 3 && (
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

 
    </div>
  )
}
