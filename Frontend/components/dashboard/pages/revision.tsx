"use client"

import { useMemo } from "react"
import { generateQuestions, subjects } from "@/lib/mock-data"
import { useDashboardStore } from "@/lib/store"
import { QuestionViewer } from "@/components/dashboard/question-viewer"
import { Card } from "@/components/ui/card"
import { RotateCw } from "lucide-react"

export function RevisionPage() {
  const { revisionQueue } = useDashboardStore()

  const allQuestions = useMemo(() => {
    const questions = []
    for (const subject of subjects) {
      questions.push(...generateQuestions(subject.id))
    }
    return questions
  }, [])

  const revisionList = useMemo(() => {
    return allQuestions.filter((q) => revisionQueue.has(q.id))
  }, [allQuestions, revisionQueue])

  if (revisionList.length === 0) {
    return (
      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <RotateCw className="w-8 h-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">Revision Queue</h1>
        </div>
        <Card className="bg-card border-border p-12 text-center">
          <RotateCw className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No questions in revision</h3>
          <p className="text-muted-foreground">Add questions to your revision queue to practice them later</p>
        </Card>
      </div>
    )
  }

  return <QuestionViewer questions={revisionList} title="Revision Queue" icon="🔄" />
}
