'use client'

import React from 'react'
import { FileCode2, Settings, FolderOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface Project {
  id: string
  name: string
}

interface LeftSidebarProps {
  projects?: Project[]
}

export function LeftSidebar({ projects = [] }: LeftSidebarProps) {
  return (
    <div className="w-64 border-r border-border bg-card flex flex-col h-screen">
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <FileCode2 className="h-5 w-5 text-primary-foreground" />
          </div>
          <h1 className="text-lg font-bold">AetherCube</h1>
        </div>
      </div>

      <div className="p-4 space-y-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-full justify-start gap-2">
                <FolderOpen className="h-4 w-4" />
                New Project
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Create a new Web3 project</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <ScrollArea className="flex-1 px-4">
        <div className="space-y-2 pb-4">
          <h2 className="text-sm font-semibold text-muted-foreground mb-2">Your Projects</h2>
          {projects.length === 0 ? (
            <p className="text-sm text-muted-foreground">No projects yet</p>
          ) : (
            projects.map((project: Project) => (
              <Button key={project.id} variant="ghost" className="w-full justify-start">
                {project.name}
              </Button>
            ))
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
      </div>
    </div>
  )
}
