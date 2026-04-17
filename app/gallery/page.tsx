"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurReveal, FloatingElement } from "@/components/ScrollAnimations";
import SectionHeading from "@/components/SectionHeading";
import { GALLERY_ITEMS, GALLERY_CATEGORIES, SITE_CONFIG } from "@/lib/constants";
import { X, ZoomIn, ArrowLeftRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All" ? GALLERY_ITEMS : GALLERY_ITEMS.filter((g) => g.category === activeCategory);

  const currentIndex = lightbox !== null ? filtered.findIndex((item) => item.id === lightbox) : -1;

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1) return;
    const prevIndex = (currentIndex - 1 + filtered.length) % filtered.length;
    setLightbox(filtered[prevIndex].id);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + 1) % filtered.length;
    setLightbox(filtered[nextIndex].id);
  };

  const handleDragEnd = (_e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) * velocity.x;
    if (swipe < -5000 || offset.x < -100) {
      handleNext();
    } else if (swipe > 5000 || offset.x > 100) {
      handlePrev();
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-neutral-900 section-divider">
        <div className="absolute inset-0 ken-burns bg-cover bg-center opacity-40" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1581585090817-9de6d7e89c18?w=1920&q=80)" }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement delay={0} yRange={20} xRange={8} duration={10} className="absolute top-[22%] right-[18%]">
            <Sparkles className="h-4 w-4 text-secondary-light/15" />
          </FloatingElement>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-36 sm:px-6 lg:px-8">
          <motion.span
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary-light/30 bg-white/10 px-5 py-2 text-sm font-medium text-secondary-light backdrop-blur-md"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-light" />
            Gallery
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-4xl font-bold text-white md:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Smile
            <br />
            <span className="text-secondary-light">Transformations</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-xl text-lg text-white/70 leading-relaxed"
          >
            Real results from real patients. See the stunning before and after transformations achieved at V Dental Clinic.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Filter & Gallery */}
      <section className="relative py-20 md:py-32 overflow-hidden section-divider">
        <div className="absolute top-0 left-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-secondary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Work" title="Before & After Results" subtitle="Filter by category to explore our dental transformations." />

          {/* Category Filter */}
          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {GALLERY_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:border-primary/30 hover:text-primary"
                  }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-3xl bg-white shadow-lg shadow-neutral-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 cursor-pointer tilt-card border border-primary/30"
                  onClick={() => setLightbox(item.id)}
                >
                  {/* Before / After Side by Side */}
                  <div className="relative flex h-56 overflow-hidden">
                    <div className="relative w-1/2">
                      <img src={item.before} alt={`${item.title} - Before`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <span className="absolute bottom-2 left-2 rounded-full bg-neutral-900/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">Before</span>
                    </div>
                    <div className="absolute left-1/2 top-1/2 z-10 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
                      <ArrowLeftRight className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="relative w-1/2">
                      <img src={item.after} alt={`${item.title} - After`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <span className="absolute bottom-2 right-2 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">After</span>
                    </div>
                    {/* Zoom icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-primary/0 opacity-0 transition-all duration-300 group-hover:bg-primary/10 group-hover:opacity-100">
                      <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="mb-1 text-xs font-semibold text-primary">{item.category}</span>
                    <h3 className="text-sm font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const item = GALLERY_ITEMS.find((g) => g.id === lightbox);
          if (!item) return null;
          return (
            <motion.div
              key="lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/90 p-4 backdrop-blur-lg"
              onClick={() => setLightbox(null)}
            >
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl border border-primary/30"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-y-0 left-0 z-20 flex items-center px-2 sm:px-4 pointer-events-none w-full justify-between">
                  {filtered.length > 1 && (
                    <button onClick={handlePrev} className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 text-primary shadow-lg backdrop-blur-md transition-all hover:bg-white hover:scale-110 active:scale-95">
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  )}
                  {filtered.length > 1 && (
                    <button onClick={handleNext} className="pointer-events-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/80 text-primary shadow-lg backdrop-blur-md transition-all hover:bg-white hover:scale-110 active:scale-95">
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  )}
                </div>
                <button onClick={() => setLightbox(null)} className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/60 text-white backdrop-blur-md transition-colors hover:bg-neutral-900/80">
                  <X className="h-5 w-5" />
                </button>
                <div className="grid md:grid-cols-2">
                  <div className="relative pointer-events-none select-none">
                    <img src={item.before} alt="Before" className="h-64 w-full object-cover md:h-96 pointer-events-none" draggable={false} />
                    <span className="absolute bottom-4 left-4 rounded-full bg-neutral-900/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">Before</span>
                  </div>
                  <div className="relative pointer-events-none select-none">
                    <img src={item.after} alt="After" className="h-64 w-full object-cover md:h-96 pointer-events-none" draggable={false} />
                    <span className="absolute bottom-4 right-4 rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">After</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary">{item.category}</span>
                  <h3 className="text-lg font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-20 section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurReveal>
            <div className="relative overflow-hidden rounded-3xl animated-gradient-bg p-12 text-center md:p-20">
              <div className="relative z-10">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                  Ready for Your Transformation?
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-lg text-white/70">
                  Join thousands of happy patients who have transformed their smiles at V Dental Clinic.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact" className="btn-shine rounded-full bg-white px-9 py-4 font-bold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    Book Appointment
                  </Link>
                  <a href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-white/30 px-9 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </BlurReveal>
        </div>
      </section>
    </>
  );
}
