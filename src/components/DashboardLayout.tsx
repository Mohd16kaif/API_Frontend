import { useState } from "react"
import { DashboardSidebar } from "@/components/DashboardSidebar"
import { DashboardOverview } from "@/components/DashboardOverview"
import { APICards } from "@/components/APICards"
import { BudgetManagement } from "@/components/BudgetManagement"
import { AlertsPage } from "@/components/AlertsPage"
import { UsageAnalytics } from "@/components/UsageAnalytics"
import { PlansBilling } from "@/components/PlansBilling"
import { SettingsPanel } from "@/components/SettingsPanel"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Switch } from "@/components/ui/switch"

interface DashboardLayoutProps {
  onLogout: () => void
}

export function DashboardLayout({ onLogout }: DashboardLayoutProps) {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [isINR, setIsINR] = useState(true)

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardOverview onTabChange={setActiveTab} isINR={isINR} setIsINR={setIsINR} />
      case "apis":
        return <APICards isINR={isINR} />
      // case "usage":
      //   return <div className="p-8">
      //     <h1 className="text-3xl font-bold mb-4">Usage Tracking</h1>
      //     <p className="text-muted-foreground">Usage tracking interface coming soon...</p>
      //   </div>
      case "usage":
  return <UsageAnalytics />

      // case "budgets":
      //   return <div className="p-8">
      //     <h1 className="text-3xl font-bold mb-4">Budget Management</h1>
      //     <p className="text-muted-foreground">Budget management interface coming soon...</p>
      //   </div>
      case "budgets":
  return <BudgetManagement />
      // case "alerts":
      //   return <div className="p-8">
      //     <h1 className="text-3xl font-bold mb-4">Alerts & Notifications</h1>
      //     <p className="text-muted-foreground">Alerts configuration interface coming soon...</p>
      //   </div>
      case "alerts":
  return <AlertsPage />
      // case "billing":
      //   return <div className="p-8">
      //     <h1 className="text-3xl font-bold mb-4">Plans & Billing</h1>
      //     <p className="text-muted-foreground">Billing management interface coming soon...</p>
      //   </div>
      case "billing":
  return <PlansBilling />
      // case "settings":
      //   return <div className="p-8">
      //     <h1 className="text-3xl font-bold mb-4">Settings</h1>
      //     <p className="text-muted-foreground">Settings interface coming soon...</p>
      //   </div>
      case "settings":
  return <SettingsPanel />
      default:
        return <DashboardOverview onTabChange={setActiveTab} isINR={isINR} setIsINR={setIsINR} />
    }
  }

  return (
    <div className="flex min-h-screen bg-background">
      <DashboardSidebar
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onLogout={onLogout}
      />
      
      <div className="flex-1 flex flex-col">
        {/* Top bar */}
        <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex items-center justify-between px-6 py-4">
            <div />
            <div className="flex items-center space-x-4">
              {/* Currency Toggle */}
              <div className="flex items-center space-x-2">
                <span className={`text-sm ${!isINR ? 'text-foreground' : 'text-muted-foreground'}`}>USD</span>
                <Switch checked={isINR} onCheckedChange={setIsINR} />
                <span className={`text-sm ${isINR ? 'text-foreground' : 'text-muted-foreground'}`}>INR</span>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>
        
        {/* Main content */}
        <main className="flex-1 p-8 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}