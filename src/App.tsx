import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NotificationBanner from "@/components/NotificationBanner";
import Index from "./pages/Index.tsx";
import Tournaments from "./pages/Tournaments.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Albums from "./pages/Albums.tsx";
import Contact from "./pages/Contact.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <NotificationBanner
          type="new-album"
          title="New Album Added"
          message="Field Oorlogsmuseum Overloon — 298 photos now available!"
          actionLabel="View Album"
          actionHref="/albums"
        />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
