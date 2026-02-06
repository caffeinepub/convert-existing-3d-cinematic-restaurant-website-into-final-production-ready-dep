import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import FoodHeroScene from '../components/three/FoodHeroScene';
import { Button } from '@/components/ui/button';
import { scrollToSection } from '../lib/scrollToSection';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt="Restaurant ambiance"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* 3D Canvas */}
      <div className="absolute inset-0 z-10">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <Suspense fallback={null}>
            <FoodHeroScene />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Culinary Excellence
          </h1>
          <p className="mb-8 text-xl text-amber-100/90 md:text-2xl lg:text-3xl">
            Where flavor meets artistry in every dish
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-amber-600 text-lg hover:bg-amber-700"
              onClick={() => scrollToSection('booking')}
            >
              Reserve a Table
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-400 bg-black/30 text-lg text-amber-100 backdrop-blur-sm hover:bg-black/50"
              onClick={() => scrollToSection('menu')}
            >
              View Menu
            </Button>
          </div>
        </div>
      </div>

      {/* Vignette Effect */}
      <div className="pointer-events-none absolute inset-0 z-30 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </section>
  );
}
