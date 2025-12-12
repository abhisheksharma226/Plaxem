"use client"

import { useState } from "react"
import { alumniData } from "@/lib/mock-data"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Trophy, Award, Briefcase, Calendar } from "lucide-react"

export function AlumniPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Trophy className="w-8 h-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold text-foreground">Alumni Wall</h1>
            <p className="text-sm text-muted-foreground">Celebrating our successful placements</p>
          </div>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-primary hover:bg-primary/90">
          {showForm ? "View Alumni" : "Share Your Success"}
        </Button>
      </div>

      {showForm ? (
        <Card className="bg-card border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Submit Your Placement Details</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Full Name</label>
                <Input placeholder="Your name" className="bg-muted border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Company Name</label>
                <Input placeholder="Company you joined" className="bg-muted border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Package (LPA)</label>
                <Input placeholder="e.g., 12 LPA" className="bg-muted border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Position</label>
                <Input placeholder="e.g., SDE-1" className="bg-muted border-border" />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Year</label>
                <Input placeholder="2024" className="bg-muted border-border" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Your Success Story (Optional)</label>
              <Textarea
                placeholder="Share your journey and tips for juniors..."
                className="bg-muted border-border min-h-[100px]"
              />
            </div>
            <div className="flex gap-3">
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                Submit
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {alumniData.map((alumni, index) => (
            <Card
              key={index}
              className={`bg-card border-border p-6 hover:border-primary/40 transition-all ${
                index < 3 ? "border-primary/40" : ""
              }`}
            >
              {index < 3 && (
                <div className="flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-semibold text-yellow-500">Top Performer</span>
                </div>
              )}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">{alumni.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{alumni.name}</h3>
                  <p className="text-sm text-muted-foreground">{alumni.position}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">{alumni.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground font-medium">{alumni.package}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Batch {alumni.year}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
