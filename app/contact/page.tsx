"use client";

import { motion } from "framer-motion";
import { ScrollReveal, BlurReveal, FloatingElement, StaggerContainer, StaggerItem } from "@/components/ScrollAnimations";
import SectionHeading from "@/components/SectionHeading";
import BookingForm from "@/components/BookingForm";
import { SITE_CONFIG } from "@/lib/constants";
import { MapPin, Phone, Mail, Clock, MessageCircle, Facebook, Instagram, Star, Sparkles } from "lucide-react";

const contactCards = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Call Us",
    main: SITE_CONFIG.phone,
    sub: "Mon–Fri 9AM–9PM",
    href: `tel:${SITE_CONFIG.phoneRaw}`,
    color: "from-primary to-primary-light",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    main: SITE_CONFIG.whatsapp,
    sub: "Quick replies guaranteed",
    href: `https://wa.me/${SITE_CONFIG.whatsappRaw}`,
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    main: SITE_CONFIG.email,
    sub: "We reply within 24 hours",
    href: `mailto:${SITE_CONFIG.email}`,
    color: "from-secondary to-secondary-light",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Visit Us",
    main: "155, Jalan SS2/24, SS2",
    sub: "47300 Petaling Jaya, Selangor",
    href: SITE_CONFIG.mapUrl,
    color: "from-accent to-accent-light",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-neutral-900 section-divider">
        <div className="absolute inset-0 ken-burns bg-cover bg-center opacity-40 hidden sm:block" style={{ backgroundImage: "url('/V Dental Website images/Contact Page/Contact_Hero_Bg_pc.jpg')" }} />
        <div className="absolute inset-0 ken-burns bg-cover bg-center opacity-40 block sm:hidden" style={{ backgroundImage: "url('/V Dental Website images/Contact Page/Contact_Hero_Bg_mobile.jpg')" }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement delay={0.5} yRange={15} xRange={8} duration={10} className="absolute top-[25%] right-[15%]">
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
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-4xl font-bold text-white md:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get In Touch
            <br />
            <span className="text-secondary-light">With Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-xl text-lg text-white/70 leading-relaxed"
          >
            Have questions? Want to book an appointment? We&apos;re here to help. Reach out through any of the channels below.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Cards */}
      <section className="relative py-20 md:py-28 overflow-hidden section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {contactCards.map((card) => (
              <StaggerItem key={card.title}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block overflow-hidden rounded-3xl bg-white p-7 shadow-lg shadow-neutral-900/5 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 tilt-card border border-primary/30"
                >
                  <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${card.color} text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}>
                    {card.icon}
                  </div>
                  <h3 className="mb-1 text-sm font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>{card.title}</h3>
                  <p className="text-base font-semibold text-primary">{card.main}</p>
                  <p className="mt-1 text-xs text-neutral-400">{card.sub}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Booking Form & Map */}
      <section id="appointment-form" className="relative bg-neutral-50 py-20 md:py-32 overflow-hidden section-divider scroll-mt-28">
        <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="Book Now" title="Schedule Your Visit" subtitle="Fill in the form below and we'll confirm your appointment within 24 hours." />
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            <ScrollReveal direction="left">
              <BookingForm />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="space-y-6">
                <BlurReveal>
                  <div className="overflow-hidden rounded-3xl shadow-2xl shadow-neutral-900/10 border border-primary/30">
                    <iframe src={SITE_CONFIG.mapEmbedUrl} width="100%" height="350" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="V Dental Clinic PJ - SS2" />
                  </div>
                </BlurReveal>

                {/* Operating Hours */}
                <div className="rounded-3xl bg-white p-7 shadow-lg shadow-neutral-900/5 border border-primary/30">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-neutral-900" style={{ fontFamily: "var(--font-heading)" }}>Operating Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    {[
                      { day: "Monday – Friday", time: SITE_CONFIG.hours.weekdays, open: true },
                      { day: "Saturday", time: SITE_CONFIG.hours.saturday, open: true },
                      { day: "Sunday", time: SITE_CONFIG.hours.sunday, open: true },
                      { day: "Public Holiday", time: SITE_CONFIG.hours.publicHoliday, open: true },
                    ].map((h) => (
                      <div key={h.day} className="flex items-center justify-between rounded-xl bg-neutral-50 px-4 py-3 border border-neutral-200/50">
                        <span className="font-medium text-neutral-700">{h.day}</span>
                        <span className={`font-semibold ${h.open ? "text-success" : "text-neutral-400"}`}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-neutral-500">Follow us:</span>
                  <a href={SITE_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href={SITE_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href={SITE_CONFIG.social.google} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110">
                    <Star className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
