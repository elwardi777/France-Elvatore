// src/App.tsx
import React, { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import InstallationPage from "./pages/InstallationPage";
import ReparationPage from "./pages/ReparationPage";
import MaintenancePage from "./pages/MaintenancePage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./utils/ScrollToTop";
import PiecesPage from "./pages/PiecesPage";

const queryClient = new QueryClient();

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <video
        src="/WhatsApp Vidéo 2025-07-18 à 20.55.22_42a2ea7d.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        onEnded={onFinish}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
};

const AppRoutes = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pieces" element={<PiecesPage />} />
      <Route path="/installation" element={<InstallationPage />} />
      <Route path="/reparation" element={<ReparationPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <AppRoutes />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
