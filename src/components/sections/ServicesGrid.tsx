import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Dumbbell, Flame, Heart, Plus, Minus } from 'lucide-react';

interface Service {
  id: string;
  num: string;
  icon: React.ComponentType<any>;
  title: string;
  shortDesc: string;
  details: string[];
  bestFor: string;
}

export default function ServicesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const services: Service[] = [
    {
      id: 'strength',
      num: '01',
      icon: Dumbbell,
      title: 'STRENGTH & POWERBUILDING',
      shortDesc: 'Designed for individuals looking to build raw power, lean muscle, and skeletal resilience through structured resistance training.',
      details: [
        'Compound movements focus (Squat, Bench Press, Deadlift)',
        'Structured progressive overload cycles',
        'Functional hypertrophy and injury prevention training',
        'Form check and mechanical analysis',
      ],
      bestFor: 'Beginners to advanced lifters aiming for pure strength.',
    },
    {
      id: 'recomp',
      num: '02',
      icon: Flame,
      title: 'WEIGHT LOSS & RECOMPOSITION',
      shortDesc: 'Optimize your body composition by burning fat while maintaining or building lean muscle through customized training plans.',
      details: [
        'Metabolic conditioning & circuit training',
        'High-intensity interval workouts (HIIT)',
        'Caloric expenditure tracking strategies',
        'Habit-based fat loss guidance',
      ],
      bestFor: 'Individuals aiming to shed body fat and build tone.',
    },
    {
      id: 'endurance',
      num: '03',
      icon: Heart,
      title: 'ENDURANCE & CONDITIONING',
      shortDesc: 'Enhance your aerobic and anaerobic capacity. Improve cardiovascular health, stamina, and agility for daily life and athletic goals.',
      details: [
        'High-intensity functional conditioning',
        'Core strength and athletic mobility development',
        'Rowing, running, and assault bike intervals',
        'Active recovery & joint mobilization',
      ],
      bestFor: 'Anyone seeking elite stamina and overall body conditioning.',
    },
  ];

  useGSAP(() => {
    // Fade in and shift service cards on scroll
    gsap.fromTo(
      '.service-card',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 85%',
        },
      }
    );
  }, { scope: containerRef });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="services" ref={containerRef} className="py-24 bg-[#0a0b0d] relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-16">
          <span className="text-xs font-display font-extrabold tracking-widest text-gym-accent uppercase block mb-3">
            SERVICES & DISCIPLINES
          </span>
          <h2 className="text-4xl md:text-5xl font-syne font-black text-white tracking-tight">
            HOW WE BUILD STRENGTH
          </h2>
          <p className="text-zinc-400 text-sm md:text-base max-w-xl mt-4">
            Our training methodologies combine evidence-based programming with disciplined execution 
            to help you hit your fitness benchmarks.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="service-card glow-card rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden relative"
                data-cursor={isExpanded ? 'CLOSE' : 'EXPAND'}
              >
                <div>
                  {/* Top line: Icon + Number */}
                  <div className="flex justify-between items-center mb-12">
                    <div className="w-12 h-12 bg-gym-accent/10 border border-gym-accent/20 rounded-xl flex items-center justify-center text-gym-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-zinc-700 font-display font-black text-2xl tracking-tighter">
                      {service.num}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg md:text-xl font-display font-extrabold text-white tracking-wider mb-4">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Expandable Content Container */}
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-72 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-zinc-800/80 pt-4 mt-4">
                      <h4 className="text-xs font-display font-bold text-gym-accent tracking-widest uppercase mb-3">
                        PROGRAM DETAILS
                      </h4>
                      <ul className="space-y-2 text-xs text-zinc-300">
                        {service.details.map((detail, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <span className="text-gym-accent mt-0.5">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 pt-3 border-t border-zinc-800/40">
                        <span className="text-[11px] font-display text-zinc-500 uppercase tracking-widest block mb-1">
                          BEST FOR
                        </span>
                        <span className="text-xs text-zinc-400 font-sans leading-relaxed">
                          {service.bestFor}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Action Trigger */}
                <button
                  onClick={() => toggleExpand(service.id)}
                  className="flex items-center gap-2 text-xs font-display font-extrabold tracking-widest text-gym-accent uppercase group mt-4 self-start"
                >
                  <span>{isExpanded ? 'COLLAPSE DETAILS' : 'LEARN MORE'}</span>
                  {isExpanded ? (
                    <Minus className="w-4 h-4 text-gym-accent group-hover:-translate-y-0.5 transition-transform" />
                  ) : (
                    <Plus className="w-4 h-4 text-gym-accent group-hover:rotate-90 transition-transform" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
