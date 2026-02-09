'use client'

import { useRef, useEffect } from 'react'

interface HorizontalScrollContainerProps {
  children: React.ReactNode
}

export default function HorizontalScrollContainer({ children }: HorizontalScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      
      // Smooth continuous horizontal scroll
      container.scrollLeft += e.deltaY
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="horizontal-scroll-wrapper"
    >
      <div className="horizontal-scroll-content">
        {children}
      </div>
    </div>
  )
}
