import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface Zone {
  id: number;
  num: string;
  category: string;
  title: string;
  description: string;
  image: string;
}

export default function HorizontalProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const zones: Zone[] = [
    {
      id: 1,
      num: '01',
      category: 'STRENGTH',
      title: 'THE IRON SANCTUARY',
      description: 'Equipped with heavy-duty power racks, Olympic lifting platforms, and raw steel dumbbells up to 50kg for powerlifters and bodybuilders.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 2,
      num: '02',
      category: 'CONDITIONING',
      title: 'CARDIO ELITE ZONE',
      description: 'Features high-performance water rowers, curve runners, assault air bikes, and stairmasters for maximum metabolic output.',
      image: 'https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 3,
      num: '03',
      category: 'COMBAT',
      title: 'TACTICAL MATS & HEAVY BAGS',
      description: 'Heavy boxing bags, combat sparring mats, kettlebells, and speedballs designed for high-intensity martial arts and functional drills.',
      image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=800&auto=format&fit=crop',
    },
    {
      id: 4,
      num: '04',
      category: 'RECOVERY',
      title: 'MOBILITY & RECOVERY HUB',
      description: 'Dedicated post-workout space with foam rollers, resistance bands, trigger point guns, and a hydration station for premium muscle care.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop',
    },
  ];

  useGSAP(() => {
    const scrollEl = scrollRef.current;
    if (!scrollEl) return;

    // Calculate total horizontal scroll width
    const getScrollAmount = () => -(scrollEl.scrollWidth - window.innerWidth);

    const pin = gsap.to(scrollEl, {
      x: getScrollAmount,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.6,
        start: 'top top',
        end: () => `+=${scrollEl.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      pin.scrollTrigger?.kill();
      pin.kill();
    };
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      id="showcase"
      className="h-screen overflow-hidden bg-[#08090b] flex items-center relative"
    >
      {/* Title Panel */}
      <div className="absolute top-12 left-6 md:left-12 z-20">
        <span className="text-gym-accent font-display font-extrabold tracking-widest text-xs uppercase block mb-1">
          TRAINING ZONES
        </span>
        <h3 className="text-3xl md:text-4xl font-syne font-black text-white tracking-tight">
          EXPLORE THE FACILITY
        </h3>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollRef}
        className="flex gap-8 md:gap-12 px-6 md:px-12 items-center flex-nowrap h-[65%] mt-12"
      >
        {zones.map((zone) => (
          <div
            key={zone.id}
            className="project-card inline-block w-[320px] sm:w-[480px] md:w-[600px] shrink-0 h-full group relative overflow-hidden rounded-2xl border border-zinc-900 bg-gym-card"
            data-cursor="DRAG"
          >
            {/* Image Container with zoom-on-hover */}
            <div className="w-full h-[70%] overflow-hidden relative">
              <img
                src={zone.image}
                alt={zone.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gym-card via-transparent to-transparent opacity-80" />
            </div>

            {/* Content Details */}
            <div className="p-6 md:p-8 h-[30%] flex flex-col justify-between">
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-[10px] font-display font-extrabold text-gym-accent tracking-widest uppercase">
                  {zone.num} / {zone.category}
                </span>
                <span className="text-xs text-zinc-600 font-display">0{zone.id}</span>
              </div>
              <h4 className="text-lg md:text-xl font-display font-extrabold text-white group-hover:text-gym-accent transition-colors tracking-wide leading-tight">
                {zone.title}
              </h4>
              <p className="text-zinc-500 text-xs font-sans leading-relaxed line-clamp-2 mt-2">
                {zone.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
