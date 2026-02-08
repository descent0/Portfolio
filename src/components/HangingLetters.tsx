'use client'

import { motion, useMotionValue, useSpring } from 'framer-motion'

interface HangingLettersProps {
  text: string
  isInView: boolean
  className?: string
}

export default function HangingLetters({ text, isInView, className = "" }: HangingLettersProps) {
  // Hanging letter component with realistic physics
  const HangingLetter = ({ char, index }: { char: string, index: number }) => {
    // Each letter has a different attachment point for natural variation
    const attachmentOffset = (index % 3) - 1 // -1, 0, 1 pattern
    const naturalTilt = attachmentOffset * 5 // Natural tilt based on attachment
    
    const rotation = useMotionValue(naturalTilt)
    const springRotation = useSpring(rotation, {
      stiffness: 80,
      damping: 12,
      mass: 1.2
    })

    return (
      <motion.div
        className="relative inline-flex flex-col items-center cursor-grab active:cursor-grabbing"
        initial={{ y: -150, opacity: 0 }}
        animate={isInView ? { 
          y: 0, 
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 60,
            damping: 15,
            mass: 2,
            delay: index * 0.1
          }
        } : {}}
        drag="x"
        dragConstraints={{ left: -60, right: 60, top: 0, bottom: 0 }}
        dragElastic={0.15}
        onDrag={(event, info) => {
          // Calculate rotation based on drag distance (pendulum physics)
          const angle = naturalTilt + (info.offset.x * 0.4)
          rotation.set(angle)
        }}
        onDragEnd={() => {
          // Return to natural tilted position with spring physics
          rotation.set(naturalTilt)
        }}
        style={{ 
          transformOrigin: `${50 + (attachmentOffset * 15)}% -8px`,
          rotate: springRotation
        }}
        whileHover={{
          rotate: [naturalTilt, naturalTilt + 4, naturalTilt - 3, naturalTilt + 2, naturalTilt - 1, naturalTilt],
          transition: {
            duration: 2,
            ease: "easeInOut"
          }
        }}
      >
        {/* Thread - positioned at attachment point with drop animation */}
        <motion.div 
          className="absolute bottom-full w-[2px] bg-slate-400 origin-bottom"
          initial={{ height: 0 }}
          animate={isInView ? {
            height: 40,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: index * 0.1
            }
          } : {}}
          style={{ 
            left: `${50 + (attachmentOffset * 15)}%`,
            transform: 'translateX(-50%)'
          }}
        />
        
        {/* Letter */}
        <span className="inline-block select-none">
          {char}
        </span>
      </motion.div>
    )
  }

  return (
    <div className={`flex gap-1 items-end ${className}`}>
      {text.split('').map((char, index) => (
        <HangingLetter key={index} char={char} index={index} />
      ))}
    </div>
  )
}
