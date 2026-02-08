'use client'
import SkillBox from './../../components/SkillBox';
import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function About() {
  const [skillsData, setSkillsData] = useState<SkillCategory[]>([]);
  const [profileData, setProfileData] = useState({ about: '' });
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isSkillsVisible, setIsSkillsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    axios.get('/data/skills.json')
      .then(res => setSkillsData(res.data.categories))
      .catch(err => console.error('Error loading skills:', err));

    axios.get('/data/profile.json')
      .then(res => setProfileData(res.data))
      .catch(err => console.error('Error loading profile:', err));
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px'
    };

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsAboutVisible(true);
        }
      });
    }, observerOptions);

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsSkillsVisible(true);
        }
      });
    }, observerOptions);

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (skillsRef.current) skillsObserver.observe(skillsRef.current);

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (skillsRef.current) skillsObserver.unobserve(skillsRef.current);
    };
  }, [isMounted]);

  return (
    <div className="min-w-screen w-screen h-screen flex relative overflow-hidden  bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 ">
      {/* Left Half - About Me */}
      <div id="about" ref={aboutRef} className="w-1/2 h-full    flex items-center justify-center relative">
        <div className={`max-w-xl px-12 transition-all duration-1000 ease-out ${
          isMounted && isAboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
        }`}>
          <h1 className="text-6xl font-bold text-white mb-8 uppercase tracking-wider" style={{fontFamily: 'Cinzel, serif'}}>
            {"About Me".split('').map((letter, index) => (
              <span 
                key={index} 
                className="inline-block transition-transform duration-200  hover:scale-125 hover:text-blue-300 cursor-default"
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            ))}
          </h1>
          <p className="text-white text-lg leading-relaxed" style={{fontFamily: 'Cinzel, serif'}}>
            {(profileData.about || "Loading...").split(' ').map((word, index) => (
              <span 
                key={index} 
                className="inline-block transition-all duration-200 hover:text-blue-300 hover:scale-110 hover:-translate-y-1 cursor-default mr-1"
              >
                {word}
              </span>
            ))}
          </p>
         
        </div>
      </div>

      {/* Right Half - Skills */}
      <div id="skills" ref={skillsRef} className="w-1/2 h-full  flex items-center justify-center relative">
        <div className="w-full h-full px-12 py-3 relative">
         
          
          <div className="relative z-10 w-full h-full flex flex-col justify-center gap-3">
            {skillsData.map((category, index) => (
              <SkillBox 
                key={index} 
                title={category.title} 
                skills={category.skills.join(', ')} 
                position={index % 2 === 0 ? 'left' : 'right'}
                index={index}
                isVisible={isMounted && isSkillsVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
