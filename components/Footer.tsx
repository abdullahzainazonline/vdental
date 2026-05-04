"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, ArrowUp, Heart } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-neutral-900 text-neutral-300">
      {/* CTA banner */}
      <div className="relative overflow-hidden animated-gradient-bg">
        {/* Floating shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/5 blur-2xl float-animation" />
          <div className="absolute -bottom-10 -right-10 h-52 w-52 rounded-full bg-white/5 blur-2xl float-reverse" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-14 sm:px-6 md:flex-row lg:px-8">
          <div>
            <h3 className="text-2xl font-bold text-white md:text-3xl" style={{ fontFamily: "var(--font-heading)" }}>
              Ready for a Healthier Smile?
            </h3>
            <p className="mt-2 text-white/70">
              Book your appointment today and experience the V Dental difference.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact#appointment-form"
              className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 font-bold text-neutral-900 transition-all hover:scale-105 hover:bg-accent-light hover:shadow-xl"
            >
              Book Appointment
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/25 px-8 py-3.5 font-semibold text-white transition-all hover:bg-white/10 hover:border-white/40"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="V Dental Clinic Logo"
                width={44}
                height={44}
                className="rounded-2xl"
              />
              <div>
                <span className="block text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>V Dental Clinic</span>
                <span className="block text-xs text-neutral-500 uppercase tracking-wider">PJ — SS2</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              Providing quality dental care to the SS2, Petaling Jaya community for over 15 years. Your comfort and smile are our priority.
            </p>
            <div className="mt-5 flex gap-2">
              {[
                { href: SITE_CONFIG.social.facebook, icon: <Facebook className="h-4.5 w-4.5" />, label: "Facebook" },
                { href: SITE_CONFIG.social.instagram, icon: <Instagram className="h-4.5 w-4.5" />, label: "Instagram" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-neutral-400 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110 hover:shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-secondary-light">
                    <span className="h-1 w-1 rounded-full bg-neutral-700 transition-colors group-hover:bg-secondary-light" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link href={`/services#${s.id}`} className="group flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-secondary-light">
                    <span className="h-1 w-1 rounded-full bg-neutral-700 transition-colors group-hover:bg-secondary-light" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <a
                  href={SITE_CONFIG.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary-light transition-colors"
                >
                  {SITE_CONFIG.address}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-3 text-sm transition-colors hover:text-secondary-light">
                  <Phone className="h-4 w-4 shrink-0 text-secondary" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center gap-3 text-sm transition-colors hover:text-secondary-light">
                  <Mail className="h-4 w-4 shrink-0 text-secondary" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                <div className="space-y-0.5">
                  <p>Mon-Fri: {SITE_CONFIG.hours.weekdays}</p>
                  <p>Sat: {SITE_CONFIG.hours.saturday}</p>
                  <p>Sun: {SITE_CONFIG.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
          <p className="flex flex-wrap items-center gap-1.5 text-xs text-neutral-500">
            © {new Date().getFullYear()} V Dental Clinic PJ. Made with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> in Malaysia. Developed by Brandify Studios.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500">
            <span className="cursor-pointer hover:text-neutral-300 transition-colors">Privacy Policy</span>
            <span className="cursor-pointer hover:text-neutral-300 transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.15, y: -2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 right-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-xl transition-shadow hover:shadow-primary/30"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  );
}
