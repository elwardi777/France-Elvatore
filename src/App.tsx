import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import Home from "./pages/Home";
import InstallationPage from "./pages/InstallationPage";
import ReparationPage from "./pages/ReparationPage";
import MaintenancePage from "./pages/MaintenancePage";
import ContactPage from "./pages/ContactPage";
import CataloguePage from "./pages/CataloguePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CartPage from "./pages/CartPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./utils/ScrollToTop"; // Import the new component


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <FavoritesProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop /> {/* Add ScrollToTop here */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pieces" element={<CataloguePage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />

              <Route path="/installation" element={<InstallationPage />} />
              <Route path="/reparation" element={<ReparationPage />} />
              <Route path="/maintenance" element={<MaintenancePage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </FavoritesProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;