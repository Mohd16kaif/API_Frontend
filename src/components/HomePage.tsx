import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { HowItWorks } from "@/components/HowItWorks"
import { Features } from "@/components/Features"
import { Pricing } from "@/components/Pricing"
import { Footer } from "@/components/Footer"
import { AuthModal } from "@/components/AuthModal"

interface HomePageProps {
  onLogin: () => void
}

export function HomePage({ onLogin }: HomePageProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false)
    onLogin()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
      <Hero onGetStarted={() => setIsAuthModalOpen(true)} />
      <HowItWorks />
      <Features />
      <Pricing onGetStarted={() => setIsAuthModalOpen(true)} />
      <Footer />
      
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onSuccess={handleAuthSuccess}
      />
    </div>
  )
}