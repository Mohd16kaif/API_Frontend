import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function BudgetManagement() {
  const used = 2450
  const limit = 5000
  const remaining = limit - used
  const daysLeft = 23

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Budget Management</h1>
        <p className="text-muted-foreground mt-1">
          Control and monitor your API budgets
        </p>
      </div>

      <Card className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold">Monthly Budget</h3>
            <p className="text-sm text-muted-foreground">${used} / ${limit}</p>
          </div>
          <Badge variant="outline" className="text-green-600 bg-green-100">
            Healthy
          </Badge>
        </div>

        <Progress value={(used / limit) * 100} className="h-2" />

        <div className="flex justify-between text-sm">
          <div>
            <p className="text-green-600 text-xl font-bold">${remaining}</p>
            <p className="text-muted-foreground text-xs">Remaining</p>
          </div>
          <div>
            <p className="text-muted-foreground text-xl font-bold">{daysLeft}</p>
            <p className="text-muted-foreground text-xs">Days Left</p>
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">Edit Limits</Button>
          <Button>Add Budget</Button>
        </div>
      </Card>
    </div>
  )
}
