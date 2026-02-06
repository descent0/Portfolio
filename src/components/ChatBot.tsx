'use client'

import { useState, useRef, useEffect } from 'react'

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

interface ChatBotProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm Dishant Rajput's Portfolio Assistant. I can answer questions about Dishant's professional experience, technical skills, projects, and qualifications. How can I help you learn more about Dishant?",
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    // Greeting
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to tell you about Dishant Rajput's professional background. You can ask me about his projects, technical skills, work experience, or how to contact him. What would you like to know?"
    }

    // Projects related
    if (lowerMessage.includes('project')) {
      return "Dishant has developed several impressive projects:\n\n• Safe Stranger - A safety-focused application for secure social interactions\n• Finance Tracker - Full-stack finance management app with expense tracking\n• EFAT - Educational platform for students\n• NoWaitz - Queue management system\n• Portfolio Website - This professional portfolio built with Next.js\n\nEach project demonstrates his expertise in React, Node.js, and modern development practices. Would you like details about any specific project?"
    }
    
    // Skills related
    if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack') || lowerMessage.includes('technical')) {
      return "Dishant possesses strong technical skills across the full stack:\n\n✅ Frontend: React, Next.js, TypeScript, Tailwind CSS\n✅ Backend: Node.js, Express\n✅ Databases: MongoDB, PostgreSQL, Firebase\n✅ Tools: Git, VS Code, REST APIs\n\nHe specializes in building scalable, performant web applications with modern architectures and best practices."
    }

    // Experience related
    if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('background')) {
      return "Dishant has professional experience as a Full-Stack Developer, specializing in:\n\n• Building scalable web applications\n• Modern framework implementation (React, Next.js)\n• Database design and optimization\n• RESTful API development\n• Responsive UI/UX design\n\nHis approach focuses on creating maintainable, production-ready systems. Explore the Experience section for detailed information about his professional journey."
    }

    // Contact related
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach') || lowerMessage.includes('hire') || lowerMessage.includes('connect')) {
      return "You can reach Dishant Rajput through:\n\n📧 Email: Check the hero section for direct contact\n💼 LinkedIn: linkedin.com/in/dishant-rajput\n💻 GitHub: github.com/dishant-rajput\n\nHe's open to discussing new opportunities, collaborations, or technical consultations. Feel free to reach out!"
    }

    // Resume related
    if (lowerMessage.includes('resume') || lowerMessage.includes('cv') || lowerMessage.includes('download')) {
      return "Dishant's resume is available for viewing and download. Click the 'View Resume' button in the hero section to access his detailed CV, which includes:\n\n• Complete work history\n• Educational background\n• Technical certifications\n• Project portfolio\n• Professional achievements"
    }

    // About related
    if (lowerMessage.includes('about') || lowerMessage.includes('who')) {
      return "Dishant Rajput is a skilled Full-Stack Developer with a philosophy of 'building systems, not just code.' He focuses on:\n\n✨ Writing clean, maintainable code\n✨ Architecting scalable solutions\n✨ Delivering user-centric applications\n✨ Continuous learning and improvement\n\nHis technical expertise spans across modern web technologies, with a proven track record of delivering high-quality projects."
    }

    // Strengths/Why hire
    if (lowerMessage.includes('strength') || lowerMessage.includes('why') || lowerMessage.includes('advantage')) {
      return "Dishant's key strengths include:\n\n💪 Full-stack proficiency - Can handle both frontend and backend\n💪 Modern tech stack - Up-to-date with latest frameworks\n💪 Problem solver - Builds systems, not just features\n💪 Quality focused - Clean code and best practices\n💪 Fast learner - Adapts quickly to new technologies\n\nHe brings value through technical expertise combined with practical problem-solving skills."
    }

    // Availability
    if (lowerMessage.includes('available') || lowerMessage.includes('looking') || lowerMessage.includes('open to')) {
      return "Dishant is open to discussing new opportunities! Whether you're looking for a full-stack developer, need technical consultation, or want to collaborate on a project, he'd love to hear from you. Please use the contact options in the hero section to get in touch."
    }

    // Default response
    return "Thanks for your interest in Dishant Rajput! I can provide information about:\n\n• His technical skills and expertise\n• Project portfolio and achievements\n• Professional experience\n• How to contact him\n\nWhat specific information would you like to know?"
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // Simulate bot typing and response
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Chat Panel */}
      <div className="fixed top-0 right-0 h-screen w-full md:w-[450px]  bg-gradient-to-br from-[#28292c] to-[#000000]  shadow-2xl z-50 flex flex-col border-l border-slate-700 animate-slideIn">
        {/* Header */}
        <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg">
              DR
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Dishant's Portfolio Assistant</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-slate-400">Ask about Dishant</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-white transition-all duration-300 hover:rotate-90"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'bg-slate-700/50 text-slate-200 border border-slate-600'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-700/50 border border-slate-600 rounded-2xl px-4 py-3">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce"></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-slate-800/50 backdrop-blur-sm border-t border-slate-700 p-4">
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Dishant's skills, projects, or experience..."
                className="w-full bg-slate-700/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={1}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
          <p className="text-xs text-slate-500 mt-2 text-center">Press Enter to send</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}
