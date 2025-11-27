"use client"
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedContent from '@/components/FeaturedContent';
import ProductShowcase from '@/components/ProductShowcase';
import EditorialFeature from '@/components/EditorialFeature';
import CategoryGrid from '@/components/CategoryGrid';
import TrustSection from '@/components/TrustSections';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F3] overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&family=Caveat:wght@400;600;700&display=swap" rel="stylesheet"></link>
      <Navigation />
      <main>
        <Hero />
        <FeaturedContent />
        <ProductShowcase />
        <EditorialFeature />
        <CategoryGrid />
        <TrustSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
