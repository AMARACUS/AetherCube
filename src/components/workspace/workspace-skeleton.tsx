'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function EditorSkeleton() {
  return (
    <div className="h-full space-y-4 p-4">
      <Skeleton className="h-8 w-48" />
      <Skeleton className="h-[calc(100vh-12rem)] w-full" />
    </div>
  );
}

export function ProjectListSkeleton() {
  return (
    <div className="space-y-3 p-4">
      {[1, 2, 3].map((i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-5 w-32" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export function WorkspaceSkeleton() {
  return (
    <div className="flex h-screen">
      {/* Sidebar Skeleton */}
      <div className="w-64 border-r border-border bg-card p-4">
        <Skeleton className="h-8 w-full mb-4" />
        <ProjectListSkeleton />
      </div>

      {/* Main Editor Area Skeleton */}
      <div className="flex-1">
        <EditorSkeleton />
      </div>
    </div>
  );
}
