"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";
import { 
  CheckCircle, ArrowRight, Phone, Star, Shield, 
  Award, Clock, ChevronDown, MapPin, Crosshair, Activity, Syringe, Sparkles, ClipboardPlus, Search, Baby, Zap, Stethoscope, Smile
} from "lucide-react";
import { BlurReveal, StaggerContainer, StaggerItem, FloatingElement } from "@/components/ScrollAnimations";

const IconMap: any = { Crosshair, Activity, Syringe, Sparkles, ClipboardPlus, Shield, Search, Baby, Zap, Stethoscope, Smile };
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { getWhatsAppUrl } from "@/lib/utils";

export default function ServicePageClient({ service, testimonials, gallery, faqs, stats }: any) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Flatten FAQs for this page, pick top 5
  const allFaqs = faqs.flatMap((f: any) => f.items).slice(0, 5);

  return (
    <div className="bg-white">
      {/* 1. Hero Section */}
      <section className="relative flex w-full aspect-[9/16] md:aspect-video items-center justify-center overflow-hidden bg-neutral-900 group">
        <div className="absolute inset-0 z-0">
          <Image 
            src={service.image} 
            alt={service.title}
            fill
            className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-105"
            priority
          />
          {/* Smart gradient to ensure text readability without darkening the whole image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 md:bg-gradient-to-r md:from-black/95 md:via-black/60 md:to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-end md:justify-center h-full pt-28 pb-12 md:py-0">
          <div className="w-full md:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 md:mb-6 flex flex-wrap items-center gap-2 md:gap-3"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/50 bg-primary/20 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-bold text-white backdrop-blur-md">
                <Star className="h-3 w-3 md:h-4 md:w-4 fill-amber-400 text-amber-400" />
                587 Google Reviews
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-bold text-white backdrop-blur-md">
                <Shield className="h-3 w-3 md:h-4 md:w-4 text-emerald-400" />
                MDA Registered
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-4 md:mb-6 text-4xl font-extrabold text-white md:text-6xl lg:text-7xl leading-tight drop-shadow-lg"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {service.title} <br className="hidden md:block"/> in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-secondary-light">Petaling Jaya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 md:mb-10 text-base md:text-xl text-white/90 leading-relaxed max-w-2xl drop-shadow-md"
            >
              {service.metaDescription || service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4"
            >
              <Link href="/contact#appointment-form" className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-bold text-white shadow-xl shadow-primary/30 transition-all hover:scale-105 hover:bg-primary-dark w-full sm:w-auto">
                Book Free Consultation
                <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
              </Link>
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-6 py-3.5 md:px-8 md:py-4 text-sm md:text-base font-bold text-white backdrop-blur-md transition-all hover:bg-white/20 hover:scale-105 hover:border-white w-full sm:w-auto">
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-20 md:py-28 relative">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <BlurReveal>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              What is <span className="text-primary">{service.title}</span>?
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed">
              {service.description} Our approach is centered around patient comfort, precision, and long-term oral health, ensuring you walk away with confidence and a smile that lasts.
            </p>
          </BlurReveal>
        </div>
      </section>

      {/* 3. Treatment Options / Types */}
      <section className="py-20 bg-neutral-50 relative overflow-hidden section-divider">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading badge="Treatment Types" title={`Our ${service.title} Solutions`} subtitle="Explore the options tailored for your specific needs." />
          
          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {service.features.map((feature: any, idx: number) => {
              const fTitle = typeof feature === 'string' ? feature : feature.title;
              const fDesc = typeof feature === 'string' ? '' : feature.desc;
              
              return (
                <StaggerItem key={idx}>
                  <div className="group relative h-full overflow-hidden rounded-3xl bg-white border border-neutral-100 p-8 shadow-md transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-primary/30 z-10">
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-primary/5 to-secondary/5 transition-transform duration-700 group-hover:scale-[3] z-0" />
                    <div className="relative z-10">
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary shadow-sm transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                        {(() => {
                          const IconComponent = IconMap[service.icon] || CheckCircle;
                          return <IconComponent className="h-6 w-6" />;
                        })()}
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary" style={{ fontFamily: "var(--font-heading)" }}>{fTitle}</h3>
                      <p className="text-neutral-600 text-sm leading-relaxed">{fDesc}</p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* 4. Treatment Process */}
      <section className="py-20 md:py-32 relative section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading badge="The Process" title="Your Journey With Us" subtitle="A simple, clear, and comfortable pathway to a better smile." />
          
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p: any, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Connector line for desktop */}
                {i !== service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/20 to-transparent z-0" />
                )}
                
                <div className="relative z-10 flex h-full flex-col items-center text-center p-8 rounded-[2rem] bg-white border-2 border-transparent shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/20 hover:-translate-y-3 group-hover:bg-gradient-to-b group-hover:from-white group-hover:to-primary/5">
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white mb-6 text-2xl font-extrabold text-primary shadow-xl shadow-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:text-white group-hover:shadow-primary/30 border border-primary/10">
                    <span className="absolute inset-0 rounded-full border border-dashed border-primary/30 group-hover:animate-spin-slow"></span>
                    0{i + 1}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{p.step}</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose V Dental? */}
      <section className="py-20 bg-neutral-900 text-white relative overflow-hidden section-divider">
        <div className="absolute inset-0 bg-[url('/V%20Dental%20Website%20images/Hero%20Images/Hero_1_pc.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-secondary-light font-bold tracking-wider text-sm uppercase mb-3 block">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                Excellence in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{service.title}</span>
              </h2>
              <p className="text-white/70 text-lg mb-8">
                With a proven track record and thousands of satisfied patients, V Dental Clinic is your trusted partner for premium dental care.
              </p>
              <ul className="space-y-4 mb-8">
                {stats.map((stat: any, i: number) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 text-white"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-bold text-xl">{stat.value}{stat.suffix}</span>
                      <span className="text-white/70 ml-2">{stat.label}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                  <Award className="h-8 w-8 text-secondary-light mb-4" />
                  <h4 className="text-lg font-bold mb-2">Award Winning</h4>
                  <p className="text-sm text-white/60">Recognized for clinical excellence and patient care.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                  <Shield className="h-8 w-8 text-secondary-light mb-4" />
                  <h4 className="text-lg font-bold mb-2">Safe & Sterilized</h4>
                  <p className="text-sm text-white/60">Strict adherence to international hygiene standards.</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                  <Star className="h-8 w-8 text-secondary-light mb-4" />
                  <h4 className="text-lg font-bold mb-2">Highly Rated</h4>
                  <p className="text-sm text-white/60">587+ 5-star Google reviews from real patients.</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/10">
                  <MapPin className="h-8 w-8 text-secondary-light mb-4" />
                  <h4 className="text-lg font-bold mb-2">Prime Location</h4>
                  <p className="text-sm text-white/60">Conveniently located in SS2, Petaling Jaya.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Before & After Gallery (If relevant) */}
      {gallery && gallery.length > 0 && (
        <section className="py-20 md:py-32 bg-neutral-50 section-divider">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading badge="Real Results" title="Patient Transformations" subtitle="See the life-changing results achieved at our clinic." />
            <div className="mt-12 flex flex-wrap justify-center gap-8">
              {gallery.slice(0, 4).map((item: any, idx: number) => (
                <div key={idx} className="w-full max-w-[550px] overflow-hidden rounded-3xl bg-white shadow-2xl shadow-primary/5 border border-primary/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-primary/20">
                  <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} alt={item.title} />
                  <div className="p-8 text-center bg-gradient-to-b from-white to-neutral-50">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Link href="/gallery" className="btn-shine inline-flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-white">
                View Full Gallery
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 7. Pricing Transparency & 8. Patient Testimonials */}
      <section className="py-20 relative overflow-hidden section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            <div className="lg:col-span-5 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Shield className="w-32 h-32 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4" style={{ fontFamily: "var(--font-heading)" }}>Honest & Transparent Pricing</h3>
              <p className="text-neutral-600 mb-8 leading-relaxed">
                We believe in complete transparency. Pricing varies by case complexity, but we always provide a detailed breakdown before any treatment begins.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-neutral-800 font-medium">0% Interest Payment Plans Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-neutral-800 font-medium">Accepts Most Insurance Panels</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-neutral-800 font-medium">No Hidden Fees</span>
                </div>
              </div>
              <Link href="/contact#appointment-form" className="w-full inline-flex justify-center items-center gap-2 rounded-xl bg-neutral-900 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-neutral-800">
                Get a Quote
              </Link>
            </div>

            <div className="lg:col-span-7">
              <SectionHeading badge="Testimonials" title="What Our Patients Say" subtitle="Read real experiences from people like you." />
              <div className="mt-8 space-y-6">
                {testimonials.map((t: any, i: number) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white rounded-[2rem] p-6 md:p-8 shadow-xl shadow-neutral-900/5 border border-neutral-100 flex flex-col sm:flex-row gap-6 items-start transition-all duration-300 hover:shadow-2xl hover:border-primary/20"
                  >
                    <div className="flex flex-col items-center gap-2 shrink-0 sm:w-28 bg-neutral-50 p-4 rounded-2xl border border-neutral-100">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md mb-1">
                        <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
                      </div>
                      <span className="text-[10px] font-bold text-neutral-500 text-center uppercase tracking-wider leading-tight">Google<br/>Review</span>
                      <div className="flex mt-1">
                        {[...Array(t.rating)].map((_, j) => (
                          <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 pt-2">
                      <h4 className="font-bold text-lg text-neutral-900 mb-1">{t.name}</h4>
                      <p className="text-xs text-primary font-bold uppercase tracking-wider mb-4 inline-block bg-primary/5 px-3 py-1 rounded-full">{t.service}</p>
                      <p className="text-neutral-600 text-[15px] italic leading-relaxed">"{t.text}"</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-neutral-50 section-divider">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading badge="FAQ" title="Common Questions" subtitle="Everything you need to know about this treatment." />
          <div className="mt-12 space-y-4">
            {allFaqs.map((faq: any, i: number) => (
              <div 
                key={i} 
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${openFaq === i ? "border-primary bg-white shadow-md" : "border-neutral-200 bg-transparent hover:border-primary/50 hover:bg-white"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold transition-colors ${openFaq === i ? "text-primary" : "text-neutral-800"}`}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-primary" : "text-neutral-400"}`} />
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${openFaq === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-neutral-600 whitespace-pre-wrap text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Replaced CTA Section with cleaner spacing */}
      <div className="pb-24 bg-neutral-50" />
    </div>
  );
}
