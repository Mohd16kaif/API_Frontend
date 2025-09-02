import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HomePage } from "@/components/HomePage";
import { DashboardLayout } from "@/components/DashboardLayout";

const queryClient = new QueryClient();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light" storageKey="api-spend-shield-theme">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {isLoggedIn ? (
            <DashboardLayout onLogout={() => setIsLoggedIn(false)} />
          ) : (
            <HomePage onLogin={() => setIsLoggedIn(true)} />
          )}
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
