import { Facebook, Instagram, Twitter, Mail, Anchor } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-white relative" itemScope itemType="https://schema.org/Organization">
      <svg
        className="w-full h-12 text-[#0A2540]"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        style={{ transform: 'translateY(-1px)' }}
      >
        <path
          d="M0,20 Q300,0 600,20 T1200,20 L1200,40 L0,40 Z"
          fill="currentColor"
        ></path>
      </svg>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Anchor size={32} className="text-[#FF6B4A]" />
              <span className="text-heading text-2xl font-bold" itemProp="name">Tidewater & Line</span>
            </div>
            <p className="text-[#E8DCC4] leading-relaxed mb-6" itemProp="description">
              Where authentic coastal stories meet premium fishing gear for passionate anglers.
            </p>
            <meta itemProp="url" content="https://tidewaterandline.com" />
            <meta itemProp="email" content="hello@tidewaterandline.com" />
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FF6B4A] rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FF6B4A] rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FF6B4A] rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 hover:bg-[#FF6B4A] rounded-full flex items-center justify-center transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <nav>
            <h3 className="text-heading text-xl font-bold mb-6">Shop</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Saltwater Fishing</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Fly Fishing</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Surf Casting</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Coastal Camping</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">All Products</a></li>
            </ul>
          </nav>

          <nav>
            <h3 className="text-heading text-xl font-bold mb-6">Stories</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Featured Stories</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Fishing Techniques</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Gear Guides</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Conservation</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Community</a></li>
            </ul>
          </nav>

          <nav>
            <h3 className="text-heading text-xl font-bold mb-6">Connect</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Contact</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Ambassadors</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#E8DCC4] hover:text-[#FF6B4A] transition-colors">Press Kit</a></li>
            </ul>
          </nav>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-[#E8DCC4]">
              <a href="#" className="hover:text-[#FF6B4A] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#FF6B4A] transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-[#FF6B4A] transition-colors">Shipping Policy</a>
              <a href="#" className="hover:text-[#FF6B4A] transition-colors">Returns</a>
            </div>

            <p className="text-sm text-[#E8DCC4]">
              © {currentYear} Tidewater & Line. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
