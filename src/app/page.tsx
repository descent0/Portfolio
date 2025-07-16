'use client'

import Hero3D from "@/components/3d-hero"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import { useState } from "react"


export default function Home() {
const [personalInfo,setPersonalInfo]=useState({});



  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navigation />
      <Hero3D />
      <AboutSection personalInfo={personalInfo} />
      <SkillsSection/>
      <ProjectsSection />
      <ContactSection personalInfo={personalInfo} />
    </div>
  )
}
