import { useState } from "react";
import { HomePage } from "@/components/HomePage";
import { DashboardLayout } from "@/components/DashboardLayout";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? (
        <DashboardLayout onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <HomePage onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
};

export default Index;
