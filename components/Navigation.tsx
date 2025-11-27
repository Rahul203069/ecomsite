import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-filter backdrop-blur-md border-gray-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-12">
            <a href="/" className="flex items-center gap-3 group">
              {/* REMOVED 'hidden' CLASS BELOW */}
              <span className="text-heading text-2xl font-bold text-[#0A2540]">
                DOWN THE COVE
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-8">
              <a href="#stories" className="text-[#2C3338] hover:text-[#2D7A89] transition-colors relative group">
                <span>Stories</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#2D7A89]"></span>
              </a>
              <a href="#gear" className="text-[#2C3338] hover:text-[#2D7A89] transition-colors relative group">
                <span>Gear</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#2D7A89]"></span>
              </a>
              <a href="#categories" className="text-[#2C3338] hover:text-[#2D7A89] transition-colors relative group">
                <span>Categories</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#2D7A89]"></span>
              </a>
              <a href="#about" className="text-[#2C3338] hover:text-[#2D7A89] transition-colors relative group">
                <span>About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 bg-[#2D7A89]"></span>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-[#2C3338] hover:text-[#2D7A89] transition-colors" aria-label="Search">
              <Search size={22} />
            </button>
            <button className="text-[#2C3338] hover:text-[#2D7A89] transition-colors relative" aria-label="Shopping cart">
              <ShoppingCart size={22} />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF6B4A] rounded-full text-white text-xs flex items-center justify-center">
                0
              </span>
            </button>
            <button
              className="lg:hidden text-[#2C3338] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t animate-fade-in-up bg-white/95 border-[#0A2540]/10">
          <div className="px-6 py-8 space-y-6">
            <a href="#stories" className="block text-2xl text-heading font-bold text-[#0A2540] hover:text-[#2D7A89] transition-colors">
              Stories
            </a>
            <a href="#gear" className="block text-2xl text-heading font-bold text-[#0A2540] hover:text-[#2D7A89] transition-colors">
              Gear
            </a>
            <a href="#categories" className="block text-2xl text-heading font-bold text-[#0A2540] hover:text-[#2D7A89] transition-colors">
              Categories
            </a>
            <a href="#about" className="block text-2xl text-heading font-bold text-[#0A2540] hover:text-[#2D7A89] transition-colors">
              About
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}