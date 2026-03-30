'use client'

import React, { useState } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

interface VibeChatInterfaceProps {
  onSendMessage?: (message: string) => void
}

export function VibeChatInterface({ onSendMessage }: VibeChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Welcome to AetherCube! I&apos;m your Web3 AI builder. What would you like to create today?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [suggestedActions] = useState([
    'Create an ERC20 token',
    'Build an NFT collection',
    'Add wallet connection',
    'Deploy to testnet'
  ])

  const handleSendMessage = () => {
    if (!input.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, newMessage])
    setInput('')

    if (onSendMessage) {
      onSendMessage(input)
    }

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'I&apos;m processing your request. In a production environment, this would call the AI proxy API.',
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiMessage])
    }, 500)
  }

  const handleSuggestedAction = (action: string) => {
    setInput(action)
  }

  return (
    <div className="flex-1 flex flex-col h-screen bg-background">
      {/* Chat Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Vibe Coding Studio</h2>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Describe what you want to build, and I&apos;ll generate it for you
        </p>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-3xl mx-auto">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className={`p-4 ${
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground ml-auto max-w-[80%]'
                      : 'bg-card max-w-[80%]'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Suggested Actions */}
      <div className="px-4 py-2 border-t border-border">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs text-muted-foreground mb-2">Suggested actions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestedActions.map((action, idx) => (
              <Button
                key={idx}
                variant="outline"
                size="sm"
                onClick={() => handleSuggestedAction(action)}
                className="text-xs"
              >
                {action}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-border">
        <div className="max-w-3xl mx-auto flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSendMessage()
              }
            }}
            placeholder="Describe what you want to build..."
            className="flex-1"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
