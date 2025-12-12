"use client"

import { useMemo } from "react"
import { generateQuestions } from "@/lib/mock-data"
import { QuestionViewer } from "@/components/dashboard/question-viewer"

export function AptitudePage() {
  const questions = useMemo(() => generateQuestions("aptitude"), [])

  return <QuestionViewer questions={questions} title="Aptitude Questions" icon="🧮" />
}
