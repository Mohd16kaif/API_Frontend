import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, IndianRupee, Banknote, Wallet } from "lucide-react"

export function PlansBilling() {
  const plans = [
    {
      id: 1,
      name: "Starter",
      priceUSD: "$19/month",
      priceINR: "₹1,599/month",
      features: ["Track up to 3 APIs", "Basic alerts", "Email support"],
      recommended: false,
    },
    {
      id: 2,
      name: "Pro",
      priceUSD: "$49/month",
      priceINR: "₹3,999/month",
      features: ["Up to 10 APIs", "Custom thresholds", "Slack alerts", "Priority support"],
      recommended: true,
    },
    {
      id: 3,
      name: "Enterprise",
      priceUSD: "Custom",
      priceINR: "Custom",
      features: ["Unlimited APIs", "Dedicated manager", "Custom billing", "SLAs"],
      recommended: false,
    }
  ]

  const paymentMethods = [
    { name: "PayPal", icon: <CreditCard className="h-4 w-4 mr-2" /> },
    { name: "Razorpay", icon: <Wallet className="h-4 w-4 mr-2" /> },
    { name: "UPI", icon: <IndianRupee className="h-4 w-4 mr-2" /> },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Plans & Billing</h1>
        <p className="text-muted-foreground mt-1">Upgrade, manage, or change your subscription plan</p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <Card key={plan.id} className="p-6 space-y-4 relative hover:shadow-lg">
            {plan.recommended && (
              <Badge className="absolute top-4 right-4 bg-green-100 text-green-700">Most Popular</Badge>
            )}
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="text-muted-foreground text-sm">{plan.priceUSD} / {plan.priceINR}</p>
            <ul className="text-sm space-y-2 list-disc list-inside mt-4 text-muted-foreground">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <Button className="mt-4 w-full">Choose Plan</Button>
          </Card>
        ))}
      </div>

      {/* Payment Methods */}
      <div>
        <h2 className="text-xl font-semibold mt-6 mb-2">Supported Payment Methods</h2>
        <div className="flex gap-4 flex-wrap">
          {paymentMethods.map((method) => (
            <Card key={method.name} className="p-4 flex items-center gap-2">
              {method.icon}
              <span>{method.name}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Billing History */}
      <div>
        <h2 className="text-xl font-semibold mt-6 mb-2">Billing History</h2>
        <Card className="p-4 text-sm text-muted-foreground">
          <p>No past invoices yet. Once you upgrade a plan, invoices will appear here.</p>
        </Card>
      </div>
    </div>
  )
}
