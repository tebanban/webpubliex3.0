import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { SiteLayout } from "./components/layout/SiteLayout";
import AboutPage from "./pages/AboutPage";
import ActualidadPage from "./pages/ActualidadPage";
import AgenciesPage from "./pages/AgenciesPage";
import CaseStudiesPage from "./pages/CaseStudiesPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import InfoTrenesPage from "./pages/InfoTrenesPage";
import LandlordsPage from "./pages/LandlordsPage";
import LocationsPage from "./pages/LocationsPage";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    // Align hash targets below the fixed header after route content renders.
    window.requestAnimationFrame(() => {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));

      if (!target) {
        return;
      }

      const headerHeight =
        document.querySelector("header")?.getBoundingClientRect().height ?? 0;
      const top = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: Math.max(top - headerHeight, 0),
        left: 0,
        behavior: "auto",
      });
    });
  }, [hash, pathname]);

  return null;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/actualidad" element={<ActualidadPage />} />
            <Route path="/agencies" element={<AgenciesPage />} />
            <Route path="/landlords" element={<LandlordsPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/info-trenes" element={<InfoTrenesPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);



