import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if it's a mobile/touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Set initial positions
    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    const xDotSetter = gsap.quickTo(dot, 'x', { duration: 0.08, ease: 'power3.out' });
    const yDotSetter = gsap.quickTo(dot, 'y', { duration: 0.08, ease: 'power3.out' });
    const xRingSetter = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const yRingSetter = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMouseMove = (e: MouseEvent) => {
      xDotSetter(e.clientX);
      yDotSetter(e.clientY);
      xRingSetter(e.clientX);
      yRingSetter(e.clientY);
    };

    window.addEventListener('mousemove', onMouseMove);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveEl = target.closest('[data-cursor], a, button, [role="button"]');

      if (interactiveEl) {
        const text = interactiveEl.getAttribute('data-cursor') || '';
        setCursorText(text);

        gsap.to(ring, {
          width: text ? 70 : 45,
          height: text ? 70 : 45,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderColor: 'transparent',
          duration: 0.25,
          overwrite: 'auto',
        });
        gsap.to(dot, {
          scale: 0,
          duration: 0.2,
          overwrite: 'auto',
        });
      } else {
        setCursorText('');
        gsap.to(ring, {
          width: 20,
          height: 20,
          backgroundColor: 'transparent',
          borderColor: 'rgba(16, 185, 129, 0.8)', // green theme accent
          duration: 0.25,
          overwrite: 'auto',
        });
        gsap.to(dot, {
          scale: 1,
          duration: 0.2,
          overwrite: 'auto',
        });
      }
    };

    window.addEventListener('mouseover', onMouseOver);

    const onMouseLeaveViewport = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 });
    };
    const onMouseEnterViewport = () => {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3 });
    };

    document.addEventListener('mouseleave', onMouseLeaveViewport);
    document.addEventListener('mouseenter', onMouseEnterViewport);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeaveViewport);
      document.removeEventListener('mouseenter', onMouseEnterViewport);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-gym-accent rounded-full pointer-events-none z-[999] mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-5 h-5 border border-gym-accent rounded-full pointer-events-none z-[998] flex items-center justify-center mix-blend-difference overflow-hidden"
      >
        {cursorText && (
          <span className="text-[9px] font-display font-extrabold tracking-widest text-white uppercase leading-none select-none text-center">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
