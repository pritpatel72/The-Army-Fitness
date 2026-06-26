import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Star, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleLine1Ref = useRef<HTMLSpanElement>(null);
  const titleLine2Ref = useRef<HTMLSpanElement>(null);
  const titleLine3Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    // Initial entrance animations
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });

    tl.fromTo(subtitleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.2 })
      .fromTo(
        [titleLine1Ref.current, titleLine2Ref.current, titleLine3Ref.current],
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, stagger: 0.15 },
        '-=0.8'
      )
      .fromTo(descRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.6')
      .fromTo(imageContainerRef.current, { scaleY: 0, transformOrigin: 'top' }, { scaleY: 1, duration: 1.5, ease: 'power4.inOut' }, '-=1.2')
      .fromTo(videoRef.current, { scale: 1.3 }, { scale: 1.05, duration: 1.5, ease: 'power4.inOut' }, '-=1.5');

    // Parallax scrolling effect on the video
    gsap.to(videoRef.current, {
      yPercent: 12,
      scale: 1.15,
      ease: 'none',
      scrollTrigger: {
        trigger: imageContainerRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, { scope: containerRef });

  const handleScrollDown = () => {
    const nextSection = document.getElementById('services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen pt-32 pb-16 flex flex-col justify-between relative overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gym-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex-grow flex flex-col justify-center gap-12 z-10">
        {/* Typographic Header */}
        <div className="flex flex-col select-none">
          <div
            ref={subtitleRef}
            className="flex items-center gap-3 mb-4 text-xs font-display font-extrabold tracking-widest text-gym-accent uppercase"
          >
            <img src="/logo-symbol.jpg" alt="The Army Fitness Logo symbol" className="h-6 w-auto object-contain brightness-90" />
            <span>01 // THE ARMY FITNESS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gym-accent animate-pulse-slow" />
          </div>

          <h1 className="text-[11vw] sm:text-[10vw] lg:text-[8vw] font-black leading-[0.9] tracking-tighter uppercase flex flex-col text-white">
            <div className="overflow-hidden clip-text">
              <span ref={titleLine1Ref} className="inline-block font-syne">
                DISCIPLINE
              </span>
            </div>
            <div className="overflow-hidden clip-text">
              <span
                ref={titleLine2Ref}
                className="inline-block font-serif italic font-light text-zinc-400 pl-[4vw] normal-case"
              >
                builds
              </span>
            </div>
            <div className="overflow-hidden clip-text flex items-center gap-4">
              <span ref={titleLine3Ref} className="inline-block font-syne text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-gym-accent">
                STRENGTH.
              </span>
            </div>
          </h1>
        </div>

        {/* Supporting description / stats */}
        <div
          ref={descRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end border-t border-zinc-800/40 pt-8"
        >
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans">
              A high-performance fitness sanctuary in Dandi, Gujarat. Inspired by the spirit of
              determination and consistency, we provide an elite environment to forge strength and discipline.
            </p>
          </div>

          {/* Stats / Google Rating */}
          <div className="md:col-span-6 lg:col-span-4 lg:col-start-8 flex justify-between gap-6 border-l border-zinc-800/60 pl-6">
            <div className="flex flex-col">
              <span className="text-xs font-display tracking-widest text-zinc-500 uppercase mb-1">
                LOCATION
              </span>
              <span className="text-sm font-semibold text-white">Dandi, Gujarat</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-display tracking-widest text-zinc-500 uppercase mb-1">
                GOOGLE RATING
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-extrabold text-white">5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-[10px] text-zinc-500 font-display mt-0.5">3 Verified Reviews</span>
            </div>
          </div>
        </div>

        {/* Parallax Video Section */}
        <div
          ref={imageContainerRef}
          className="w-full h-[50vh] md:h-[70vh] rounded-2xl overflow-hidden border border-zinc-900 shadow-2xl relative group bg-black"
          data-cursor="PLAY"
        >
          <video
            ref={videoRef}
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[120%] object-cover absolute top-0 left-0 transition-all duration-300"
          />
          {/* Top and Bottom Black Gradients to adjust borders and blend video with dark theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0b0d] via-transparent to-[#0a0b0d] opacity-90 pointer-events-none" />
          
          {/* Floating Call to Action */}
          <button
            onClick={handleScrollDown}
            className="absolute bottom-6 right-6 w-12 h-12 bg-white text-black hover:bg-gym-accent hover:text-black rounded-full flex items-center justify-center transition-all duration-300 shadow-lg group-hover:scale-110 z-20"
            aria-label="Scroll Down"
          >
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
