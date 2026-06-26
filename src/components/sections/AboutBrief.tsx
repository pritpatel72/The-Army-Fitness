import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Target, Trophy, Users } from 'lucide-react';

export default function AboutBrief() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const ratingRef = useRef<HTMLSpanElement>(null);
  const reviewsRef = useRef<HTMLSpanElement>(null);
  const commitRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const ratingObj = { value: 0 };
    const reviewsObj = { value: 0 };
    const commitObj = { value: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
      },
    });

    tl.to(ratingObj, {
      value: 5.0,
      duration: 1.5,
      ease: 'power2.out',
      onUpdate: () => {
        if (ratingRef.current) {
          ratingRef.current.textContent = ratingObj.value.toFixed(1);
        }
      },
    })
    .to(reviewsObj, {
      value: 3,
      duration: 1.2,
      ease: 'power2.out',
      onUpdate: () => {
        if (reviewsRef.current) {
          reviewsRef.current.textContent = Math.floor(reviewsObj.value).toString();
        }
      },
    }, '-=1.2')
    .to(commitObj, {
      value: 100,
      duration: 1.8,
      ease: 'power3.out',
      onUpdate: () => {
        if (commitRef.current) {
          commitRef.current.textContent = Math.floor(commitObj.value).toString();
        }
      },
    }, '-=1.2');

    // Fade in text elements
    gsap.fromTo(
      '.about-fade',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section id="about" ref={containerRef} className="py-24 bg-[#0a0b0d] relative overflow-hidden border-t border-zinc-900">
      {/* Background Radial Glow */}
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gym-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Panel: Philosophy & Profile */}
          <div className="lg:col-span-7 space-y-6">
            <span className="about-fade text-xs font-display font-extrabold tracking-widest text-gym-accent uppercase block">
              OUR PHILOSOPHY
            </span>
            <h3 className="about-fade text-3xl md:text-5xl font-syne font-black text-white leading-tight tracking-tight">
              DISCIPLINE IS THE FOUNDATION, <br />
              STRENGTH IS THE RESULT.
            </h3>
            <p className="about-fade text-zinc-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl pt-4">
              At The Army Fitness, we believe consistency is the ultimate force multiplier. 
              Our mission is to help individuals in Dandi build not just physical power, but the mental resilience 
              needed to maintain a healthy, active lifestyle.
            </p>
            <p className="about-fade text-zinc-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
              Whether you are completely new to fitness or a seasoned strength athlete, we provide an energetic, 
              community-driven environment focused on hard work, expert instruction, and supportive motivation.
            </p>

            <div className="about-fade pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gym-accent/10 border border-gym-accent/20 flex items-center justify-center text-gym-accent shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-display font-bold uppercase tracking-wider">Goal Oriented</h4>
                  <p className="text-zinc-500 text-[11px] mt-1">Structured templates to track weight, lifts, and recovery.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gym-accent/10 border border-gym-accent/20 flex items-center justify-center text-gym-accent shrink-0">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-display font-bold uppercase tracking-wider">Discipline Spirit</h4>
                  <p className="text-zinc-500 text-[11px] mt-1">Consistency-first mindset mirroring military determination.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-lg bg-gym-accent/10 border border-gym-accent/20 flex items-center justify-center text-gym-accent shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-white text-xs font-display font-bold uppercase tracking-wider">Community First</h4>
                  <p className="text-zinc-500 text-[11px] mt-1">Welcoming, motivating, and friendly gym environment.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: Animated Stats Counter */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6 w-full lg:pl-12">
            
            {/* Stat Card 1 */}
            <div className="about-fade bg-gym-card border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-gym-accent/30 transition-colors">
              <span className="text-zinc-600 text-xs font-display font-bold tracking-widest uppercase">
                GOOGLE RATING
              </span>
              <div className="flex items-baseline mt-4 mb-2">
                <span ref={ratingRef} className="text-5xl md:text-6xl font-syne font-black text-white tracking-tighter">
                  0.0
                </span>
                <span className="text-gym-accent font-serif font-black italic text-2xl ml-1">/ 5.0</span>
              </div>
              <span className="text-xs text-zinc-500 font-sans">
                Outstanding client satisfaction and training reviews.
              </span>
            </div>

            {/* Stat Card 2 */}
            <div className="about-fade bg-gym-card border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-gym-accent/30 transition-colors">
              <span className="text-zinc-600 text-xs font-display font-bold tracking-widest uppercase">
                VERIFIED REVIEWS
              </span>
              <div className="flex items-baseline mt-4 mb-2">
                <span ref={reviewsRef} className="text-5xl md:text-6xl font-syne font-black text-white tracking-tighter">
                  0
                </span>
                <span className="text-gym-accent font-serif font-black italic text-2xl ml-1">★</span>
              </div>
              <span className="text-xs text-zinc-500 font-sans">
                100% positive reviews on Google Maps.
              </span>
            </div>

            {/* Stat Card 3 */}
            <div className="about-fade bg-gym-card border border-zinc-900 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-gym-accent/30 transition-colors">
              <span className="text-zinc-600 text-xs font-display font-bold tracking-widest uppercase">
                COMMITMENT RATE
              </span>
              <div className="flex items-baseline mt-4 mb-2">
                <span ref={commitRef} className="text-5xl md:text-6xl font-syne font-black text-white tracking-tighter">
                  0
                </span>
                <span className="text-gym-accent font-serif font-black italic text-2xl ml-1">%</span>
              </div>
              <span className="text-xs text-zinc-500 font-sans">
                We guarantee 100% devotion to helping you achieve your target shape.
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
