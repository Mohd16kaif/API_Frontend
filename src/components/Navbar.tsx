import { useState } from "react"
import { Shield, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ThemeToggle"

interface NavbarProps {
  onAuthClick: () => void
}

export function Navbar({ onAuthClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary rounded-lg p-2">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-semibold">API Spend Shield</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-fast">
              Home
            </a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-fast">
              Features
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-fast">
              Pricing
            </a>
            {/* <a href="#docs" className="text-muted-foreground hover:text-foreground transition-fast">
              Docs
            </a> */}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="ghost" onClick={onAuthClick}>
              Login
            </Button>
            <Button onClick={onAuthClick} size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-fast">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-fast">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-fast">
                Pricing
              </a>
              {/* <a href="#docs" className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-fast">
                Docs
              </a> */}
              <div className="flex space-x-2 px-3 py-2">
                <Button variant="ghost" onClick={onAuthClick} className="flex-1">
                  Login
                </Button>
                <Button onClick={onAuthClick} className="flex-1">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}