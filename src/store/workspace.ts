import { create } from 'zustand';
import type { Tables } from '@/lib/supabase/types';

type Project = Tables<'projects'>;

interface WorkspaceState {
  currentProject: Project | null;
  isGenerating: boolean;
  generatedCode: string;
  projects: Project[];

  setCurrentProject: (project: Project | null) => void;
  setIsGenerating: (isGenerating: boolean) => void;
  setGeneratedCode: (code: string) => void;
  setProjects: (projects: Project[]) => void;
  addProject: (project: Project) => void;
}

export const useWorkspaceStore = create<WorkspaceState>((set) => ({
  currentProject: null,
  isGenerating: false,
  generatedCode: '',
  projects: [],

  setCurrentProject: (project) => set({ currentProject: project }),
  setIsGenerating: (isGenerating) => set({ isGenerating }),
  setGeneratedCode: (code) => set({ generatedCode: code }),
  setProjects: (projects) => set({ projects }),
  addProject: (project) => set((state) => ({
    projects: [...state.projects, project]
  })),
}));
