'use client'

import React from 'react'
import { Monitor, Code, Eye } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Card } from '@/components/ui/card'

interface RightSidebarProps {
  preview?: string
}

export function RightSidebar({ preview }: RightSidebarProps) {
  const [activeTab, setActiveTab] = React.useState<'preview' | 'code'>('preview')

  return (
    <div className="w-96 border-l border-border bg-card flex flex-col h-screen">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Button
            variant={activeTab === 'preview' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('preview')}
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-2" />
            Preview
          </Button>
          <Button
            variant={activeTab === 'code' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setActiveTab('code')}
            className="flex-1"
          >
            <Code className="h-4 w-4 mr-2" />
            Code
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        {activeTab === 'preview' ? (
          <div className="space-y-4">
            <Card className="p-4 bg-background">
              <div className="flex items-center justify-center h-64 text-muted-foreground">
                <div className="text-center">
                  <Monitor className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p className="text-sm">Live preview will appear here</p>
                </div>
              </div>
            </Card>

            <div className="space-y-2">
              <h3 className="text-sm font-semibold">Deployment Status</h3>
              <Card className="p-3">
                <p className="text-sm text-muted-foreground">No deployments yet</p>
              </Card>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <Card className="p-4 bg-background">
              <pre className="text-xs text-muted-foreground">
                {preview || '// Generated code will appear here'}
              </pre>
            </Card>
          </div>
        )}
      </ScrollArea>
    </div>
  )
}
