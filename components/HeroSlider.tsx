"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { HERO_SLIDES, SITE_CONFIG } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import Link from "next/link";
import MagneticButton from "./MagneticButton";
import { WhatsAppIcon } from "./WhatsAppButton";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: EASE_SMOOTH },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.75, ease: EASE_SMOOTH },
  }),
};

const textVariants = {
  enter: { opacity: 0, y: 24 },
  center: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.15, ease: EASE_SMOOTH } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.4 } },
};

function SlideDots({
  total,
  current,
  onDotClick,
}: {
  total: number;
  current: number;
  onDotClick: (i: number) => void;
}) {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-row gap-2.5">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className="group relative flex items-center justify-center"
          aria-label={`Go to slide ${i + 1}`}
        >
          <span
            className={`block rounded-full transition-all duration-500 ${i === current
                ? "h-2 w-8 bg-white shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                : "h-2 w-2 bg-white/40 group-hover:bg-white/70"
              }`}
          />
        </button>
      ))}
    </div>
  );
}

function SlideImage({
  index,
  alt,
  mouseX,
  mouseY,
}: {
  index: number;
  alt: string;
  mouseX: ReturnType<typeof useSpring>;
  mouseY: ReturnType<typeof useSpring>;
}) {
  const pcSrc = `/V Dental Website images/Home Page/Hero Slider Images/Home_HeroSlide_${index}_pc.jpg`;
  const mobileSrc = `/V Dental Website images/Home Page/Hero Slider Images/Home_HeroSlide_${index}_mobile.jpg`;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="relative h-full w-full"
        style={{ x: mouseX, y: mouseY }}
      >
        <motion.div
          className="relative h-full w-full"
          initial={{ scale: 1.08 }}
          animate={{ scale: [1.08, 1.12, 1.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          <div className="hidden sm:block relative h-full w-full">
            <Image
              src={pcSrc}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
          <div className="block sm:hidden relative h-full w-full">
            <Image
              src={mobileSrc}
              alt={alt}
              fill
              className="object-cover object-center"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalSlides = 9;
  const slideText = HERO_SLIDES[current % HERO_SLIDES.length];

  const springX = useSpring(useMotionValue(0), { damping: 25, stiffness: 80 });
  const springY = useSpring(useMotionValue(0), { damping: 25, stiffness: 80 });

  const goToSlide = useCallback(
    (i: number) => {
      setDirection(i > current ? 1 : -1);
      setCurrent(i);
    },
    [current]
  );

  const goNext = useCallback(() => {
    const next = (current + 1) % totalSlides;
    setDirection(1);
    setCurrent(next);
  }, [current, totalSlides]);

  useEffect(() => {
    const timer = setInterval(goNext, 7000);
    return () => clearInterval(timer);
  }, [goNext]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    springX.set(((clientX - left) / width - 0.5) * -12);
    springY.set(((clientY - top) / height - 0.5) * -8);
  };

  const handleMouseLeave = () => {
    springX.set(0);
    springY.set(0);
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-neutral-900 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Images */}
      <AnimatePresence mode="popLayout" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <SlideImage
            index={current + 1}
            alt={slideText.title}
            mouseX={springX}
            mouseY={springY}
          />

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-20 flex h-full items-center pointer-events-none pt-24 sm:pt-32 md:pt-40">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 pointer-events-auto">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Tagline Badge - Commented out since SITE_CONFIG.tagline is removed
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="mb-8 sm:mb-12 inline-flex items-center gap-3"
                >
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
                  </span>
                  <span
                    className="text-3xl md:text-4xl text-accent font-medium tracking-wide"
                    style={{ fontFamily: "var(--font-script)" }}
                  >
                    {(SITE_CONFIG as any).tagline}
                  </span>
                </motion.div>
                */}

                {/* Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7, ease: EASE_SMOOTH }}
                  className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:mb-8 sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[5rem] lg:leading-[1.15] drop-shadow-2xl"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  {slideText.title}
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="mb-10 max-w-lg text-base font-light leading-relaxed tracking-wide text-gray-100 sm:mb-12 sm:text-lg md:text-xl md:max-w-2xl drop-shadow-lg"
                >
                  {slideText.subtitle}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.65, duration: 0.5 }}
                  className="flex flex-col gap-4 sm:flex-row"
                >
                  <MagneticButton>
                    <a
                      href={getWhatsAppUrl(SITE_CONFIG.whatsappRaw)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-accent px-8 py-4 text-white font-bold text-neutral-900 shadow-xl shadow-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/40"
                    >
                      <WhatsAppIcon className="h-5 w-5 transition-transform group-hover:rotate-12" />
                      Book Appointment
                    </a>
                  </MagneticButton>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <SlideDots total={totalSlides} current={current} onDotClick={goToSlide} />
    </section>
  );
}
