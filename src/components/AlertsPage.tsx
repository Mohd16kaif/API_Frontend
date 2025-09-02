import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AlertTriangle, Bell } from "lucide-react"

export function AlertsPage() {
  const alerts = [
    {
      id: 1,
      api: "OpenAI API",
      message: "95% budget used",
      level: "critical" as const,
    },
    {
      id: 2,
      api: "Stripe API",
      message: "Unusual spike detected",
      level: "warning" as const,
    },
    {
      id: 3,
      api: "AWS API",
      message: "Error rate increased",
      level: "info" as const,
    },
  ]

  const getBadge = (level: string) => {
    switch (level) {
      case "critical":
        return <Badge className="bg-red-100 text-red-700">Critical</Badge>
      case "warning":
        return <Badge className="bg-yellow-100 text-yellow-700">Warning</Badge>
      case "info":
        return <Badge className="bg-blue-100 text-blue-700">Info</Badge>
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Alerts & Notifications</h1>
        <p className="text-muted-foreground mt-1">Monitor thresholds, spikes, and budget limits</p>
      </div>

      <div className="space-y-4">
        {alerts.map((alert) => (
          <Card key={alert.id} className="p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <AlertTriangle className="text-orange-500" />
              <div>
                <p className="font-medium">{alert.api}</p>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
              </div>
            </div>
            {getBadge(alert.level)}
          </Card>
        ))}
      </div>

      <div className="flex gap-2 mt-6">
        <Button variant="outline">Configure Alerts</Button>
        <Button>View All Activity</Button>
      </div>
    </div>
  )
}
