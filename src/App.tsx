import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./contexts/StoreContext";
import Index from "./pages/Index";
import Cosmetics from "./pages/Cosmetics";
import Clothes from "./pages/Clothes";
import Shoes from "./pages/Shoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cosmetics" element={<Cosmetics />} />
            <Route path="/clothes" element={<Clothes />} />
            <Route path="/shoes" element={<Shoes />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </StoreProvider>
  </QueryClientProvider>
);

export default App;
