'use client'

import HorizontalScrollContainer from "@/components/horizontal-scroll-container"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Project from "./pages/Project"


export default function Home() {
  return (
    <HorizontalScrollContainer>
      <Hero />
      <About />
      <Project />
      <Experience />
    </HorizontalScrollContainer>
  )
}
