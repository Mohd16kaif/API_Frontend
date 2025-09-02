import { useState } from "react"
import { Server, MoreHorizontal, Edit, Trash2, DollarSign, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

interface APICardsProps {
  isINR: boolean
}

export function APICards({ isINR }: APICardsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const apis = [
    {
      id: 1,
      name: "OpenAI GPT-4",
      baseUrl: "https://api.openai.com",
      costPerUnit: isINR ? "₹1.23" : "$0.015",
      monthlyBudget: isINR ? "₹50,000" : "$607",
      monthlyUsage: isINR ? "₹45,678" : "$554",
      utilization: 91,
      status: "warning" as const,
      logo: "🤖"
    },
    {
      id: 2,
      name: "Stripe Payments",
      baseUrl: "https://api.stripe.com",
      costPerUnit: isINR ? "₹2.50" : "$0.03",
      monthlyBudget: isINR ? "₹40,000" : "$486",
      monthlyUsage: isINR ? "₹23,456" : "$285",
      utilization: 59,
      status: "healthy" as const,
      logo: "💳"
    },
    {
      id: 3,
      name: "Twilio SMS",
      baseUrl: "https://api.twilio.com",
      costPerUnit: isINR ? "₹0.85" : "$0.01",
      monthlyBudget: isINR ? "₹15,000" : "$182",
      monthlyUsage: isINR ? "₹12,345" : "$150",
      utilization: 82,
      status: "healthy" as const,
      logo: "📱"
    },
    {
      id: 4,
      name: "Google Maps",
      baseUrl: "https://maps.googleapis.com",
      costPerUnit: isINR ? "₹0.42" : "$0.005",
      monthlyBudget: isINR ? "₹8,000" : "$97",
      monthlyUsage: isINR ? "₹8,901" : "$108",
      utilization: 111,
      status: "danger" as const,
      logo: "🗺️"
    },
    {
      id: 5,
      name: "SendGrid Email",
      baseUrl: "https://api.sendgrid.com",
      costPerUnit: isINR ? "₹0.75" : "$0.009",
      monthlyBudget: isINR ? "₹20,000" : "$243",
      monthlyUsage: isINR ? "₹8,432" : "$102",
      utilization: 42,
      status: "healthy" as const,
      logo: "📧"
    },
    {
      id: 6,
      name: "AWS S3",
      baseUrl: "https://s3.amazonaws.com",
      costPerUnit: isINR ? "₹0.25" : "$0.003",
      monthlyBudget: isINR ? "₹12,000" : "$146",
      monthlyUsage: isINR ? "₹9,876" : "$120",
      utilization: 82,
      status: "healthy" as const,
      logo: "☁️"
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

  const getProgressColor = (status: string) => {
    switch (status) {
      case "healthy": return "bg-success"
      case "warning": return "bg-warning"
      case "danger": return "bg-destructive"
      default: return "bg-primary"
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My APIs</h1>
          <p className="text-muted-foreground mt-1">Manage your API services and monitor usage</p>
        </div>
        <div className="flex items-center space-x-2 mt-4 sm:mt-0">
          <Button variant="outline" size="sm">Import APIs</Button>
          <Button>Add New API</Button>
        </div>
      </div>

      {/* API Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {apis.map((api) => (
          <Card key={api.id} className="p-6 hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start space-x-3">
                <div className="text-2xl">{api.logo}</div>
                <div>
                  <h3 className="font-semibold text-lg">{api.name}</h3>
                  <p className="text-sm text-muted-foreground">{api.baseUrl}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {getStatusBadge(api.status)}
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Usage Stats */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Usage</span>
                <span className="font-medium">{api.monthlyUsage}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly Budget</span>
                <span className="font-medium">{api.monthlyBudget}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Cost per Unit</span>
                <span className="font-medium">{api.costPerUnit}</span>
              </div>

              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Budget Utilization</span>
                  <span className={`font-medium ${getStatusColor(api.status)}`}>
                    {api.utilization}%
                  </span>
                </div>
                <Progress 
                  value={Math.min(api.utilization, 100)} 
                  className="h-2"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-border">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <TrendingUp className="h-4 w-4 mr-1" />
                +12% this month
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Add New API Card */}
      <Card className="p-6 border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4 bg-primary-light rounded-xl flex items-center justify-center">
            <Server className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Add New API</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Connect a new API service to start tracking costs
          </p>
          <Button>Add API Service</Button>
        </div>
      </Card>
    </div>
  )
}