import { useState } from "react"
import { X, Mail, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { userService } from "@/services/userService"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: (token: string, user: any) => void
}

export function AuthModal({ isOpen, onClose, onSuccess }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    const formData = new FormData(e.target as HTMLFormElement)
    
    try {
      if (isLogin) {
        // Login flow
        const credentials = {
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        }

        const response = await userService.login(credentials)
        
        if (response.token) {
          // Store token in localStorage
          localStorage.setItem('authToken', response.token)
          localStorage.setItem('user', JSON.stringify(response.user))
          
          // Call success callback with token and user data
          onSuccess(response.token, response.user)
        } else {
          setError("Login failed. Please try again.")
        }
      } else {
        // Register flow
        const userData = {
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        }

        const response = await userService.register(userData)
        
        if (response.token) {
          // Store token in localStorage
          localStorage.setItem('authToken', response.token)
          localStorage.setItem('user', JSON.stringify(response.user))
          
          // Call success callback with token and user data
          onSuccess(response.token, response.user)
        } else {
          setError("Registration failed. Please try again.")
        }
      }
    } catch (error: any) {
      console.error('Authentication error:', error)
      
      // Handle specific error messages from backend
      if (error.message.includes('401')) {
        setError("Invalid email or password")
      } else if (error.message.includes('409')) {
        setError("Email already exists")
      } else if (error.message.includes('400')) {
        setError("Please check your input and try again")
      } else {
        setError("Connection failed. Please check your internet and try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-muted rounded-lg transition-fast"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">
            {isLogin ? "Welcome back" : "Create account"}
          </h2>
          <p className="text-muted-foreground">
            {isLogin ? "Sign in to your account" : "Start tracking your API costs"}
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
            <p className="text-sm text-destructive text-center">{error}</p>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  className="pl-10"
                  required
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className="pl-10"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                className="pl-10"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Please wait..." : (isLogin ? "Sign In" : "Create Account")}
          </Button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-6">
          <p className="text-sm text-muted-foreground">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin)
                setError("") // Clear error when switching
              }}
              className="text-primary hover:underline font-medium"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>

        {/* Social login placeholder */}
        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">
            Google & GitHub sign-in coming soon
          </p>
        </div>
      </Card>
    </div>
  )
}