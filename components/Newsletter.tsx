import { Send } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(45, 122, 137, 0.95), rgba(10, 37, 64, 0.95)), url(https://images.pexels.com/photos/1001990/pexels-photo-1001990.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      ></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm0 3.657l10.071 10.071-1.414 1.414L32 7.485l-8.656 8.657-1.414-1.414L32 3.657z\' fill=\'%23ffffff\' fill-opacity=\'0.4\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
        <div className="animate-fade-in-up">
          <span className="text-accent text-3xl text-[#FF6B4A] mb-4 block">
            Stay Connected
          </span>

          <h2 className="text-heading text-5xl lg:text-6xl font-black text-white mb-6">
            Stories from the Shore
          </h2>

          <p className="text-xl lg:text-2xl text-[#E8DCC4] leading-relaxed mb-12 max-w-2xl mx-auto">
            Get weekly stories, early access to gear drops, and expert fishing tips delivered straight to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-lg bg-white/95 text-[#0A2540] placeholder-[#2C3338]/50 focus:outline-none focus:ring-4 focus:ring-[#FF6B4A]/50 text-lg"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#FF6B4A] text-white rounded-lg font-semibold hover:bg-[#ff5535] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
              >
                Subscribe
                <Send size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-[#E8DCC4] text-sm mt-4">
              We respect your privacy. Unsubscribe anytime. No spam, just stories.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
