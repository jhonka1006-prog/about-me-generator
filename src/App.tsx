import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import SobreMi from "./pages/SobreMi";
import Trayectoria from "./pages/Trayectoria";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar"; // <-- IMPORTAMOS TU NUEVO MENÚ

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar /> {/* <-- AÑADIMOS EL MENÚ AQUÍ, FUERA DE LAS RUTAS */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre-mi" element={<SobreMi />} />
          <Route path="/sobre-mi/" element={<Navigate to="/sobre-mi" replace />} />
          <Route path="/trayectoria" element={<Trayectoria />} />
          <Route path="/trayectoria/" element={<Navigate to="/trayectoria" replace />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
