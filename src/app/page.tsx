'use client'

import { useState } from 'react'
import HorizontalScrollContainer from "@/components/horizontal-scroll-container"
import Hero from "./pages/Hero"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Project from "./pages/Project"
import ChatBot from '@/components/ChatBot'

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
      <HorizontalScrollContainer>
        <Hero />
        <About />
        <Project />
        <Experience />
      </HorizontalScrollContainer>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br  from-[#4d5361] to-[#000000] rounded-full flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-all duration-300 z-40 hover:shadow-blue-500/50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>

      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  )
}
