import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface Question {
  id: string
  title: string
  content: string
  difficulty: "Easy" | "Medium" | "Hard"
  tags: string[]
  companyId?: string
  subjectId: string
  answer?: string
}

export interface Subject {
  id: string
  name: string
  totalQuestions: number
  icon: string
}

export interface Company {
  id: string
  name: string
  logo: string
  difficulty: "Easy" | "Medium" | "Hard"
  totalSubjects: number
}

interface DashboardState {
  // Navigation
  currentPage: string
  selectedCompanyId: string | null
  selectedSubjectId: string | null

  isMobileSidebarOpen: boolean

  // Progress tracking
  completedQuestions: Set<string>
  bookmarkedQuestions: Set<string>
  revisionQueue: Set<string>

  // User data
  userName: string

  // Actions
  setCurrentPage: (page: string) => void
  setSelectedCompany: (id: string | null) => void
  setSelectedSubject: (id: string | null) => void
  toggleMobileSidebar: () => void
  closeMobileSidebar: () => void
  toggleQuestionComplete: (id: string) => void
  toggleBookmark: (id: string) => void
  toggleRevision: (id: string) => void
  isQuestionComplete: (id: string) => boolean
  isBookmarked: (id: string) => boolean
  isInRevision: (id: string) => boolean
}

export const useDashboardStore = create<DashboardState>()(
  persist(
    (set, get) => ({
      currentPage: "dashboard",
      selectedCompanyId: null,
      selectedSubjectId: null,
      isMobileSidebarOpen: false,
      completedQuestions: new Set(),
      bookmarkedQuestions: new Set(),
      revisionQueue: new Set(),
      userName: "Abhishek",

      setCurrentPage: (page) => set({ currentPage: page }),
      setSelectedCompany: (id) => set({ selectedCompanyId: id }),
      setSelectedSubject: (id) => set({ selectedSubjectId: id }),

      toggleMobileSidebar: () => set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
      closeMobileSidebar: () => set({ isMobileSidebarOpen: false }),

      toggleQuestionComplete: (id) =>
        set((state) => {
          const newSet = new Set(state.completedQuestions)
          if (newSet.has(id)) {
            newSet.delete(id)
          } else {
            newSet.add(id)
          }
          return { completedQuestions: newSet }
        }),

      toggleBookmark: (id) =>
        set((state) => {
          const newSet = new Set(state.bookmarkedQuestions)
          if (newSet.has(id)) {
            newSet.delete(id)
          } else {
            newSet.add(id)
          }
          return { bookmarkedQuestions: newSet }
        }),

      toggleRevision: (id) =>
        set((state) => {
          const newSet = new Set(state.revisionQueue)
          if (newSet.has(id)) {
            newSet.delete(id)
          } else {
            newSet.add(id)
          }
          return { revisionQueue: newSet }
        }),

      isQuestionComplete: (id) => get().completedQuestions.has(id),
      isBookmarked: (id) => get().bookmarkedQuestions.has(id),
      isInRevision: (id) => get().revisionQueue.has(id),
    }),
    {
      name: "dashboard-storage",
      partialize: (state) => ({
        completedQuestions: Array.from(state.completedQuestions),
        bookmarkedQuestions: Array.from(state.bookmarkedQuestions),
        revisionQueue: Array.from(state.revisionQueue),
        userName: state.userName,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.completedQuestions = new Set(state.completedQuestions as any)
          state.bookmarkedQuestions = new Set(state.bookmarkedQuestions as any)
          state.revisionQueue = new Set(state.revisionQueue as any)
        }
      },
    },
  ),
)
