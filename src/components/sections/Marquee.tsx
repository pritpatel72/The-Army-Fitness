import { Star } from 'lucide-react';

export default function Marquee() {
  const words = [
    'STRENGTH',
    'DISCIPLINE',
    'CONSISTENCY',
    'THE ARMY FITNESS',
    'FORGE ELITE',
    'NO EXCUSES',
  ];

  const reviews = [
    { text: 'Superb 💪🏻', author: 'Divan Patel' },
    { text: 'Best gym in town, great atmosphere!', author: 'Kirtan Patel' },
    { text: 'Extremely motivating trainers and clean facility.', author: 'Jeel Patel (Local Guide)' },
    { text: 'Unmatched discipline and training focus.', author: 'Reviewer' },
  ];

  return (
    <section id="reviews" className="py-20 bg-[#08090b] border-y border-zinc-900 overflow-hidden relative select-none">
      {/* Background overlay gradients */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#08090b] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#08090b] to-transparent z-10 pointer-events-none" />

      <div className="flex flex-col gap-12">
        {/* Row 1: Brand Words (scrolls left) */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex gap-16 items-center animate-scroll-left shrink-0 min-w-full">
            {[...words, ...words].map((word, index) => (
              <div key={index} className="flex items-center gap-16">
                <span
                  className={`text-5xl md:text-7xl font-syne font-black tracking-tighter uppercase ${
                    index % 2 === 0
                      ? 'text-transparent webkit-text-stroke border-zinc-800'
                      : 'text-white'
                  }`}
                  style={{
                    WebkitTextStroke: index % 2 === 0 ? '1px rgba(255,255,255,0.15)' : 'none',
                  }}
                >
                  {word}
                </span>
                <span className="w-3 h-3 rounded-full bg-gym-accent" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Customer Reviews (scrolls right) */}
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex gap-8 items-center animate-scroll-right shrink-0 min-w-full">
            {[...reviews, ...reviews].map((rev, index) => (
              <div
                key={index}
                className="bg-[#121318] border border-zinc-800/60 rounded-2xl px-6 py-4 flex items-center gap-6 shadow-md"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current shrink-0" />
                    ))}
                  </div>
                  <p className="text-white font-sans text-xs md:text-sm font-semibold tracking-wide">
                    "{rev.text}"
                  </p>
                  <span className="text-[10px] text-zinc-500 font-display font-medium uppercase tracking-wider">
                    — {rev.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
