import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Calendar, User } from 'lucide-react';

export default function PostsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Fade in/slide up the journal entries
    gsap.fromTo(
      '.post-card-reveal',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        },
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="posts"
      className="py-24 bg-[#0a0b0d] border-t border-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-display font-extrabold tracking-widest text-gym-accent uppercase block mb-3">
            THE TRAINING LOGS
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-black text-white tracking-tight">
            INSIGHTS & INTENSITY
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mt-4">
            Explore recent updates, philosophical reflections, and workout showcases directly from The Army Fitness regiment.
          </p>
        </div>

        {/* Asymmetrical Layout for the Two Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Post 1: Wide Banner Card */}
          <div
            className="post-card-reveal lg:col-span-7 flex flex-col justify-between bg-gym-card border border-zinc-900 rounded-3xl overflow-hidden group hover:border-gym-accent/30 transition-all duration-500"
            data-cursor="READ"
          >
            <div className="relative overflow-hidden h-[300px] sm:h-[350px]">
              <img
                src="/post1.jpg"
                alt="The Regiment Transformation Method"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-card via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-display uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> June 26, 2026
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> Coaching Staff
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-white group-hover:text-gym-accent transition-colors leading-tight">
                  THE REGIMENT TRANSFORMATION METHOD
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  A detailed breakdown of our double-discipline conditioning sessions. We merge high-performance strength cycles 
                  with intense aerobic intervals to sculpt form, boost stamina, and reinforce daily consistency under expert guidance.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800/40 flex items-center gap-2 text-xs font-display font-bold text-gym-accent tracking-widest uppercase">
                <span>VIEW SHOWCASE</span>
                <span className="text-gym-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>

          {/* Post 2: Tall Vertical Card */}
          <div
            className="post-card-reveal lg:col-span-5 flex flex-col justify-between bg-gym-card border border-zinc-900 rounded-3xl overflow-hidden group hover:border-gym-accent/30 transition-all duration-500"
            data-cursor="READ"
          >
            <div className="relative overflow-hidden h-[350px] lg:h-[450px]">
              <img
                src="/post2.jpg"
                alt="Strength Beyond the Physical"
                className="w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-card via-transparent to-transparent opacity-80" />
            </div>

            <div className="p-8 flex flex-col justify-between flex-grow">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[10px] text-zinc-500 font-display uppercase tracking-widest">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> June 20, 2026
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" /> TAF Philosophy
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-extrabold text-white group-hover:text-gym-accent transition-colors leading-tight">
                  DISCIPLINE BEGETS STRENGTH
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  True power is forged when motivation runs dry. We analyze the mental architecture of consistency and how pushing 
                  beyond comfort boundaries inside the gym translates to mental clarity and discipline in daily life.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-zinc-800/40 flex items-center gap-2 text-xs font-display font-bold text-gym-accent tracking-widest uppercase">
                <span>READ ESSAY</span>
                <span className="text-gym-accent group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
