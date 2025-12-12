"use client"

import { useState, useMemo } from "react"
import { subjects, generateQuestions, companies } from "@/lib/mock-data"
import { useDashboardStore } from "@/lib/store"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronLeft, Search, Bookmark, RotateCw, CheckCircle2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function SubjectPage() {
  const {
    selectedCompanyId,
    selectedSubjectId,
    setSelectedSubject,
    completedQuestions,
    toggleQuestionComplete,
    toggleBookmark,
    toggleRevision,
    isQuestionComplete,
    isBookmarked,
    isInRevision,
  } = useDashboardStore()

  const [searchQuery, setSearchQuery] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState("all")

  const subject = subjects.find((s) => s.id === selectedSubjectId)
  const company = companies.find((c) => c.id === selectedCompanyId)
  const questions = useMemo(
    () => generateQuestions(selectedSubjectId || "", selectedCompanyId),
    [selectedSubjectId, selectedCompanyId],
  )

  const filteredQuestions = useMemo(() => {
    return questions.filter((q) => {
      const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesDifficulty = difficultyFilter === "all" || q.difficulty === difficultyFilter
      return matchesSearch && matchesDifficulty
    })
  }, [questions, searchQuery, difficultyFilter])

  const stats = useMemo(() => {
    const completed = questions.filter((q) => isQuestionComplete(q.id)).length
    const easy = questions.filter((q) => q.difficulty === "Easy" && isQuestionComplete(q.id)).length
    const medium = questions.filter((q) => q.difficulty === "Medium" && isQuestionComplete(q.id)).length
    const hard = questions.filter((q) => q.difficulty === "Hard" && isQuestionComplete(q.id)).length
    return { completed, total: questions.length, easy, medium, hard }
  }, [questions, completedQuestions])

  if (!subject) return null

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => setSelectedSubject(null)}>
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-3">
          <div className="text-3xl">{subject.icon}</div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">{subject.name}</h1>
            {company && <p className="text-sm text-muted-foreground">{company.name} Preparation</p>}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-card border-border p-4">
          <div className="text-2xl font-bold text-foreground mb-1">
            {stats.completed}/{stats.total}
          </div>
          <p className="text-sm text-muted-foreground">Total Progress</p>
          <Progress value={(stats.completed / stats.total) * 100} className="h-1.5 mt-2" />
        </Card>
        <Card className="bg-card border-border p-4">
          <div className="text-2xl font-bold text-green-500 mb-1">{stats.easy}</div>
          <p className="text-sm text-muted-foreground">Easy Completed</p>
        </Card>
        <Card className="bg-card border-border p-4">
          <div className="text-2xl font-bold text-yellow-500 mb-1">{stats.medium}</div>
          <p className="text-sm text-muted-foreground">Medium Completed</p>
        </Card>
        <Card className="bg-card border-border p-4">
          <div className="text-2xl font-bold text-red-500 mb-1">{stats.hard}</div>
          <p className="text-sm text-muted-foreground">Hard Completed</p>
        </Card>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-muted border-border"
          />
        </div>
        <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
          <SelectTrigger className="w-full sm:w-[180px] bg-muted border-border">
            <SelectValue placeholder="All Difficulties" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Difficulties</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Questions List */}
      <div>
        <p className="text-sm text-muted-foreground mb-4">
          Showing {filteredQuestions.length} of {questions.length} questions
        </p>
        <Accordion type="single" collapsible className="space-y-3">
          {filteredQuestions.map((question) => {
            const completed = isQuestionComplete(question.id)
            const bookmarked = isBookmarked(question.id)
            const inRevision = isInRevision(question.id)

            return (
              <AccordionItem key={question.id} value={question.id} className="border-0">
                <Card className={`bg-card border-border ${completed ? "opacity-60" : ""}`}>
                  <AccordionTrigger className="px-5 py-4 hover:no-underline">
                    <div className="flex items-center gap-3 flex-1 text-left">
                      <div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center cursor-pointer ${
                          completed ? "bg-primary border-primary" : "border-muted-foreground"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation()
                          toggleQuestionComplete(question.id)
                        }}
                      >
                        {completed && <CheckCircle2 className="w-4 h-4 text-primary-foreground" />}
                      </div>
                      <div className="flex-1">
                        <h3
                          className={`font-medium ${completed ? "line-through text-muted-foreground" : "text-foreground"}`}
                        >
                          {question.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span
                            className={`text-xs px-2 py-0.5 rounded ${
                              question.difficulty === "Easy"
                                ? "bg-green-500/10 text-green-500"
                                : question.difficulty === "Medium"
                                  ? "bg-yellow-500/10 text-yellow-500"
                                  : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {question.difficulty}
                          </span>
                          {question.tags.map((tag, i) => (
                            <span key={i} className="text-xs text-muted-foreground">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    <div className="space-y-4 pt-4 border-t border-border">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Question:</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{question.content}</p>
                      </div>
                      {question.answer && (
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Answer:</h4>
                          <pre className="text-sm text-muted-foreground leading-relaxed whitespace-pre-wrap bg-muted p-3 rounded">
                            {question.answer}
                          </pre>
                        </div>
                      )}
                      <div className="flex items-center gap-2 pt-2">
                        <Button
                          size="sm"
                          variant={bookmarked ? "default" : "outline"}
                          onClick={() => toggleBookmark(question.id)}
                          className="gap-2"
                        >
                          <Bookmark className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`} />
                          {bookmarked ? "Bookmarked" : "Bookmark"}
                        </Button>
                        <Button
                          size="sm"
                          variant={inRevision ? "default" : "outline"}
                          onClick={() => toggleRevision(question.id)}
                          className="gap-2"
                        >
                          <RotateCw className="w-4 h-4" />
                          {inRevision ? "In Revision" : "Add to Revision"}
                        </Button>
                      </div>
                    </div>
                  </AccordionContent>
                </Card>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </div>
  )
}
