"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
  children?: ReactNode;
}

export default function SectionHeading({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-14 md:mb-20 ${centered ? "text-center" : ""}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-4 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold ${
            light
              ? "border border-white/20 bg-white/10 text-white backdrop-blur-sm"
              : "border border-primary/10 bg-primary/5 text-primary"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-secondary-light" : "bg-secondary"}`} />
          {badge}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl ${
          light ? "text-white" : "text-neutral-900"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className={`mx-auto mt-5 max-w-2xl text-base leading-relaxed md:text-lg ${
            light ? "text-neutral-300" : "text-neutral-500"
          }`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto mt-6 h-1 w-16 origin-center rounded-full ${
          centered ? "" : "ml-0"
        } bg-gradient-to-r from-primary via-secondary to-primary-light`}
      />
    </div>
  );
}
