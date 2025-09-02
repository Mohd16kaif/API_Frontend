import { useState } from "react"
import { Check, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"

interface PricingProps {
  onGetStarted: () => void
}

export function Pricing({ onGetStarted }: PricingProps) {
  const [isINR, setIsINR] = useState(true)

  const plans = [
    {
      name: "Free",
      description: "Perfect for individual developers",
      price: { inr: "₹0", usd: "$0" },
      period: "forever",
      features: [
        "Track up to 3 APIs",
        "Basic usage alerts",
        "Monthly reports",
        "Email notifications",
        "7-day usage history"
      ],
      popular: false,
      buttonText: "Get Started",
      buttonVariant: "outline" as const
    },
    {
      name: "Pro",
      description: "For growing teams and startups",
      price: { inr: "₹799", usd: "$12" },
      period: "month",
      features: [
        "Unlimited APIs",
        "Advanced alerts & forecasting",
        "Real-time charts & analytics",
        "INR/USD currency toggle",
        "30-day usage history",
        "Team collaboration",
        "Priority support"
      ],
      popular: true,
      buttonText: "Start Pro Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Team",
      description: "For larger organizations",
      price: { inr: "₹2,499", usd: "$35" },
      period: "month",
      features: [
        "Everything in Pro",
        "Advanced team management",
        "Custom usage reports",
        "API usage forecasting",
        "Slack/Discord integrations",
        "90-day usage history",
        "Dedicated support",
        "Custom integrations"
      ],
      popular: false,
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the plan that fits your needs. Start free and upgrade as you grow.
          </p>
          
          {/* Currency Toggle */}
          <div className="flex items-center justify-center space-x-3">
            <span className={`text-sm ${!isINR ? 'text-foreground' : 'text-muted-foreground'}`}>USD</span>
            <Switch checked={isINR} onCheckedChange={setIsINR} />
            <span className={`text-sm ${isINR ? 'text-foreground' : 'text-muted-foreground'}`}>INR</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative p-8 ${plan.popular ? 'border-primary shadow-brand' : ''} hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold">
                    {isINR ? plan.price.inr : plan.price.usd}
                  </span>
                  <span className="text-muted-foreground">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.buttonVariant}
                className="w-full"
                onClick={onGetStarted}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Payment methods */}
        <div className="text-center mt-12 text-muted-foreground">
          <p className="mb-2">Secure payments powered by</p>
          <div className="flex items-center justify-center space-x-8">
            <span className="font-semibold">Razorpay</span>
            <span className="text-gray-300">•</span>
            <span className="font-semibold">Stripe</span>
          </div>
        </div>
      </div>
    </section>
  )
}