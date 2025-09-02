import { Plus, TrendingUp, Shield } from "lucide-react"
import { Card } from "@/components/ui/card"

export function HowItWorks() {
  const steps = [
    {
      icon: Plus,
      title: "Connect or Add APIs",
      description: "Import usage data automatically or add API costs manually. Support for OpenAI, Stripe, Twilio, and 50+ more services.",
      color: "text-primary",
      bgColor: "bg-primary-light"
    },
    {
      icon: TrendingUp,
      title: "Track Real-time Spend",
      description: "Monitor usage patterns, set budget alerts, and get detailed analytics with INR/USD support for global teams.",
      color: "text-success",
      bgColor: "bg-success-light"
    },
    {
      icon: Shield,
      title: "Stay Under Budget",
      description: "Receive smart alerts, forecast spending, and generate reports to optimize your API costs effectively.",
      color: "text-warning",
      bgColor: "bg-warning-light"
    }
  ]

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get up and running in minutes with our simple 3-step process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative p-8 text-center hover:shadow-md transition-all duration-300">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                {index + 1}
              </div>
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor} mb-6 mt-4`}>
                <step.icon className={`h-8 w-8 ${step.color}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}