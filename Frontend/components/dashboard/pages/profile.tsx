"use client"

import { useDashboardStore } from "@/lib/store"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { User, Mail, Phone, Calendar, Award, Target, TrendingUp } from "lucide-react"

export function ProfilePage() {
  const { userName, completedQuestions, bookmarkedQuestions, revisionQueue } = useDashboardStore()

  const totalQuestions = 630
  const completedCount = completedQuestions.size
  const progress = (completedCount / totalQuestions) * 100

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <User className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-2xl font-bold text-foreground">My Profile</h1>
          <p className="text-sm text-muted-foreground">Manage your account and track your progress</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-card border-border p-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-primary/20 border-2 border-primary/40 flex items-center justify-center mb-4">
                <User className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground mb-1">{userName}</h2>
              <p className="text-sm text-muted-foreground mb-4">Computer Science Student</p>
              <Button className="w-full bg-primary hover:bg-primary/90">Edit Profile</Button>
            </div>
          </Card>

          <Card className="bg-card border-border p-6">
            <h3 className="text-sm font-semibold text-foreground mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">{userName.toLowerCase()}@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span className="text-foreground">Joined Jan 2024</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Stats & Progress */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="bg-card border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Learning Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Overall Completion</span>
                  <span className="text-sm font-bold text-primary">{progress.toFixed(1)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  {completedCount} of {totalQuestions} questions completed
                </p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-card border-border p-5">
              <div className="flex items-center justify-between mb-3">
                <Target className="w-5 h-5 text-blue-500" />
                <span className="text-2xl font-bold text-foreground">{completedCount}</span>
              </div>
              <p className="text-sm text-muted-foreground">Questions Solved</p>
            </Card>
            <Card className="bg-card border-border p-5">
              <div className="flex items-center justify-between mb-3">
                <Award className="w-5 h-5 text-orange-500" />
                <span className="text-2xl font-bold text-foreground">{bookmarkedQuestions.size}</span>
              </div>
              <p className="text-sm text-muted-foreground">Bookmarks</p>
            </Card>
            <Card className="bg-card border-border p-5">
              <div className="flex items-center justify-between mb-3">
                <TrendingUp className="w-5 h-5 text-green-500" />
                <span className="text-2xl font-bold text-foreground">{revisionQueue.size}</span>
              </div>
              <p className="text-sm text-muted-foreground">Revision Queue</p>
            </Card>
          </div>

          <Card className="bg-card border-border p-6">
            <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-foreground">Completed 5 DSA questions</span>
                <span className="text-muted-foreground ml-auto">Today</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-foreground">Added 3 questions to revision</span>
                <span className="text-muted-foreground ml-auto">Yesterday</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-foreground">Bookmarked 2 SQL questions</span>
                <span className="text-muted-foreground ml-auto">2 days ago</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
