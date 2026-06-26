import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Phone, MapPin, Send } from 'lucide-react';

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useGSAP(() => {
    // ScrollTrigger reveal for CTA content
    gsap.fromTo(
      '.cta-reveal',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
      }
    );

    // Floating animation for decorative glowing circles
    gsap.to(glow1Ref.current, {
      x: 30,
      y: -20,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    gsap.to(glow2Ref.current, {
      x: -40,
      y: 30,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Mouse movement interaction for glowing circles
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(glow1Ref.current, {
        x: x * 0.08,
        y: y * 0.08,
        duration: 1.5,
        ease: 'power2.out',
        overwrite: 'auto',
      });

      gsap.to(glow2Ref.current, {
        x: -x * 0.12,
        y: -y * 0.12,
        duration: 2,
        ease: 'power2.out',
        overwrite: 'auto',
      });
    };

    const sectionEl = sectionRef.current;
    if (sectionEl) {
      sectionEl.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (sectionEl) {
        sectionEl.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, { scope: sectionRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 4000);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-28 bg-[#0a0b0d] relative overflow-hidden border-t border-zinc-900"
    >
      {/* Interactive Floating Glowing Shapes */}
      <div
        ref={glow1Ref}
        className="absolute -top-10 -left-10 w-72 h-72 rounded-full bg-gym-accent/5 blur-[80px] pointer-events-none z-0"
      />
      <div
        ref={glow2Ref}
        className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-gym-lime/5 blur-[100px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left panel: Info & Callout */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="cta-reveal text-xs font-display font-extrabold tracking-widest text-gym-accent uppercase block">
                JOIN THE REGIMENT
              </span>
              <h2 className="cta-reveal text-[8vw] sm:text-[6vw] lg:text-[4.5vw] font-syne font-black text-white leading-none uppercase tracking-tighter">
                READY TO <br />
                START?
              </h2>
            </div>
            
            <p className="cta-reveal text-zinc-400 text-sm md:text-base leading-relaxed max-w-md">
              Leave your details below or drop by our facility. Let us discuss your training history, 
              targets, and find the perfect plan to forge your strength.
            </p>

            {/* Quick Contact Links */}
            <div className="cta-reveal space-y-6 pt-4 border-t border-zinc-800/60 max-w-sm">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gym-accent/10 flex items-center justify-center text-gym-accent">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-display uppercase tracking-widest block">PHONE NUMBER</span>
                  <span className="text-sm font-semibold text-white">Coming Soon</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gym-accent/10 flex items-center justify-center text-gym-accent">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-display uppercase tracking-widest block">LOCATION</span>
                  <a 
                    href="https://maps.google.com/?q=PV3G%2BGQX,+Dandi,+Gujarat+396385"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-gym-accent hover:underline"
                  >
                    Dandi, Gujarat 396385, India
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right panel: Modern Contact Form */}
          <div className="lg:col-span-6 cta-reveal">
            <div className="bg-[#121318] border border-zinc-900 rounded-3xl p-8 md:p-10 shadow-2xl relative">
              <h3 className="text-lg md:text-xl font-display font-extrabold text-white tracking-wide mb-6">
                GET IN TOUCH
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] font-display font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full bg-[#0a0b0d] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-all"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-display font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email"
                    className="w-full bg-[#0a0b0d] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-all"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-display font-bold text-zinc-500 uppercase tracking-widest block mb-2">
                    HOW CAN WE HELP?
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your training goals or questions..."
                    className="w-full bg-[#0a0b0d] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-gym-accent focus:ring-1 focus:ring-gym-accent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  data-cursor="submit"
                  className="w-full bg-gym-accent hover:bg-gym-lime text-black py-4 rounded-xl font-display font-extrabold tracking-widest text-xs uppercase flex items-center justify-center gap-2 transition-colors duration-300"
                >
                  <span>{submitted ? 'MESSAGE SENT ✓' : 'SEND DISPATCH'}</span>
                  {!submitted && <Send className="w-4 h-4" />}
                </button>
              </form>

              {submitted && (
                <div className="absolute inset-0 bg-[#121318]/95 rounded-3xl flex flex-col items-center justify-center p-8 text-center transition-all duration-300">
                  <div className="w-16 h-16 bg-gym-accent/15 rounded-full flex items-center justify-center text-gym-accent mb-6 animate-bounce">
                    <Send className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-display font-black text-white uppercase tracking-wider mb-2">
                    DISPATCH RECEIVED
                  </h4>
                  <p className="text-zinc-400 text-sm max-w-xs leading-relaxed">
                    Thank you, {formData.name}. We will review your targets and get in touch with you shortly.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
