"use client";

import { motion } from "framer-motion";
import { ScrollReveal, StaggerContainer, StaggerItem, FloatingElement, BlurReveal } from "@/components/ScrollAnimations";
import SectionHeading from "@/components/SectionHeading";
import { DENTISTS, SITE_CONFIG, VALUES } from "@/lib/constants";
import { Heart, Cpu, Award, CheckCircle, MapPin, Sparkles } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Heart: <Heart className="h-7 w-7" />,
  Cpu: <Cpu className="h-7 w-7" />,
  Award: <Award className="h-7 w-7" />,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-neutral-900 section-divider">
        <div className="absolute inset-0 ken-burns bg-cover bg-center opacity-40" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80)" }} />
        <div className="hero-overlay absolute inset-0" />
        {/* Floating decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement delay={0} yRange={20} xRange={8} duration={9} className="absolute top-[20%] right-[12%]">
            <div className="h-3 w-3 rounded-full bg-secondary-light/20" />
          </FloatingElement>
          <FloatingElement delay={2} yRange={15} duration={11} className="absolute bottom-[30%] left-[10%]">
            <Sparkles className="h-5 w-5 text-accent/20" />
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
            About Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-4xl font-bold text-white md:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Modern Dentistry,
            <br />
            <span className="text-secondary-light">Personal Care</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-xl text-lg text-white/70 leading-relaxed"
          >
            For over 10 years, V Dental Clinic has been the trusted dental care provider for families in SS2, Petaling Jaya and the Klang Valley.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Our Story */}
      <section className="relative py-20 md:py-32 overflow-hidden section-divider">
        <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 border border-primary/30 h-full">
                  <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" alt="V Dental Clinic interior" className="h-[500px] w-full object-cover transition-transform duration-700 hover:scale-105" loading="lazy" />
                </div>
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="absolute -bottom-6 -right-4 md:-right-6 rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-xl shadow-primary/30"
                >
                  <div className="text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>10+</div>
                  <div className="text-sm text-white/70">Years of Excellence</div>
                </motion.div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-5 py-2 text-sm font-semibold text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Our Story
                </span>
                <h2 className="mb-5 text-3xl font-bold text-neutral-900 md:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                  A Legacy of <span className="gradient-text">Healthy Smiles</span>
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                  Welcome to V Dental Clinic PJ, where our passion is your perfect smile. Located in the vibrant heart of SS2, Petaling Jaya, our clinic is more than just a place for dental treatments—it's a sanctuary for your dental health and well-being.
                </p>
                <p className="mb-7 text-sm leading-relaxed text-neutral-600">
                  Led by the esteemed Dr. Veron Koh, a seasoned expert with over a decade of experience, our team is dedicated to delivering exceptional service and personalized attention. We utilize the latest technology to provide top-notch care, from general dentistry to extensive cosmetic and surgical procedures, ensuring every visit is stress-free and leaves you with the confident smile you deserve.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {["Gentle & Patient-Focused", "Latest Technology", "Affordable Care", "Multilingual Team"].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-2.5 text-sm text-neutral-700"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-success/10">
                        <CheckCircle className="h-3.5 w-3.5 text-success" />
                      </div>
                      {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-neutral-50 py-20 md:py-32 overflow-hidden section-divider">
        <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Values" title="What We Stand For" subtitle="The principles that guide every interaction, treatment, and decision at V Dental Clinic." />
          <StaggerContainer className="grid gap-8 md:grid-cols-3" staggerDelay={0.15}>
            {VALUES.map((value) => (
              <StaggerItem key={value.title} className="h-full">
                <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-neutral-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 tilt-card border border-primary/30 h-full flex flex-col">
                  <div className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-primary/5 transition-all duration-700 group-hover:scale-[3] group-hover:bg-primary/8" />
                  <div className="relative">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-all duration-500 group-hover:from-primary group-hover:to-secondary group-hover:text-white group-hover:shadow-lg group-hover:scale-110">
                      {iconMap[value.icon]}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-neutral-900 shrink-0" style={{ fontFamily: "var(--font-heading)" }}>{value.title}</h3>
                    <p className="text-sm leading-relaxed text-neutral-500 flex-1">{value.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technology */}
      <section className="relative py-20 md:py-32 overflow-hidden section-divider">
        <div className="absolute top-20 right-0 h-60 w-60 translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-sm font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Our Technology
                </span>
                <h2 className="mb-5 text-3xl font-bold text-neutral-900 md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
                  State-of-the-Art Equipment
                </h2>
                <p className="mb-8 leading-relaxed text-neutral-600">
                  We invest in the latest dental technology to ensure precise diagnostics, efficient treatments, and maximum comfort for our patients.
                </p>
                <div className="space-y-4">
                  {[
                    { title: "Digital X-Rays", desc: "90% less radiation, instant results for accurate diagnosis" },
                    { title: "Intraoral Cameras", desc: "See exactly what we see — full transparency in treatment" },
                    { title: "Advanced Sterilisation", desc: "Hospital-grade autoclave systems for complete safety" },
                    { title: "Modern Treatment Chairs", desc: "Ergonomic comfort with integrated LED lighting" },
                  ].map((tech, i) => (
                    <motion.div
                      key={tech.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12, duration: 0.5 }}
                      whileHover={{ x: 6, transition: { duration: 0.2 } }}
                      className="flex gap-4 rounded-2xl border border-primary/30 bg-white p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 cursor-default"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-neutral-900">{tech.title}</h4>
                        <p className="text-sm text-neutral-500">{tech.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="overflow-hidden rounded-3xl shadow-lg border border-primary/30 bg-white flex items-center justify-center p-8">
                    <img src="https://vdental.com.my/wp-content/uploads/2024/04/V-dental-logo-1000x1000-Transparent-1.png" alt="Modern dental equipment" className="h-32 w-auto object-contain transition-transform duration-700 hover:scale-110" loading="lazy" />
                  </div>
                  <div className="overflow-hidden rounded-3xl shadow-lg border border-primary/30">
                    <img src="https://vdental.com.my/wp-content/uploads/2024/03/front-edited-Large.jpeg" alt="Dental treatment room" className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
                  </div>
                </div>
                <div className="space-y-4 pt-10">
                  <div className="overflow-hidden rounded-3xl shadow-lg border border-primary/30">
                    <img src="https://vdental.com.my/wp-content/uploads/2024/03/room-inner-Large.jpeg" alt="Dental clinic interior" className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
                  </div>
                  <div className="overflow-hidden rounded-3xl shadow-lg border border-primary/30">
                    <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80" alt="Patient consultation" className="h-48 w-full object-cover transition-transform duration-700 hover:scale-110" loading="lazy" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="relative bg-neutral-50 py-20 md:py-32 overflow-hidden section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Our Team" title="Meet Our Dental Experts" subtitle="Experienced, caring professionals dedicated to your oral health." />
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
            {DENTISTS.map((doc, i) => (
              <ScrollReveal key={doc.id} delay={i * 0.15} className="h-full">
                <div className="group overflow-hidden rounded-3xl bg-white shadow-lg shadow-neutral-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 tilt-card border border-primary/30 h-full flex flex-col">
                  <div className="relative h-72 shrink-0 overflow-hidden">
                    <img src={doc.image} alt={doc.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
                    <div className="absolute bottom-5 left-5 text-white">
                      <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>{doc.name}</h3>
                      <p className="text-sm text-secondary-light">{doc.title}</p>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="mb-3 text-xs text-neutral-500 shrink-0">{doc.qualifications}</p>
                    <div className="flex flex-wrap gap-1.5 shrink-0">
                      {doc.specialties.map((s) => (
                        <span key={s} className="rounded-full bg-primary/5 px-3 py-1 text-xs font-medium text-primary">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/dentists" className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary px-9 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-xl">
              View Full Profiles
            </Link>
          </div>
        </div>
      </section>

      {/* Local Trust */}
      <section className="py-20 md:py-32 section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/5 px-5 py-2 text-sm font-semibold text-success">
                  <MapPin className="h-3.5 w-3.5" />
                  Local Favourite
                </span>
                <h2 className="mb-5 text-3xl font-bold text-neutral-900 md:text-4xl" style={{ fontFamily: "var(--font-heading)" }}>
                  SS2&apos;s #1 Choice for Dental Care
                </h2>
                <p className="mb-7 leading-relaxed text-neutral-600">
                  Conveniently located in the heart of SS2, Petaling Jaya, we&apos;re easily accessible to families across the Klang Valley. Our clinic is well-connected via LDP and Federal Highway with ample nearby parking.
                </p>
                <div className="space-y-3 text-sm text-neutral-600">
                  <p>📍 {SITE_CONFIG.address}</p>
                  <p>📞 {SITE_CONFIG.phone}</p>
                  <p>🕐 Mon–Fri: 10AM–9PM &nbsp;|&nbsp; Sat–Sun: 9AM–6PM</p>
                </div>
                <div className="mt-7">
                  <Link href="/contact" className="btn-shine inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-light px-9 py-4 font-bold text-neutral-900 shadow-lg shadow-accent/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    Get Directions
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <BlurReveal delay={0.2}>
              <div className="overflow-hidden rounded-3xl shadow-2xl shadow-neutral-900/10 border border-primary/30">
                <iframe src={SITE_CONFIG.mapEmbedUrl} width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="V Dental Clinic PJ Location" />
              </div>
            </BlurReveal>
          </div>
        </div>
      </section>
    </>
  );
}
