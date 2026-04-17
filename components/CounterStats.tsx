"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";
import { AnimatedCounter, FloatingElement } from "./ScrollAnimations";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function CounterStats() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section ref={ref} className="relative overflow-hidden animated-gradient-bg py-20 md:py-28">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 h-60 w-60 rounded-full bg-white/5 blur-3xl float-animation" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white/5 blur-3xl float-reverse" />
        <FloatingElement delay={0} yRange={20} duration={8} className="absolute top-[15%] right-[12%]">
          <div className="h-2 w-2 rounded-full bg-white/20" />
        </FloatingElement>
        <FloatingElement delay={2} yRange={15} duration={10} className="absolute bottom-[20%] left-[8%]">
          <div className="h-3 w-3 rounded-full bg-white/15" />
        </FloatingElement>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15, ease: EASE_SMOOTH }}
              className="group text-center"
            >
              <div className="mx-auto mb-3 inline-flex min-h-[4rem] w-auto items-center justify-center rounded-2xl bg-white/10 px-6 py-4 backdrop-blur-sm transition-all duration-300 group-hover:bg-white/20 group-hover:scale-105 border border-white/20 group-hover:border-white/40">
                <div className="text-3xl font-bold text-white md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              <p className="text-sm font-medium text-white/70 md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
