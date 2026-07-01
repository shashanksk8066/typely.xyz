import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Disclaimer from "./pages/Disclaimer";
import FAQ from "./pages/FAQ";
import TypingGuide from "./pages/TypingGuide";
import NotFound from "./pages/NotFound";
import Academy from "./pages/Academy";
import Article from "./pages/Article";
import Tools from "./pages/Tools";
import EditorialPolicy from "./pages/EditorialPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import WordCounter from "./pages/WordCounter";
import CaseConverter from "./pages/CaseConverter";
import WpmCalculator from "./pages/WpmCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/typing-guide" element={<TypingGuide />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/academy/:slug" element={<Article />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/tools/word-counter" element={<WordCounter />} />
          <Route path="/tools/case-converter" element={<CaseConverter />} />
          <Route path="/tools/wpm-calculator" element={<WpmCalculator />} />
          <Route path="/editorial-policy" element={<EditorialPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
