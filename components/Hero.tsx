import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Scenic ocean view with waves and coastal landscape"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(10, 37, 64, 0.85) 0%, rgba(45, 122, 137, 0.6) 50%, rgba(10, 37, 64, 0.4) 100%), url(https://images.pexels.com/photos/349727/pexels-photo-349727.jpeg?cs=srgb&dl=fishing-sea-dawn-349727.jpg&fm=jpg)',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A2540]/20"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <header className="animate-fade-in-up">
            <div className="backdrop-blur-md bg-white/90 p-10 lg:p-14 rounded-3xl max-w-2xl shadow-2xl border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-[#FF6B4A]"></div>
                <span className="text-sm font-bold tracking-widest text-[#FF6B4A] uppercase">
                  Est. 2024
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-[#0A2540] mb-6 leading-[1.05] tracking-tight">
                Where the Ocean<br />
                <span className="text-[#2D7A89]">Meets </span>
                <span className="text-[#2D7A89]">Obsession</span>
              </h1>

              <p className="text-lg lg:text-xl text-[#2C3338]/90 leading-relaxed mb-10 max-w-xl font-light">
                Authentic stories from passionate anglers and expertly curated gear for those who live and breathe the coastal lifestyle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#stories"
                  className="group px-8 py-4 bg-[#0A2540] text-white rounded-xl font-semibold hover:bg-[#2D7A89] transition-all duration-300 text-center shadow-lg hover:shadow-2xl hover:scale-105 transform"
                >
                  <span className="flex items-center justify-center gap-2">
                    Explore Stories
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </a>
                <a
                  href="#gear"
                  className="group px-8 py-4 bg-[#FF6B4A] text-white rounded-xl font-semibold hover:bg-[#ff5535] transition-all duration-300 shadow-lg hover:shadow-2xl text-center hover:scale-105 transform"
                >
                  <span className="flex items-center justify-center gap-2">
                    Shop Gear
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </a>
              </div>
            </div>
          </header>
        </div>
      </div>

      <a href="#stories" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group" aria-label="Scroll to content">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/90 text-sm font-medium tracking-wide group-hover:text-white transition-colors">Scroll</span>
          <ChevronDown size={28} className="text-white/90 group-hover:text-white transition-colors" />
        </div>
      </a>
    </section>
  );
}