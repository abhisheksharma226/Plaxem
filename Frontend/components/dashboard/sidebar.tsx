"use client"

import type React from "react"
import { useDashboardStore } from "@/lib/store"
import {
  BookOpen,
  Building2,
  Code,
  Database,
  Brain,
  Trophy,
  Bookmark,
  RotateCw,
  User,
  Settings,
  Crown,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect } from "react"

interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  section?: string
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: <BookOpen className="w-5 h-5" />, section: "Main Library" },
  { id: "companies", label: "Company-Wise Prep", icon: <Building2 className="w-5 h-5" />, section: "Main Library" },
  { id: "dsa", label: "DSA Questions", icon: <Code className="w-5 h-5" />, section: "Main Library" },
  { id: "sql", label: "SQL Questions", icon: <Database className="w-5 h-5" />, section: "Main Library" },
  { id: "aptitude", label: "Aptitude", icon: <Brain className="w-5 h-5" />, section: "Main Library" },
  { id: "bookmarks", label: "My Bookmarks", icon: <Bookmark className="w-5 h-5" />, section: "Student Zone" },
  { id: "revision", label: "Revision Queue", icon: <RotateCw className="w-5 h-5" />, section: "Student Zone" },
  { id: "alumni", label: "Alumni Wall", icon: <Trophy className="w-5 h-5" />, section: "Career" },
  { id: "profile", label: "Profile", icon: <User className="w-5 h-5" />, section: "Account" },
  { id: "settings", label: "Settings", icon: <Settings className="w-5 h-5" />, section: "Account" },
]

export function Sidebar() {
  const {
    currentPage,
    setCurrentPage,
    setSelectedCompany,
    setSelectedSubject,
    userName,
    isMobileSidebarOpen,
    closeMobileSidebar,
  } = useDashboardStore()

  useEffect(() => {
    if (isMobileSidebarOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileSidebarOpen])

  const handleNavClick = (id: string) => {
    setCurrentPage(id)
    setSelectedCompany(null)
    setSelectedSubject(null)
    closeMobileSidebar()
  }

  const sections = ["Main Library", "Student Zone", "Career", "Account"]

  return (
    <>
      {isMobileSidebarOpen && <div className="fixed inset-0 bg-black/80 z-40 lg:hidden" onClick={closeMobileSidebar} />}

      <div
        className={cn(
          "w-64 bg-black border-r border-border flex flex-col h-full",
          "fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 ease-in-out",
          isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0",
        )}
      >
        <div className="p-6 border-b border-border flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">PrepMaster</h1>
          <button
            onClick={closeMobileSidebar}
            className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {sections.map((section) => (
            <div key={section} className="mb-6">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
                {section}
              </h3>
              <div className="space-y-1">
                {navItems
                  .filter((item) => item.section === section)
                  .map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
                        currentPage === item.id
                          ? "bg-primary/10 text-primary border border-primary/20"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground border border-transparent",
                      )}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </button>
                  ))}
              </div>
            </div>
          ))}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-4 border border-primary/20">
            <Crown className="w-6 h-6 text-primary mb-2" />
            <h4 className="text-sm font-semibold text-foreground mb-1">Upgrade to Premium</h4>
            <p className="text-xs text-muted-foreground mb-3">Unlock all features and boost your prep</p>
            <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-medium py-2 rounded-md transition-colors">
              Upgrade Now
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
