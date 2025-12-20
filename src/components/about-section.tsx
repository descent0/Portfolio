"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import {
  Environment,
  OrbitControls,
} from "@react-three/drei"
import type { PersonalInfo } from "@/lib/types"
import Link from "next/link";


import InteractiveBlob from "./Interactive-smilie"

interface AboutSectionProps {
  personalInfo: PersonalInfo | null
}


export default function AboutSection({ personalInfo }: AboutSectionProps) {
  const defaultInfo = {
    bio: " I'm a Computer Science & Engineering undergrad at KIET with a builder's mindset and a coder's heart. My core stack is MERN, but I’m always exploring — Next.js, PHP, and NLP are part of my toolkit too. Whether it's coding, collaborating, or leading digital initiatives, I’m all about pushing boundaries and growing with the tech community.",
  }

  return (
    <section id="about" className="pt-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold text-white">
          <span className="text-purple-400">About</span> Me
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
          Get to know who I am and what I love doing.
        </p>
        <div className="w-20 h-1 bg-purple-500 mx-auto mt-6"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-2 items-center">
        {/* Bio and Highlights */}
        <div className="space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            {personalInfo?.bio || defaultInfo.bio}
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { title: "Focus", desc: "MERN Stack | PHP | Next.js" },
              {  title: "Strength", desc: "Rapid Prototyping & Clean Code" },
              { title: "Collaboration", desc: "Open to Tech Partnerships" },
              { title: "Edge", desc: "Design + Functionality Balance" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-5 shadow-md hover:shadow-purple-600/40 transition-shadow duration-300"
              >
                <h3 className="text-purple-400 font-semibold text-lg mb-1">
                  {item.title}
                </h3>
                <p className="text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

<Link href="#contact" className="w-full h-full flex justify-center items-center">
          <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} />
            <InteractiveBlob />
            <Environment preset="night" />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
          </Link>
        
      </div>
    </section>
  )
}
