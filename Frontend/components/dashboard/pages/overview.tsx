"use client"

import { companies } from "@/lib/mock-data"
import { useDashboardStore } from "@/lib/store"
import { BookOpen, CheckCircle2, Target, TrendingUp, ArrowRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function DashboardOverview() {
  const { userName, completedQuestions, setCurrentPage, setSelectedCompany } = useDashboardStore()

  const totalQuestions = 630
  const completedCount = completedQuestions.size
  const progress = (completedCount / totalQuestions) * 100

  const stats = [
    { label: "Topics Completed", value: "12", icon: CheckCircle2, color: "text-green-500" },
    { label: "Questions Solved", value: completedCount.toString(), icon: BookOpen, color: "text-blue-500" },
    { label: "Today's Target", value: "5/10", icon: Target, color: "text-orange-500" },
    { label: "This Week", value: "+24", icon: TrendingUp, color: "text-purple-500" },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">Welcome back, {userName} 👋</h1>
        <p className="text-muted-foreground">Prepare smarter, not harder. Let's crush your placement goals today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-card border-border p-5">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="text-2xl font-bold text-foreground">{stat.value}</span>
            </div>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      {/* Overall Progress */}
      <Card className="bg-card border-border p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Overall Progress</h3>
            <p className="text-sm text-muted-foreground">
              {completedCount} of {totalQuestions} questions completed
            </p>
          </div>
          <span className="text-2xl font-bold text-primary">{progress.toFixed(1)}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </Card>

      {/* Company Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-foreground">Company-Wise Preparation</h2>
          <Button
            variant="ghost"
            onClick={() => setCurrentPage("companies")}
            className="text-primary hover:text-primary/80"
          >
            View All <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {companies.map((company) => (
            <Card
              key={company.id}
              className="bg-card border-border p-5 hover:border-primary/40 transition-all cursor-pointer group"
              onClick={() => {
                setSelectedCompany(company.id)
                setCurrentPage("companies")
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-3xl">{company.logo}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{company.totalSubjects} subjects</p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    company.difficulty === "Easy"
                      ? "bg-green-500/10 text-green-500"
                      : company.difficulty === "Medium"
                        ? "bg-yellow-500/10 text-yellow-500"
                        : "bg-red-500/10 text-red-500"
                  }`}
                >
                  {company.difficulty}
                </span>
                <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80 h-8">
                  Start Prep <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
