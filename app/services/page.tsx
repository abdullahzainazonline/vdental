"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurReveal, FloatingElement, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import SectionHeading from "@/components/SectionHeading";
import { SERVICES, SITE_CONFIG } from "@/lib/constants";
import { Stethoscope, SmilePlus, Sparkles, Crosshair, HeartPulse, CheckCircle, ArrowRight, Phone, Shield } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Stethoscope: <Stethoscope className="h-7 w-7" />,
  SmilePlus: <SmilePlus className="h-7 w-7" />,
  Sparkles: <Sparkles className="h-7 w-7" />,
  Crosshair: <Crosshair className="h-7 w-7" />,
  HeartPulse: <HeartPulse className="h-7 w-7" />,
  Shield: <Shield className="h-7 w-7" />,
};

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const current = SERVICES[activeService];

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-neutral-900 section-divider">
        <div className="absolute inset-0 ken-burns bg-cover bg-center opacity-40" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80)" }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement delay={0} yRange={18} xRange={6} duration={10} className="absolute top-[25%] right-[15%]">
            <div className="h-2.5 w-2.5 rounded-full bg-accent/20" />
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
            Our Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-4xl font-bold text-white md:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Comprehensive
            <br />
            <span className="text-secondary-light">Dental Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-xl text-lg text-white/70 leading-relaxed"
          >
            At our state-of-the-art facility, we take pride in providing comprehensive dental care, specialising in both cosmetic dentistry and a full range of general dental services, ensuring that your oral health is in expert hands.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Service Tabs */}
      <section className="relative py-20 md:py-32 overflow-hidden section-divider">
        <div className="absolute top-0 left-0 h-72 w-72 -translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="What We Offer" title="Our Dental Services" subtitle="Tap on a service to explore treatment details, process, and features." />

          {/* Tab Buttons */}
          <div className="mb-14 flex flex-wrap justify-center gap-3">
            {SERVICES.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => setActiveService(i)}
                className={`group flex items-center gap-2.5 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${activeService === i
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20"
                    : "border border-neutral-200 bg-white text-neutral-600 hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  }`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className={`transition-colors duration-300 ${activeService === i ? "text-white" : "text-neutral-400 group-hover:text-primary"}`}>
                  {iconMap[s.icon]}
                </span>
                <span className="hidden sm:inline">{s.title}</span>
              </motion.button>
            ))}
          </div>

          {/* Active Service Detail */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-12 lg:grid-cols-2 items-start">
                {/* Image & Process */}
                <div>
                  <div className="overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 mb-8 border border-primary/30">
                    <img src={current.image} alt={current.title} className="h-[340px] w-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>Treatment Process</h3>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {current.process.map((p, i) => (
                      <motion.div
                        key={p.step}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="group rounded-2xl border border-primary/30 bg-white p-4 text-center transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
                      >
                        <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-xs font-bold text-primary transition-all duration-300 group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                          {i + 1}
                        </div>
                        <div className="text-sm font-bold text-neutral-900">{p.step}</div>
                        <div className="mt-1 text-xs text-neutral-500">{p.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div>
                  <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 p-3.5 text-primary">
                    {iconMap[current.icon]}
                  </div>
                  <h2 className="mb-3 text-3xl font-bold text-neutral-900 md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
                    {current.title}
                  </h2>
                  <p className="mb-6 text-lg leading-relaxed text-neutral-600">{current.description}</p>

                  <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-neutral-400">What&apos;s Included</h4>
                  <div className="mb-8 grid gap-2 sm:grid-cols-2">
                    {current.features.map((f, i) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="flex items-center gap-2.5 text-sm text-neutral-700"
                      >
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10">
                          <CheckCircle className="h-3.5 w-3.5 text-success" />
                        </div>
                        {f}
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact#appointment-form" className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-light px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                      Book This Service
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-8 py-3.5 text-sm font-bold text-neutral-700 transition-all duration-300 hover:border-primary/30 hover:text-primary">
                      <Phone className="h-4 w-4" />
                      Call Us
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* All Services Grid */}
      <section className="relative bg-neutral-50 py-20 md:py-32 overflow-hidden section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Quick Overview" title="All Services at a Glance" subtitle="Click any service card above to view full details." />
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
            {SERVICES.map((s, i) => (
              <StaggerItem key={s.id} className="h-full">
                <motion.button
                  onClick={() => { setActiveService(i); window.scrollTo({ top: 600, behavior: "smooth" }); }}
                  className="group w-full text-left overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-neutral-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 tilt-card border border-primary/30 h-full flex flex-col"
                  whileHover={{ y: -4 }}
                >
                  <div className="mb-4 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:scale-110">
                    {iconMap[s.icon]}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-neutral-900 shrink-0" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                  <p className="mb-4 text-sm flex-1 leading-relaxed text-neutral-500">{s.shortDesc}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary shrink-0">
                    Learn More
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </motion.button>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlurReveal>
            <div className="relative overflow-hidden rounded-3xl animated-gradient-bg p-12 text-center md:p-20">
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <FloatingElement delay={0} yRange={15} duration={8} className="absolute top-[15%] left-[10%]">
                  <div className="h-20 w-20 rounded-full bg-white/5 blur-xl" />
                </FloatingElement>
                <FloatingElement delay={3} yRange={12} duration={10} className="absolute bottom-[20%] right-[12%]">
                  <div className="h-16 w-16 rounded-full bg-white/5 blur-xl" />
                </FloatingElement>
              </div>
              <div className="relative z-10">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                  Not Sure Which Service You Need?
                </h2>
                <p className="mx-auto mb-8 max-w-xl text-lg text-white/70">
                  Our friendly dentists will assess your needs and recommend the best treatment plan. <em>Pricing may vary — subject to clinic's rates at time of visit.</em>
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/contact#appointment-form" className="btn-shine rounded-full bg-white px-9 py-4 font-bold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    Book a Consultation
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
