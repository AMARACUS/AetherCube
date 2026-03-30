'use client'

import { WorkspaceLayout } from '@/components/workspace/workspace-layout'
import { AuthForm } from '@/components/auth/auth-form'
import { useAuthStore } from '@/store/auth'
import { WorkspaceSkeleton } from '@/components/workspace/workspace-skeleton'

export default function Home() {
  const { user, isLoading } = useAuthStore()

  if (isLoading) {
    return <WorkspaceSkeleton />
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 p-4">
        <AuthForm />
      </div>
    )
  }

  return <WorkspaceLayout />
}
