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

          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Avatar */}
            <div className="shrink-0">
              <div className="relative">
                <div className="h-20 w-20 overflow-hidden rounded-2xl ring-4 ring-primary/10 shadow-lg">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-xs font-bold text-neutral-900 shadow-sm">
                  {testimonial.rating}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              {/* Stars */}
              <div className="mb-4 flex justify-center gap-1 md:justify-start">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
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
