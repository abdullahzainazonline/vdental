"use client";

import HeroSlider from "@/components/HeroSlider";
import ServiceCard from "@/components/ServiceCard";
import CounterStats from "@/components/CounterStats";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import BookingForm from "@/components/BookingForm";
import SectionHeading from "@/components/SectionHeading";
import {
  ScrollReveal,
  FloatingElement,
  BlurReveal,
  StaggerContainer,
  StaggerItem,
  ScaleReveal,
  ParallaxSection
} from "@/components/ScrollAnimations";
import { SERVICES, SITE_CONFIG, VALUES } from "@/lib/constants";
import { Heart, Cpu, Award, Shield, Clock, Users, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import MagneticButton from "@/components/MagneticButton";

const whyChooseIcons: Record<string, React.ReactNode> = {
  Heart: <Heart className="h-6 w-6" />,
  Cpu: <Cpu className="h-6 w-6" />,
  Award: <Award className="h-6 w-6" />,
};

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Services Preview */}
      <section className="relative bg-neutral-50 py-20 md:py-32 overflow-hidden section-divider">
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/5 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionHeading
              badge="Our Services"
              title="Comprehensive Dental Solutions"
              subtitle="From routine checkups to complex treatments, we provide a full range of dental services under one roof."
            />
          </motion.div>
          <div className="flex flex-wrap justify-center gap-7">
            {SERVICES.map((service, i) => (
              <div key={service.id} className="w-full sm:w-[calc(50%-14px)] lg:w-[calc(33.33%-19px)]">
                <ServiceCard
                  title={service.title}
                  shortDesc={service.shortDesc}
                  icon={service.icon}
                  id={service.id}
                  image={service.image}
                  index={i}
                />
              </div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-12 text-center"
          >
            <MagneticButton>
              <Link
                href="/services"
                className="btn-shine group inline-flex items-center gap-2.5 rounded-full bg-primary px-9 py-4 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:scale-105 hover:bg-primary-light hover:shadow-xl hover:shadow-primary/30"
              >
                View All Services
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </MagneticButton>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 md:py-32 overflow-hidden dot-pattern section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Why V Dental"
            title="Why Choose us?"
            subtitle="V stands for our Visions, to deliver exceptional service, personalised attention and outstanding results to every patient."
          />
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <ScrollReveal direction="right" duration={0.8}>
              <div className="relative overflow-hidden rounded-3xl h-full min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-110"
                  style={{ backgroundImage: 'url("/V Dental Website images/Home Page/Why Choose Us Banner/Home_WhyChooseUs_Bg.jpg")' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md">
                    Advanced Technology
                  </div>
                  <h3 className="mb-2 text-3xl font-bold text-white">Modern & Comfortable</h3>
                  <p className="text-white/80">Experience pain-free dentistry in a relaxing, spa-like environment equipped with the latest dental tech.</p>
                </div>
              </div>
            </ScrollReveal>

            <StaggerContainer className="flex flex-col justify-center gap-6">
              {VALUES.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="group flex gap-5 rounded-2xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/5 border border-transparent hover:border-primary/10">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      {whyChooseIcons[item.icon]}
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-neutral-500">{item.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Trust badges */}
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { icon: <Shield className="h-5 w-5" />, text: "MDA Registered", color: "from-primary/10 to-primary/5" },
              { icon: <Clock className="h-5 w-5" />, text: "Open 7 Days", color: "from-secondary/10 to-secondary/5" },
              { icon: <Users className="h-5 w-5" />, text: "Family Friendly", color: "from-accent/10 to-accent/5" },
              { icon: <Sparkles className="h-5 w-5" />, text: "5-Star Reviews", color: "from-success/10 to-success/5" },
            ].map((item, i) => (
              <ScrollReveal key={item.text} delay={i * 0.1} direction="up">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`flex items-center gap-3 rounded-2xl bg-gradient-to-br ${item.color} p-4 backdrop-blur-sm transition-shadow hover:shadow-lg cursor-default border border-secondary/30`}
                >
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-sm font-semibold text-neutral-700">{item.text}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CounterStats />

      {/* Testimonials */}
      <section className="relative bg-neutral-50 py-20 md:py-32 overflow-hidden section-divider">
        <div className="absolute top-10 right-10 pointer-events-none">
          <FloatingElement yRange={20} duration={8}>
            <div className="h-20 w-20 rounded-full bg-primary/5 blur-xl" />
          </FloatingElement>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Testimonials"
            title="What Our Patients Say"
            subtitle="Real stories from real patients who trust V Dental Clinic for their family dental care."
          />
          <TestimonialCarousel />
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative overflow-hidden py-20 md:py-32 section-divider">
        {/* Background decoration */}
        <div className="absolute inset-0 dot-pattern" />
        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div>
                <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-5 py-2 text-sm font-semibold text-accent">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Book Today
                </span>
                <h2 className="mb-5 text-3xl font-bold text-neutral-900 md:text-5xl" style={{ fontFamily: "var(--font-heading)" }}>
                  Ready for a{" "}
                  <span className="gradient-text">Brighter Smile</span>?
                </h2>
                <p className="mb-8 text-lg text-neutral-500 leading-relaxed">
                  Do not wait for dental problems to worsen. Schedule your appointment today and let our experienced team take care of your smile.
                </p>
                <div className="flex flex-col gap-4">
                  {[
                    "Same-day emergency appointments available",
                    "All insurance panels accepted",
                    "Flexible payment plans for major treatments",
                  ].map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 text-neutral-600"
                    >
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-success/10">
                        <div className="h-2 w-2 rounded-full bg-success" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <BookingForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-neutral-50 section-divider">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <BlurReveal>
            <div className="overflow-hidden rounded-3xl shadow-xl shadow-neutral-900/10 border border-primary/30">
              <iframe
                src={SITE_CONFIG.mapEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="V Dental Clinic PJ Location"
                className="w-full"
              />
            </div>
          </BlurReveal>
          <div className="mt-4 text-center">
            <a
              href={SITE_CONFIG.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-400 hover:text-primary transition-colors"
            >
              📍 {SITE_CONFIG.address}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
