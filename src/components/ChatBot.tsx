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

// Format bot messages to display structure properly
const formatBotMessage = (text: string) => {
  const lines = text.split('\n')
  
  return lines.map((line, idx) => {
    const trimmed = line.trim()
    
    // Handle bullet points
    if (trimmed.startsWith('•') || trimmed.startsWith('-') || trimmed.startsWith('*')) {
      const content = trimmed.replace(/^[•\-*]\s*/, '')
      return (
        <div key={idx} className="flex gap-2 my-1.5">
          <span className="text-white/80 flex-shrink-0 font-bold">•</span>
          <span className="flex-1">{content}</span>
        </div>
      )
    }
    
    // Handle numbered lists
    if (/^\d+[\.)]\s/.test(trimmed)) {
      return (
        <div key={idx} className="flex gap-2 my-1.5 ml-1">
          <span className="flex-1">{trimmed}</span>
        </div>
      )
    }
    
    // Handle bold text with **text**
    const parts = line.split(/(\*\*[^*]+\*\*)/)
    const formatted = parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="font-semibold text-white">{part.slice(2, -2)}</strong>
      }
      return <span key={i}>{part}</span>
    })
    
    // Empty lines for spacing
    if (!trimmed) {
      return <div key={idx} className="h-2" />
    }
    
    // Regular text
    return <div key={idx} className="my-0.5">{formatted}</div>
  })
}

export default function ChatBot({ isOpen, onClose }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 **Hello! I'm Dishant Rajput's Portfolio Assistant.**\n\nI can help you know Dishant\n\nWhat would you like to know?",
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

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    const currentInput = inputText
    setInputText('')
    setIsTyping(true)

    try {
      // Call the Groq AI API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response from AI')
      }

      const data = await response.json()

      const botResponse: Message = {
        id: messages.length + 2,
        text: data.reply || 'Sorry, I could not generate a response.',
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
    } catch (error) {
      console.error('Chat API Error:', error)
      const errorResponse: Message = {
        id: messages.length + 2,
        text: "I'm sorry, I'm having trouble connecting right now. Please try again in a moment.",
        sender: 'bot',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsTyping(false)
    }
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
      <div className="fixed top-0 right-0 h-screen w-full md:w-[34%] bg-gradient-to-br from-[#4d5361] to-[#000000] shadow-2xl z-50 flex flex-col animate-slideIn">
        {/* Header */}
        <div className="bg-black/30 backdrop-blur-sm border-b border-white/20 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
           
            <img src="/favicon/Untitled_design__5_-removebg-preview.png" alt="Chatbot Icon" className="w-12 h-12 rounded" />
            <div>
              <h2 className="text-xl font-bold text-white tracking-wide" style={{fontFamily: 'Cinzel, serif'}}>Portfolio Assistant</h2>
              <div className="flex items-center gap-2">
                 <span className="text-sm text-gray-300">Ask about Dishant</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 hover:rotate-90 border border-white/20"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-lg ${
                  message.sender === 'user'
                    ? 'bg-white text-black border border-white/30'
                    : 'bg-black/40 text-gray-100 border border-white/10 backdrop-blur-sm'
                }`}
              >
                {message.sender === 'bot' ? (
                  <div className="text-sm leading-relaxed">{formatBotMessage(message.text)}</div>
                ) : (
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                )}
              </div>
            </div>
          ))}

          
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="bg-black/30 backdrop-blur-sm border-t border-white/20 p-5">
          <div className="flex gap-3 items-end">
            <div className="flex-1">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about Dishant..."
                className="w-full scrollbar-hide bg-black/30 border-2 border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-white/40 resize-none transition-all duration-300"
                rows={1}
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="w-12 h-12 bg-white text-black rounded-xl flex items-center justify-center hover:bg-gray-200 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg hover:scale-105 disabled:hover:scale-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
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
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  )
}
