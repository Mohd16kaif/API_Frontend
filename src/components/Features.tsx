import { 
  BarChart3, 
  Bell, 
  CreditCard, 
  DollarSign, 
  Mail, 
  Users,
  Zap,
  Globe,
  TrendingUp
} from "lucide-react"
import { Card } from "@/components/ui/card"

export function Features() {
  const features = [
    {
      icon: BarChart3,
      title: "Visual Dashboard",
      description: "Real-time charts and graphs showing budget vs usage with beautiful data visualization"
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Get notified when usage exceeds 80%, 100%, or custom thresholds via email and dashboard"
    },
    {
      icon: CreditCard,
      title: "Multi-API Support",
      description: "Track OpenAI, Stripe, Twilio, Razorpay, and 50+ other API services in one place"
    },
    {
      icon: Globe,
      title: "INR/USD Toggle",
      description: "Perfect for global teams with automatic currency conversion and local pricing"
    },
    {
      icon: Mail,
      title: "Email Notifications",
      description: "Receive detailed usage reports and budget alerts directly in your inbox"
    },
    {
      icon: TrendingUp,
      title: "Usage Forecasting",
      description: "Predict future costs based on historical usage patterns and trends"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share budgets and insights with your team members and stakeholders"
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get started in under 5 minutes with our simple onboarding flow"
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Identify expensive API calls and optimize your usage for maximum savings"
    }
  ]

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything You Need to Control API Costs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive tools and insights to help you track, manage, and optimize your API spending across all services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}