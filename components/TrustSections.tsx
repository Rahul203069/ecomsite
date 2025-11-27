import { Star, Instagram } from 'lucide-react';
import { useEffect, useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    location: 'Portland, ME',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'The quality of gear is unmatched. After years of trying different brands, Tidewater & Line is the only one that truly understands what serious anglers need.',
    rating: 5
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    location: 'Cape Cod, MA',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'Not just a gear shop—it\'s a community. The stories inspire me every week, and the equipment has never let me down, even in the harshest conditions.',
    rating: 5
  },
  {
    id: 3,
    name: 'Emily Thompson',
    location: 'Newport, RI',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    quote: 'I learned more from their editorial content than from years of trial and error. The authentic stories from real anglers make all the difference.',
    rating: 5
  }
];

const communityPhotos = [
  'https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/221012/pexels-photo-221012.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/2819134/pexels-photo-2819134.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/3621179/pexels-photo-3621179.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/1374295/pexels-photo-1374295.jpeg?auto=compress&cs=tinysrgb&w=300',
  'https://images.pexels.com/photos/4666751/pexels-photo-4666751.jpeg?auto=compress&cs=tinysrgb&w=300'
];

export default function TrustSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [count, setCount] = useState(0);
  const targetCount = 10000;

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 lg:py-32 bg-[#0A2540] texture-overlay relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent text-2xl text-[#FF6B4A] mb-3 block">
            Join our community
          </span>
          <h2 className="text-heading text-5xl lg:text-6xl font-black text-white mb-6">
            Trusted by Anglers
          </h2>

          <div className="inline-block">
            <div className="text-6xl lg:text-7xl font-black text-[#FF6B4A] mb-2">
              {count.toLocaleString()}+
            </div>
            <p className="text-xl text-[#E8DCC4]">
              Passionate Anglers Trust Us
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="animate-fade-in-up">
            <h3 className="text-heading text-3xl font-bold text-white mb-8">
              What Our Community Says
            </h3>

            <div className="relative h-96 bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-white/10">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-8 lg:inset-12 transition-opacity duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-[#FF6B4A]"
                    />
                    <div>
                      <p className="text-white font-bold text-lg">{testimonial.name}</p>
                      <p className="text-[#E8DCC4] text-sm">{testimonial.location}</p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={20} className="fill-[#FF6B4A] text-[#FF6B4A]" />
                    ))}
                  </div>

                  <blockquote className="text-xl text-white leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-[#FF6B4A] w-8' : 'bg-white/30'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up animate-delayed">
            <h3 className="text-heading text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Instagram size={32} className="text-[#FF6B4A]" />
              Community Catches
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {communityPhotos.map((photo, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative aspect-square rounded-xl overflow-hidden group hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={photo}
                    alt={`Community photo ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#0A2540]/0 group-hover:bg-[#0A2540]/60 transition-all flex items-center justify-center">
                    <Instagram size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#"
              className="inline-block mt-8 px-8 py-4 bg-gradient-to-r from-[#FF6B4A] to-[#ff5535] text-white rounded-lg font-semibold hover:shadow-xl transition-all duration-300"
            >
              Follow @tidewaterandline
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
