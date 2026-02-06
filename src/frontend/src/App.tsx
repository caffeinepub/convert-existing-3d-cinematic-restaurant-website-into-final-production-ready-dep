import { Toaster } from '@/components/ui/sonner';
import Navbar from './components/layout/Navbar';
import HeroSection from './sections/HeroSection';
import MenuSection from './sections/MenuSection';
import BookingSection from './sections/BookingSection';
import GallerySection from './sections/GallerySection';
import ContactSection from './sections/ContactSection';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <BookingSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
