"use client"

import { companies, subjects, generateQuestions } from "@/lib/mock-data"
import { useDashboardStore } from "@/lib/store"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ArrowRight } from "lucide-react"

export function CompanyDetail() {
  const { selectedCompanyId, setSelectedCompany, setSelectedSubject, completedQuestions } = useDashboardStore()

  const company = companies.find((c) => c.id === selectedCompanyId)

  if (!company) return null

  const calculateProgress = (subjectId: string) => {
    const questions = generateQuestions(subjectId, company.id)
    const completed = questions.filter((q) => completedQuestions.has(q.id)).length
    return { completed, total: questions.length, percentage: (completed / questions.length) * 100 }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setSelectedCompany(null)}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-4">
          <div className="text-4xl">{company.logo}</div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{company.name}</h1>
            <p className="text-sm text-muted-foreground">Complete preparation program</p>
          </div>
        </div>
      </div>

      {/* Subjects Grid */}
      <div>
        <h2 className="text-xl font-bold text-foreground mb-4">Subjects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subjects.map((subject) => {
            const progress = calculateProgress(subject.id)
            return (
              <Card
                key={subject.id}
                className="bg-card border-border p-5 hover:border-primary/40 transition-all cursor-pointer group"
                onClick={() => setSelectedSubject(subject.id)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl">{subject.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {subject.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {progress.completed} / {progress.total} completed
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <Progress value={progress.percentage} className="h-2" />
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{progress.percentage.toFixed(0)}% done</span>
                    <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80 h-8">
                      Start <ArrowRight className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
