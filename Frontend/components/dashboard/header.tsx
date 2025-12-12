"use client"

import { Search, Bell, User, Building2, FileQuestion, BookOpen, Users, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useDashboardStore } from "@/lib/store"
import { useState, useEffect, useRef } from "react"
import { companies, subjects, generateQuestions, alumniData } from "@/lib/mock-data"
import { cn } from "@/lib/utils"

export function Header() {
  const { userName, setCurrentPage, setSelectedCompany, setSelectedSubject, toggleMobileSidebar } = useDashboardStore()
  const [searchQuery, setSearchQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const searchResults = () => {
    if (!searchQuery.trim()) return null

    const query = searchQuery.toLowerCase()

    const matchedCompanies = companies.filter((company) => company.name.toLowerCase().includes(query))

    const matchedSubjects = subjects.filter((subject) => subject.name.toLowerCase().includes(query))

    const allQuestions = subjects.flatMap((subject) =>
      generateQuestions(subject.id).filter(
        (q) =>
          q.title.toLowerCase().includes(query) ||
          q.content.toLowerCase().includes(query) ||
          q.tags.some((tag) => tag.toLowerCase().includes(query)),
      ),
    )
    const matchedQuestions = allQuestions.slice(0, 5)

    const matchedAlumni = alumniData.filter(
      (alumni) =>
        alumni.name.toLowerCase().includes(query) ||
        alumni.company.toLowerCase().includes(query) ||
        alumni.position.toLowerCase().includes(query),
    )

    return {
      companies: matchedCompanies,
      subjects: matchedSubjects,
      questions: matchedQuestions,
      alumni: matchedAlumni,
    }
  }

  const results = searchResults()
  const hasResults =
    results &&
    (results.companies.length > 0 ||
      results.subjects.length > 0 ||
      results.questions.length > 0 ||
      results.alumni.length > 0)

  const handleResultClick = (type: string, id?: string) => {
    setShowResults(false)
    setSearchQuery("")

    if (type === "company" && id) {
      setSelectedCompany(id)
      setCurrentPage("company-detail")
    } else if (type === "subject" && id) {
      setSelectedSubject(id)
      setCurrentPage("subject")
    } else if (type === "alumni") {
      setCurrentPage("alumni")
    }
  }

  return (
    <header className="h-16 border-b border-border bg-black flex items-center justify-between px-4 lg:px-6">
      <button
        onClick={toggleMobileSidebar}
        className="lg:hidden text-muted-foreground hover:text-foreground transition-colors mr-4"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-xl" ref={searchRef}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search questions, companies, topics..."
            className="pl-10 bg-muted border-border text-foreground placeholder:text-muted-foreground text-sm"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value)
              setShowResults(true)
            }}
            onFocus={() => setShowResults(true)}
          />

          {showResults && searchQuery.trim() && (
            <div className="absolute top-full mt-2 w-full lg:w-[600px] bg-black border border-border rounded-lg shadow-xl max-h-[500px] overflow-y-auto z-50">
              {hasResults ? (
                <div className="p-2">
                  {/* Companies */}
                  {results.companies.length > 0 && (
                    <div className="mb-4">
                      <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        COMPANIES
                      </div>
                      {results.companies.map((company) => (
                        <button
                          key={company.id}
                          onClick={() => handleResultClick("company", company.id)}
                          className="w-full px-3 py-2 text-left hover:bg-muted rounded-md transition-colors flex items-center gap-3"
                        >
                          <span className="text-2xl">{company.logo}</span>
                          <div>
                            <p className="text-sm font-medium text-foreground">{company.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {company.totalSubjects} subjects • {company.difficulty}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Subjects */}
                  {results.subjects.length > 0 && (
                    <div className="mb-4">
                      <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        SUBJECTS
                      </div>
                      {results.subjects.map((subject) => (
                        <button
                          key={subject.id}
                          onClick={() => handleResultClick("subject", subject.id)}
                          className="w-full px-3 py-2 text-left hover:bg-muted rounded-md transition-colors flex items-center gap-3"
                        >
                          <span className="text-2xl">{subject.icon}</span>
                          <div>
                            <p className="text-sm font-medium text-foreground">{subject.name}</p>
                            <p className="text-xs text-muted-foreground">{subject.totalQuestions} questions</p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Questions */}
                  {results.questions.length > 0 && (
                    <div className="mb-4">
                      <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                        <FileQuestion className="w-4 h-4" />
                        QUESTIONS
                      </div>
                      {results.questions.map((question) => (
                        <button
                          key={question.id}
                          onClick={() => handleResultClick("subject", question.subjectId)}
                          className="w-full px-3 py-2 text-left hover:bg-muted rounded-md transition-colors"
                        >
                          <p className="text-sm font-medium text-foreground line-clamp-1">{question.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className={cn(
                                "text-xs px-2 py-0.5 rounded",
                                question.difficulty === "Easy" && "bg-green-500/20 text-green-400",
                                question.difficulty === "Medium" && "bg-yellow-500/20 text-yellow-400",
                                question.difficulty === "Hard" && "bg-red-500/20 text-red-400",
                              )}
                            >
                              {question.difficulty}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              {subjects.find((s) => s.id === question.subjectId)?.name}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Alumni */}
                  {results.alumni.length > 0 && (
                    <div>
                      <div className="px-3 py-2 text-xs font-medium text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        ALUMNI
                      </div>
                      {results.alumni.map((alumni, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleResultClick("alumni")}
                          className="w-full px-3 py-2 text-left hover:bg-muted rounded-md transition-colors"
                        >
                          <p className="text-sm font-medium text-foreground">{alumni.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {alumni.position} at {alumni.company} • {alumni.package}
                          </p>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-8 text-center">
                  <Search className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">No results found</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Try searching for companies, questions, or topics
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2 lg:gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
        </Button>
        <div className="flex items-center gap-2 lg:gap-3 pl-2 lg:pl-4 border-l border-border">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-foreground">{userName}</p>
            <p className="text-xs text-muted-foreground">Student</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
            <User className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </header>
  )
}
