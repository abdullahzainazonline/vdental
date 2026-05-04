"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";

const AUTO_INTERVAL = 6000; // 6 seconds between slides
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > current ? 1 : -1);
      setCurrent(i);
    },
    [current]
  );

  const goPrev = useCallback(() => {
    const prev = (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    setDirection(-1);
    setCurrent(prev);
  }, [current]);

  const goNext = useCallback(() => {
    const next = (current + 1) % TESTIMONIALS.length;
    setDirection(1);
    setCurrent(next);
  }, [current]);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, AUTO_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  const testimonial = TESTIMONIALS[current];

  const cardVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
      filter: "blur(6px)",
    }),
    center: {
      x: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { duration: 0.65, ease: EASE_SMOOTH },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
      filter: "blur(4px)",
      transition: { duration: 0.45, ease: EASE_SMOOTH },
    }),
  };

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ─── Card ─── */}
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="relative cursor-default rounded-3xl bg-white p-8 shadow-xl shadow-neutral-900/5 md:p-12 border border-primary/30 transition-shadow duration-300 hover:shadow-2xl hover:border-primary/50"
        >
          {/* Quote icon */}
          <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
            <Quote className="h-5 w-5" />
          </div>

          <div className="flex flex-col items-center gap-8 md:items-start">
            {/* Content */}
            <div className="flex-1 text-center md:text-left w-full">
              {/* Stars & Google Review */}
              <div className="mb-4 flex flex-col md:flex-row items-center gap-3">
                <div className="flex gap-1 justify-center md:justify-start">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 text-sm font-medium text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
                  <svg className="h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Google Review
                </div>
              </div>

              {/* Full review text — no typewriter */}
              <p className="mb-5 text-base italic leading-relaxed text-neutral-600 md:text-lg">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              <div>
                <p
                  className="font-bold text-neutral-900"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {testimonial.name}
                </p>
                <p className="text-sm font-medium text-primary">
                  {testimonial.service}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* ─── Arrow Controls ─── */}
      <button
        onClick={goPrev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-md text-neutral-600 transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg md:-left-6"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={goNext}
        className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white border border-neutral-200 shadow-md text-neutral-600 transition-all duration-200 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg md:-right-6"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* ─── Progress dots ─── */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {TESTIMONIALS.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              i === current
                ? "w-10 bg-gradient-to-r from-primary to-secondary"
                : "w-2 bg-neutral-200 hover:bg-neutral-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
