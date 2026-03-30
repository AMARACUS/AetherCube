'use client';

import { Code2, FileCode, FolderOpen, LogOut, Plus, Settings, Sparkles, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWorkspaceStore } from '@/store/workspace';
import { useAuthStore } from '@/store/auth';
import { Skeleton } from '@/components/ui/skeleton';
import { createClient } from '@/lib/supabase/client';
import { useRouter } from 'next/navigation';

export function WorkspaceLayout() {
  const { currentProject, isGenerating, projects } = useWorkspaceStore();
  const { user, profile, signOut } = useAuthStore();
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    signOut();
    router.push('/');
  };

  return (
    <div className="flex h-screen bg-gray-950">
      {/* Left Sidebar - Project Explorer */}
      <aside className="w-64 border-r border-gray-700 bg-gray-900 flex flex-col">
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="h-6 w-6 text-blue-500" />
            <h1 className="text-lg font-bold">AetherCube</h1>
          </div>
          <Button className="w-full" variant="default">
            <Plus className="h-4 w-4 mr-2" />
            New Project
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-gray-400 mb-2">
              Projects
            </h2>
            {projects.length === 0 ? (
              <Card className="bg-gray-800">
                <CardContent className="p-4 text-center">
                  <FolderOpen className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                  <p className="text-sm text-gray-400">
                    No projects yet
                  </p>
                </CardContent>
              </Card>
            ) : (
              projects.map((project) => (
                <Card
                  key={project.id}
                  className="cursor-pointer hover:bg-gray-800 transition-colors"
                >
                  <CardHeader className="p-3">
                    <CardTitle className="text-sm">{project.name}</CardTitle>
                    <CardDescription className="text-xs">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))
            )}
          </div>
        </div>

        <div className="p-4 border-t border-gray-700 space-y-2">
          {/* User Info */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800">
            <User className="h-4 w-4 text-gray-400" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">
                {profile?.full_name || user?.email?.split('@')[0] || 'User'}
              </p>
              <p className="text-xs text-gray-400 truncate">
                {user?.email}
              </p>
            </div>
          </div>

          <Button variant="ghost" className="w-full justify-start">
            <Settings className="h-4 w-4 mr-2" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/20"
            onClick={handleSignOut}
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="h-14 border-b border-gray-700 bg-gray-900 px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileCode className="h-5 w-5 text-blue-500" />
            <span className="font-medium">
              {currentProject ? currentProject.name : 'Workspace'}
            </span>
          </div>
          <Button variant="default" disabled={isGenerating}>
            <Sparkles className="h-4 w-4 mr-2" />
            {isGenerating ? 'Generating...' : 'Generate Code'}
          </Button>
        </header>

        {/* Main Editor Area */}
        <div className="flex-1 overflow-hidden">
          {isGenerating ? (
            <div className="h-full flex items-center justify-center p-8">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 animate-pulse text-blue-500" />
                    AI is generating your code...
                  </CardTitle>
                  <CardDescription>
                    This may take a few moments
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="h-full p-8 flex items-center justify-center">
              <Card className="w-full max-w-2xl">
                <CardHeader>
                  <CardTitle>Welcome to AetherCube</CardTitle>
                  <CardDescription>
                    Enterprise-grade Web3 AI Code Generation Platform
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-400">
                    Build production-ready Web3 applications with AI-powered code generation.
                    All generated code follows enterprise security standards with:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      OpenZeppelin-compliant smart contracts
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      ReentrancyGuards and safe math operations
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      Front-running protection
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      95+ Lighthouse performance scores
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500">✓</span>
                      Zero-trust architecture with strict RLS
                    </li>
                  </ul>
                  <div className="pt-4">
                    <Button className="w-full" size="lg">
                      <Plus className="h-5 w-5 mr-2" />
                      Create Your First Project
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
