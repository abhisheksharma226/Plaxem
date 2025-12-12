"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { Header } from "@/components/dashboard/header"
import { DashboardOverview } from "@/components/dashboard/pages/overview"
import { CompaniesPage } from "@/components/dashboard/pages/companies"
import { CompanyDetail } from "@/components/dashboard/pages/company-detail"
import { SubjectPage } from "@/components/dashboard/pages/subject-page"
import { DSAPage } from "@/components/dashboard/pages/dsa-page"
import { SQLPage } from "@/components/dashboard/pages/sql-page"
import { AptitudePage } from "@/components/dashboard/pages/aptitude-page"
import { BookmarksPage } from "@/components/dashboard/pages/bookmarks"
import { RevisionPage } from "@/components/dashboard/pages/revision"
import { AlumniPage } from "@/components/dashboard/pages/alumni"
import { ProfilePage } from "@/components/dashboard/pages/profile"
import { SettingsPage } from "@/components/dashboard/pages/settings"
import { useDashboardStore } from "@/lib/store"

export default function DashboardPage() {
  const { currentPage, selectedCompanyId, selectedSubjectId } = useDashboardStore()

  const renderPage = () => {
    if (selectedSubjectId && selectedCompanyId) {
      return <SubjectPage />
    }

    if (selectedCompanyId) {
      return <CompanyDetail />
    }

    switch (currentPage) {
      case "dashboard":
        return <DashboardOverview />
      case "companies":
        return <CompaniesPage />
      case "dsa":
        return <DSAPage />
      case "sql":
        return <SQLPage />
      case "aptitude":
        return <AptitudePage />
      case "bookmarks":
        return <BookmarksPage />
      case "revision":
        return <RevisionPage />
      case "alumni":
        return <AlumniPage />
      case "profile":
        return <ProfilePage />
      case "settings":
        return <SettingsPage />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="flex h-screen bg-black overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden w-full lg:w-auto">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 lg:p-6">{renderPage()}</div>
        </main>
      </div>
    </div>
  )
}
