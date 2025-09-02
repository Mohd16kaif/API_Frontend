import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { LineChart, TrendingUp } from "lucide-react"

export function UsageAnalytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Usage Analytics</h1>
        <p className="text-muted-foreground mt-1">Analyze request volume, success rate, and peak usage</p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="flex justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Total Requests</p>
            <h3 className="text-2xl font-bold">847K</h3>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Success Rate</p>
            <h3 className="text-2xl font-bold text-green-600">99.9%</h3>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-muted-foreground">Top API</p>
            <p className="font-medium">OpenAI</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Peak Usage</p>
            <p className="font-medium">2:00–4:00 PM</p>
          </div>
        </div>

        <div className="mt-4">
          <Progress value={90} />
        </div>

        <Button className="mt-4 w-full">
          <LineChart className="h-4 w-4 mr-2" />
          View Detailed Report
        </Button>
      </Card>
    </div>
  )
}
