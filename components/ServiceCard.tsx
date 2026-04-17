"use client";

import { motion } from "framer-motion";
import { Stethoscope, SmilePlus, Sparkles, Crosshair, HeartPulse, ArrowRight } from "lucide-react";
import Link from "next/link";
import { type ReactNode } from "react";

const iconMap: Record<string, ReactNode> = {
  Stethoscope: <Stethoscope className="h-6 w-6" />,
  SmilePlus: <SmilePlus className="h-6 w-6" />,
  Sparkles: <Sparkles className="h-6 w-6" />,
  Crosshair: <Crosshair className="h-6 w-6" />,
  HeartPulse: <HeartPulse className="h-6 w-6" />,
};

interface ServiceCardProps {
  title: string;
  shortDesc: string;
  icon: string;
  id: string;
  image: string;
  index: number;
}

export default function ServiceCard({ title, shortDesc, icon, id, image, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative h-[420px] w-full overflow-hidden rounded-3xl bg-neutral-900 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
    >
      {/* Background Image with Zoom Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-transparent opacity-80 transition-all duration-500 group-hover:opacity-90 group-hover:via-neutral-900/60" />

      {/* Animated Border Accent */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 transition-colors duration-500 group-hover:border-primary/50" />

      {/* Content Container */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        {/* Icon */}
        <div className="mb-4 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl bg-white/10 text-white backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 md:group-hover:-translate-y-2 md:group-hover:bg-primary md:group-hover:border-primary">
          {iconMap[icon] || <Stethoscope className="h-6 w-6" />}
        </div>

        {/* Title */}
        <h3
          className="mb-1 text-xl md:text-2xl font-bold text-white transition-transform duration-500 md:group-hover:-translate-y-1"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>

        {/* Mobile: static description always visible */}
        <p className="md:hidden mt-2 text-sm leading-relaxed text-neutral-300/80 line-clamp-3">
          {shortDesc}
        </p>
        <Link
          href={`/services#${id}`}
          className="md:hidden mt-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white"
        >
          Learn More <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        {/* Desktop: hover-reveal description */}
        <div className="hidden md:grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100 group-hover:mb-2">
          <div className="overflow-hidden">
            <p className="mt-2 mb-5 text-base leading-relaxed text-neutral-300">
              {shortDesc}
            </p>
            <Link
              href={`/services#${id}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-2.5 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-primary hover:scale-105"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
