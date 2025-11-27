import { ArrowRight } from 'lucide-react';

export default function EditorialFeature() {
  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(10, 37, 64, 0.85), rgba(45, 122, 137, 0.75)), url(https://images.pexels.com/photos/1374295/pexels-photo-1374295.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      ></div>

      <svg
        className="absolute top-0 left-0 w-full h-24 text-[#FAF8F3]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0 C300,60 900,60 1200,0 L1200,120 L0,120 Z"
          fill="currentColor"
        ></path>
      </svg>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-4xl animate-fade-in-up">
          <span className="text-accent text-3xl text-[#FF6B4A] mb-4 block">
            Featured Story
          </span>

          <h2 className="text-heading text-5xl lg:text-7xl font-black text-white mb-8 leading-[1.1]">
            The Art of Waiting: Lessons from a Lifetime on the Water
          </h2>

          <div className="flex items-center gap-4 mb-8">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Author"
              className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
            />
            <div>
              <p className="text-white font-semibold text-lg">Captain James Morrison</p>
              <p className="text-[#E8DCC4]">Veteran Angler & Guide</p>
            </div>
          </div>

          <p className="text-xl lg:text-2xl text-[#E8DCC4] leading-relaxed mb-8 max-w-3xl">
            After 40 years of guiding fishermen through New England's most challenging waters,
            I've learned that the best catches aren't always measured in pounds. Sometimes,
            they're measured in patience, connection, and the stories we carry home.
          </p>

          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6B4A] text-white rounded-lg font-semibold hover:bg-[#ff5535] transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Read Full Story
            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-24 text-[#FAF8F3]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,120 C300,60 900,60 1200,120 L1200,0 L0,0 Z"
          fill="currentColor"
        ></path>
      </svg>
    </section>
  );
}
