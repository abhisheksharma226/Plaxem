"use client"

import { useMemo } from "react"
import { generateQuestions } from "@/lib/mock-data"
import { QuestionViewer } from "@/components/dashboard/question-viewer"

export function DSAPage() {
  const questions = useMemo(() => generateQuestions("dsa"), [])

  return <QuestionViewer questions={questions} title="DSA Questions" icon="🧩" />
}
