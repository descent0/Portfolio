"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import {
  Environment,
  OrbitControls,
} from "@react-three/drei"
import type { PersonalInfo } from "@/lib/types"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import InteractiveBlob from "./Interactive-smilie"

interface ContactSectionProps {
  personalInfo: PersonalInfo | null
}

export default function ContactSection({ personalInfo }: ContactSectionProps) {
  const {
    email = "rajputdishant891@gmail.com",
    github = "https://github.com/descent0",
    linkedin = "https://www.linkedin.com/in/dishant-rajput",
  } = personalInfo || {}

  // Local state to store form inputs
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return alert("No email address specified!")

    // Build mailto link with encoded subject and body
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
      <div className="">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="md:w-1/2 space-y-6 flex flex-col items-center justify-evenly">
            <div className="flex gap-4 pt-2 flex-wrap">
              <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-500 hover:text-white" asChild>
                <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </Button>

              <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-500 hover:text-white" asChild>
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </Button>

              <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-500 hover:text-white" asChild>
                <a href={`mailto:${email}`} className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  {email}
                </a>
              </Button>
            </div>

            {/* Interactive 3D Block */}
            <div className="h-64 w-full">
              <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} />
                <InteractiveBlob />
                <Environment preset="night" />
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="md:w-1/2 space-y-5 bg-gray-800 p-6 rounded-lg border border-gray-700"
          >
            <InputField
              id="Subject"
              label="Subject"
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
            <TextareaField
              id="message"
              label="Message"
              placeholder="Your message..."
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function InputField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: {
  id: string
  label: string
  type: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  )
}

function TextareaField({
  id,
  label,
  placeholder,
  value,
  onChange,
}: {
  id: string
  label: string
  placeholder: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-1">
        {label}
      </label>
      <textarea
        id={id}
        rows={5}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-2 rounded-md bg-gray-700 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
      />
    </div>
  )
}
