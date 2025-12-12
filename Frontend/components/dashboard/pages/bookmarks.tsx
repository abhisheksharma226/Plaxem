"use client"

import { useMemo } from "react"
import { generateQuestions, subjects } from "@/lib/mock-data"
import { useDashboardStore } from "@/lib/store"
import { QuestionViewer } from "@/components/dashboard/question-viewer"
import { Card } from "@/components/ui/card"
import { Bookmark } from "lucide-react"

export function BookmarksPage() {
  const { bookmarkedQuestions } = useDashboardStore()

  const allQuestions = useMemo(() => {
    const questions = []
    for (const subject of subjects) {
      questions.push(...generateQuestions(subject.id))
    }
    return questions
  }, [])

  const bookmarkedList = useMemo(() => {
    return allQuestions.filter((q) => bookmarkedQuestions.has(q.id))
  }, [allQuestions, bookmarkedQuestions])

  if (bookmarkedList.length === 0) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <Bookmark className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">My Bookmarks</h1>
        </div>
        <Card className="bg-card border-border p-12 text-center">
          <Bookmark className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No bookmarks yet</h3>
          <p className="text-muted-foreground">Bookmark questions to save them for later review</p>
        </Card>
      </div>
    )
  }

  return <QuestionViewer questions={bookmarkedList} title="My Bookmarks" icon="🔖" />
}
