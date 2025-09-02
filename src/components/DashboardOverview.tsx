import { useState } from "react"
import { 
  DollarSign, 
  Server, 
  TrendingUp, 
  AlertTriangle,
  Plus,
  Eye,
  MoreHorizontal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

interface DashboardOverviewProps {
  onTabChange: (tab: string) => void
  isINR: boolean
  setIsINR: (value: boolean) => void
}

export function DashboardOverview({ onTabChange, isINR, setIsINR }: DashboardOverviewProps) {

  const stats = [
    {
      title: "Total Monthly Spend",
      value: isINR ? "₹2,34,567" : "$2,847",
      change: "+12%",
      changeType: "increase" as const,
      icon: DollarSign
    },
    {
      title: "Active APIs",
      value: "8",
      change: "+2",
      changeType: "increase" as const,
      icon: Server
    },
    {
      title: "Budget Utilization",
      value: "68%",
      change: "+5%",
      changeType: "increase" as const,
      icon: TrendingUp
    },
    {
      title: "Active Alerts",
      value: "3",
      change: "2 new",
      changeType: "warning" as const,
      icon: AlertTriangle
    }
  ]

  const recentAPIs = [
    {
      name: "OpenAI GPT-4",
      spend: isINR ? "₹45,678" : "$554",
      budget: isINR ? "₹50,000" : "$607",
      utilization: 91,
      status: "warning" as const
    },
    {
      name: "Stripe Payments",
      spend: isINR ? "₹23,456" : "$285",
      budget: isINR ? "₹40,000" : "$486",
      utilization: 59,
      status: "healthy" as const
    },
    {
      name: "Twilio SMS",
      spend: isINR ? "₹12,345" : "$150",
      budget: isINR ? "₹15,000" : "$182",
      utilization: 82,
      status: "healthy" as const
    },
    {
      name: "Google Maps",
      spend: isINR ? "₹8,901" : "$108",
      budget: isINR ? "₹8,000" : "$97",
      utilization: 111,
      status: "danger" as const
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "healthy": return "text-success"
      case "warning": return "text-warning"
      case "danger": return "text-destructive"
      default: return "text-muted-foreground"
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "healthy": return <Badge variant="outline" className="text-success border-success/20 bg-success-light">Healthy</Badge>
      case "warning": return <Badge variant="outline" className="text-warning border-warning/20 bg-warning-light">Warning</Badge>
      case "danger": return <Badge variant="outline" className="text-destructive border-destructive/20 bg-destructive-light">Over Budget</Badge>
      default: return null
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Monitor your API usage and spending</p>
        </div>
        <div className="flex items-center space-x-4 mt-4 sm:mt-0">
          {/* Currency toggle */}
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${!isINR ? 'text-foreground' : 'text-muted-foreground'}`}>USD</span>
            <Switch checked={isINR} onCheckedChange={setIsINR} />
            <span className={`text-sm ${isINR ? 'text-foreground' : 'text-muted-foreground'}`}>INR</span>
          </div>
          <Button onClick={() => onTabChange('apis')}>
            <Plus className="h-4 w-4 mr-2" />
            Add API
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <p className="text-3xl font-bold mt-2">{stat.value}</p>
                <p className={cn(
                  "text-sm mt-1",
                  stat.changeType === "increase" ? "text-success" : 
                  stat.changeType === "warning" ? "text-warning" : "text-muted-foreground"
                )}>
                  {stat.change} vs last month
                </p>
              </div>
              <div className="p-3 bg-primary-light rounded-xl">
                <stat.icon className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* API Usage Overview */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">API Usage Overview</h2>
          <Button variant="outline" onClick={() => onTabChange('apis')}>
            <Eye className="h-4 w-4 mr-2" />
            View All
          </Button>
        </div>

        <div className="space-y-4">
          {recentAPIs.map((api, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-fast">
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h3 className="font-medium">{api.name}</h3>
                  {getStatusBadge(api.status)}
                </div>
                <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                  <span>Spend: {api.spend}</span>
                  <span>Budget: {api.budget}</span>
                  <span className={getStatusColor(api.status)}>
                    {api.utilization}% utilized
                  </span>
                </div>
                {/* Progress bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                  <div 
                    className={cn(
                      "h-2 rounded-full transition-all",
                      api.status === "healthy" ? "bg-success" :
                      api.status === "warning" ? "bg-warning" : "bg-destructive"
                    )}
                    style={{ width: `${Math.min(api.utilization, 100)}%` }}
                  />
                </div>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Add New API</h3>
          <p className="text-sm text-muted-foreground mb-4">Track a new API service and set budgets</p>
          <Button onClick={() => onTabChange('apis')} className="w-full">
            Add API
          </Button>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Log Usage</h3>
          <p className="text-sm text-muted-foreground mb-4">Manually add API usage for tracking</p>
          <Button variant="outline" onClick={() => onTabChange('usage')} className="w-full">
            Log Usage
          </Button>
        </Card>
        
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Set Alert</h3>
          <p className="text-sm text-muted-foreground mb-4">Configure budget alerts and notifications</p>
          <Button variant="outline" onClick={() => onTabChange('alerts')} className="w-full">
            Configure
          </Button>
        </Card>
      </div>
    </div>
  )
}

function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}