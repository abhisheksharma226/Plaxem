"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { SettingsIcon, Bell, Lock, Palette, Globe } from "lucide-react"

export function SettingsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <SettingsIcon className="w-8 h-8 text-primary" />
        <div>
          <h1 className="text-2xl font-bold text-foreground">Settings</h1>
          <p className="text-sm text-muted-foreground">Manage your preferences and account settings</p>
        </div>
      </div>

      <div className="max-w-3xl space-y-4">
        {/* Notifications */}
        <Card className="bg-card border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Receive updates via email</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Daily Reminders</p>
                <p className="text-xs text-muted-foreground">Get reminded to practice daily</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Achievement Alerts</p>
                <p className="text-xs text-muted-foreground">Celebrate your milestones</p>
              </div>
              <Switch />
            </div>
          </div>
        </Card>

        {/* Appearance */}
        <Card className="bg-card border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Appearance</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Dark Mode</p>
                <p className="text-xs text-muted-foreground">Always enabled for premium experience</p>
              </div>
              <Switch checked disabled />
            </div>
          </div>
        </Card>

        {/* Privacy & Security */}
        <Card className="bg-card border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Privacy & Security</h3>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Profile Visibility</p>
                <p className="text-xs text-muted-foreground">Make your progress public</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Data Sync</p>
                <p className="text-xs text-muted-foreground">Sync progress across devices</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="pt-4">
              <Button variant="outline" className="w-full bg-transparent">
                Change Password
              </Button>
            </div>
          </div>
        </Card>

        {/* Language */}
        <Card className="bg-card border-border p-6">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold text-foreground">Language & Region</h3>
          </div>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-foreground mb-2">Language</p>
              <Button variant="outline" className="w-full justify-between bg-transparent">
                English (US)
              </Button>
            </div>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="bg-card border-red-500/20 p-6">
          <h3 className="text-lg font-semibold text-red-500 mb-4">Danger Zone</h3>
          <div className="space-y-3">
            <Button
              variant="outline"
              className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10 bg-transparent"
            >
              Reset All Progress
            </Button>
            <Button
              variant="outline"
              className="w-full border-red-500/50 text-red-500 hover:bg-red-500/10 bg-transparent"
            >
              Delete Account
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
