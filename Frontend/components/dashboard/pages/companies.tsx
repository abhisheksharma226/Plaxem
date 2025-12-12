"use client"

import { companies } from "@/lib/mock-data"
import { useDashboardStore } from "@/lib/store"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CompaniesPage() {
  const { setSelectedCompany } = useDashboardStore()

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">Company-Wise Preparation</h1>
        <p className="text-muted-foreground">Select a company to start preparing for their interview process</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {companies.map((company) => (
          <Card
            key={company.id}
            className="bg-card border-border p-6 hover:border-primary/40 transition-all cursor-pointer group"
            onClick={() => setSelectedCompany(company.id)}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{company.logo}</div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {company.name}
                </h3>
                <p className="text-sm text-muted-foreground">{company.totalSubjects} subjects available</p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                  company.difficulty === "Easy"
                    ? "bg-green-500/10 text-green-500"
                    : company.difficulty === "Medium"
                      ? "bg-yellow-500/10 text-yellow-500"
                      : "bg-red-500/10 text-red-500"
                }`}
              >
                {company.difficulty}
              </span>
              <Button size="sm" variant="ghost" className="text-primary hover:text-primary/80">
                Start Preparation <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
