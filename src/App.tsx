import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import SobreMi from "./pages/SobreMi";
import Trayectoria from "./pages/Trayectoria";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // <-- 1. AQUÍ LE DECIMOS A REACT DÓNDE ESTÁ EL ARCHIVO DEL FOOTER

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/sobre-mi/" element={<Navigate to="/sobre-mi" replace />} />
          <Route path="/trayectoria" element={<Trayectoria />} />
          <Route path="/trayectoria/" element={<Navigate to="/trayectoria" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer /> {/* <-- 2. Y AQUÍ LE DECIMOS QUE LO DIBUJE AL FINAL DE LA PÁGINA */}
        
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
