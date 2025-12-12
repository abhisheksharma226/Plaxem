"use client"

import { useMemo } from "react"
import { generateQuestions } from "@/lib/mock-data"
import { QuestionViewer } from "@/components/dashboard/question-viewer"

export function SQLPage() {
  const questions = useMemo(() => generateQuestions("sql"), [])

  return <QuestionViewer questions={questions} title="SQL Questions" icon="🗄️" />
}
