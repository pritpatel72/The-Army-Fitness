import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Cursor from '../src/components/Cursor';
import Header from '../src/components/Header';
import HeroSection from '../src/components/sections/HeroSection';
import ServicesGrid from '../src/components/sections/ServicesGrid';
import HorizontalProjects from '../src/components/sections/HorizontalProjects';
import AboutBrief from '../src/components/sections/AboutBrief';
import PostsShowcase from '../src/components/sections/PostsShowcase';
import Marquee from '../src/components/sections/Marquee';
import CTASection from '../src/components/sections/CTASection';
import Footer from '../src/components/Footer';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    // Refresh scroll triggers after rendering is completed to ensure layout coordinates are correct
    ScrollTrigger.refresh();
  }, []);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
      <div className="bg-[#0a0b0d] text-zinc-100 min-h-screen selection:bg-gym-accent selection:text-black font-sans antialiased relative">
        <Cursor />
        <Header />
        <main>
          <HeroSection />
          <ServicesGrid />
          <HorizontalProjects />
          <AboutBrief />
          <PostsShowcase />
          <Marquee />
          <CTASection />
        </main>
        <Footer />
      </div>
    </ReactLenis>
  );
}
