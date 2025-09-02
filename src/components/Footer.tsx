import { Shield } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"


export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary rounded-lg p-2">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold">API Spend Shield</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Track, control, and optimize your API spending with intelligent insights and real-time monitoring.
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 API Spend Shield. All rights reserved.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-fast">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-fast">Pricing</a></li>
              {/* <li><a href="#docs" className="hover:text-foreground transition-fast">Documentation</a></li> */} <br />
<Tooltip>
  <TooltipTrigger asChild>
    <a 
      href="#" 
      onClick={(e) => e.preventDefault()} 
      className="hover:text-foreground transition-fast cursor-not-allowed"
    >
      API Reference
    </a>
  </TooltipTrigger>
  <TooltipContent>
    <p>Coming soon</p>
  </TooltipContent>
</Tooltip>
            </ul>
          </div>

        {/* Company links */}
<div>
  <h3 className="font-semibold mb-4">Company</h3>
  <ul className="space-y-2 text-sm text-muted-foreground">
    <li>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()} 
            className="hover:text-foreground transition-fast cursor-not-allowed"
          >
            About
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming soon</p>
        </TooltipContent>
      </Tooltip>
    </li>
    <li>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()} 
            className="hover:text-foreground transition-fast cursor-not-allowed"
          >
            Privacy
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming soon</p>
        </TooltipContent>
      </Tooltip>
    </li>
    <li>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()} 
            className="hover:text-foreground transition-fast cursor-not-allowed"
          >
            Terms
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming soon</p>
        </TooltipContent>
      </Tooltip>
    </li>
    <li>
      <Tooltip>
        <TooltipTrigger asChild>
          <a 
            href="#" 
            onClick={(e) => e.preventDefault()} 
            className="hover:text-foreground transition-fast cursor-not-allowed"
          >
            Contact
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>Coming soon</p>
        </TooltipContent>
      </Tooltip>
    </li>
  </ul>
</div>

        </div>
      </div>
    </footer>
  )
}