"use client";

import { motion } from "framer-motion";
import { ScrollReveal, FloatingElement, BlurReveal } from "@/components/ScrollAnimations";
import SectionHeading from "@/components/SectionHeading";
import { DENTISTS, SITE_CONFIG } from "@/lib/constants";
import { GraduationCap, Clock, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function DentistsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-neutral-900 section-divider">
        <div className="absolute inset-0 ken-burns bg-cover bg-center opacity-40" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1629909615957-be38d6d07f08?w=1920&q=80)" }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement delay={1} yRange={15} duration={12} className="absolute top-[30%] right-[20%]">
            <Sparkles className="h-4 w-4 text-accent/15" />
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
            Our Dentists
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-4xl font-bold text-white md:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Expert Dentists,
            <br />
            <span className="text-secondary-light">Exceptional Care</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-xl text-lg text-white/70 leading-relaxed"
          >
            Our team of dedicated dental professionals brings together years of experience, advanced training, and a genuine passion for patient care.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Dentist Profiles */}
      <section className="relative py-20 md:py-32 overflow-hidden section-divider">
        <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Meet the Team" title="Your Dental Care Experts" subtitle="Each dentist brings unique skills and dedication to ensure your best care." />

          <div className="space-y-20 md:space-y-28">
            {DENTISTS.map((doc, i) => (
              <ScrollReveal key={doc.id} delay={0.1}>
                <div className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
                  {/* Image */}
                  <div className={`relative ${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 border border-primary/30">
                      <img src={doc.image} alt={doc.name} className="h-[420px] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                    </div>
                    {/* Experience Badge */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                      className={`absolute -bottom-5 ${i % 2 === 0 ? "-right-3 md:-right-5" : "-left-3 md:-left-5"} rounded-2xl bg-gradient-to-br from-accent to-accent-light p-5 text-neutral-900 shadow-xl shadow-accent/30`}
                    >
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5" />
                        <span className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>{doc.experience}</span>
                      </div>
                      <div className="text-xs font-medium opacity-70">Experience</div>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className={`${i % 2 === 1 ? "lg:[direction:ltr]" : ""}`}>
                    <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary">
                      <GraduationCap className="h-3.5 w-3.5" />
                      {doc.qualifications}
                    </div>
                    <h2 className="mb-1 text-3xl font-bold text-neutral-900 md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
                      {doc.name}
                    </h2>
                    <p className="mb-5 text-lg font-medium text-primary">{doc.title}</p>
                    <p className="mb-6 leading-relaxed text-neutral-600">{doc.bio}</p>

                    <div className="mb-6">
                      <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-neutral-400">Specialisations</h4>
                      <div className="flex flex-wrap gap-2">
                        {doc.specialties.map((s) => (
                          <span key={s} className="rounded-full bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:from-primary/10 hover:to-secondary/10">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact" className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-xl">
                      Book with {doc.name.split(" ")[0]} {doc.name.split(" ")[1]}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Our Team */}
      <section className="relative bg-neutral-50 py-20 md:py-32 overflow-hidden section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Why Us" title="Why Trust Our Team" subtitle="What sets our dental professionals apart." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "MDA Registered", desc: "All dentists registered with the Malaysian Dental Association", icon: "🏛️" },
              { title: "Continuous Education", desc: "Regular training and upskilling in latest dental techniques", icon: "📚" },
              { title: "Patient Reviews", desc: "Consistently rated 5 stars by thousands of happy patients", icon: "⭐" },
              { title: "Multilingual", desc: "We communicate in English, Malay, Mandarin & Cantonese", icon: "🌏" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-white p-7 shadow-lg shadow-neutral-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 text-center border border-primary/30"
              >
                <div className="mb-4 text-4xl">{item.icon}</div>
                <h3 className="mb-2 text-lg font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-sm text-neutral-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
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
              </div>
              <div className="relative z-10">
                <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                  Ready to Meet Your Dentist?
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-lg text-white/70">
                  Schedule your appointment today and experience the V Dental difference.
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
