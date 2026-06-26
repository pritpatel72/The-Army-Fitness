import React, { useState } from 'react';
import { ArrowRight, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] border-t border-zinc-900 pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-16 border-b border-zinc-900">
          {/* Brand section */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-6">
                <img 
                  src="/logo.png" 
                  alt="The Army Fitness Logo" 
                  className="h-12 w-auto object-contain brightness-90"
                />
              </div>
              <p className="text-zinc-400 text-sm max-w-sm leading-relaxed mb-8">
                Building strength, discipline, and a healthy lifestyle in Dandi, Gujarat. 
                Join us to push your limits and forge a better version of yourself.
              </p>
            </div>
            
            {/* Social Grid */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gym-accent hover:border-gym-accent transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="view"
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gym-accent hover:border-gym-accent transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href="https://maps.google.com/?q=PV3G%2BGQX,+Dandi,+Gujarat+396385"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="map"
                className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-gym-accent hover:border-gym-accent transition-colors"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Contact / Location Details */}
          <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4">
            <div>
              <h4 className="text-white font-display font-bold text-xs tracking-widest uppercase mb-4 text-gym-accent">
                CONTACT
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span>Coming Soon</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                  <a 
                    href="https://maps.google.com/?q=PV3G%2BGQX,+Dandi,+Gujarat+396385" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-zinc-200"
                  >
                    Dandi, Gujarat 396385, India
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-display font-bold text-xs tracking-widest uppercase mb-4 text-gym-accent">
                HOURS
              </h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-zinc-600 shrink-0" />
                  <span>Coming Soon</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter section */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-display font-bold text-xs tracking-widest uppercase mb-4 text-gym-accent">
              NEWSLETTER
            </h4>
            <p className="text-zinc-400 text-xs leading-relaxed mb-4">
              Get notified of community training events, fitness camps, and gym updates.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                required
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#121318] border border-zinc-800 rounded-full px-5 py-3 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-all"
              />
              <button
                type="submit"
                data-cursor="send"
                className="absolute right-1.5 top-1.5 bg-gym-accent hover:bg-gym-lime text-black w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              >
                {submitted ? (
                  <span className="text-[10px] font-bold">✓</span>
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </button>
            </form>
            {submitted && (
              <p className="text-gym-accent text-xs mt-2 transition-opacity duration-300">
                Thank you! You've been subscribed.
              </p>
            )}
          </div>
        </div>

        {/* Big brand text behind copyright */}
        <div className="pt-16 pb-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-xs order-2 md:order-1">
            © {new Date().getFullYear()} THE ARMY FITNESS. ALL RIGHTS RESERVED.
          </p>
          <button
            onClick={handleScrollToTop}
            data-cursor="top"
            className="text-xs font-display tracking-widest text-zinc-500 hover:text-gym-accent uppercase transition-colors order-1 md:order-2"
          >
            BACK TO TOP ↑
          </button>
        </div>
      </div>
      
      {/* Massive subtle background typography */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 select-none pointer-events-none opacity-[0.015] whitespace-nowrap">
        <span className="text-[18vw] font-serif font-black tracking-tighter italic text-white">THE ARMY</span>
      </div>
    </footer>
  );
}
