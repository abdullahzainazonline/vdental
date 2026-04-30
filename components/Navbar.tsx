"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, ChevronRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import LanguageTranslator from "./LanguageTranslator";

const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Returns { isOpen, label } based on current Malaysia time vs clinic hours */
function useClinicStatus() {
  const getStatus = () => {
    // Use Malaysia timezone (UTC+8)
    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" })
    );
    const day = now.getDay(); // 0=Sun, 1=Mon, …, 6=Sat
    const h = now.getHours();
    const m = now.getMinutes();
    const totalMins = h * 60 + m;

    let openMin: number;
    let closeMin: number;
    let hoursLabel: string;

    if (day === 0) {
      // Sunday 10:00 – 16:00
      openMin = 10 * 60;
      closeMin = 16 * 60;
      hoursLabel = SITE_CONFIG.hours.sunday;
    } else if (day === 6) {
      // Saturday 09:00 – 18:00
      openMin = 9 * 60;
      closeMin = 18 * 60;
      hoursLabel = SITE_CONFIG.hours.saturday;
    } else {
      // Mon-Fri 09:00 – 21:00
      openMin = 9 * 60;
      closeMin = 21 * 60;
      hoursLabel = SITE_CONFIG.hours.weekdays;
    }

    const open = totalMins >= openMin && totalMins < closeMin;
    return { isOpen: open, hoursLabel };
  };

  const [status, setStatus] = useState(getStatus);

  useEffect(() => {
    const tick = () => setStatus(getStatus());
    const id = setInterval(tick, 60_000); // re-check every minute
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return status;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { isOpen: clinicOpen, hoursLabel } = useClinicStatus();

  useEffect(() => {
    const handleScroll = () => {
      // Hero is now a single viewport height, switch after 80% of it
      const threshold = pathname === "/" ? window.innerHeight * 0.8 : 20;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 border-b ${scrolled
          ? "bg-white/90 shadow-lg shadow-primary/5 backdrop-blur-xl border-primary/10"
          : "bg-transparent border-transparent"
          }`}
      >
        {/* Top bar */}
        <div
          className={`relative z-[110] hidden border-b border-white/10 text-sm transition-all duration-500 md:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "bg-transparent py-2 text-white backdrop-blur-md"
            }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-white/80">
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                    clinicOpen ? "bg-success" : "bg-red-400"
                  }`}
                />
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${
                    clinicOpen ? "bg-success" : "bg-red-400"
                  }`}
                />
              </span>
              {clinicOpen
                ? `Open Now — ${hoursLabel}`
                : `Closed · Opens ${hoursLabel.split("–")[0].trim()}`}
            </div>
            <div className="flex items-center gap-6">
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="flex items-center gap-1.5 text-white/80 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5" />
                {SITE_CONFIG.phone}
              </a>
              <span className="text-white/30">|</span>
              <span className="text-white/60">📍 SS2, Petaling Jaya</span>
              <span className="text-white/30">|</span>
              <LanguageTranslator scrolled={scrolled} />
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className={`relative h-12 w-12 overflow-hidden rounded-xl p-1 backdrop-blur-md transition-all duration-500 ${scrolled
              ? "bg-primary/10 border border-primary/20 shadow-inner"
              : "bg-white/10 border border-white/10 hover:bg-white/20"
              }`}>
              <img src="/logo.svg" alt="V Dental Logo" className="h-full w-full object-contain" />
            </div>
            <div>
              <span
                className={`block text-lg font-bold leading-tight transition-colors duration-300 ${scrolled ? "text-primary-dark" : "text-white"
                  }`}
                style={{ fontFamily: "var(--font-heading)" }}
              >
                V Dental
              </span>
              <span
                className={`block text-[11px] font-medium tracking-wider uppercase transition-colors duration-300 ${scrolled ? "text-neutral-400" : "text-white/60"
                  }`}
              >
                Clinic & Surgery
              </span>
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${isActive
                    ? scrolled
                      ? "text-primary"
                      : "text-white"
                    : scrolled
                      ? "text-neutral-600 hover:text-primary hover:bg-primary/5"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact#appointment-form"
              className={`hidden items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 sm:inline-flex ${scrolled
                ? "bg-accent text-neutral-900 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:scale-105"
                : "bg-accent/90 text-neutral-900 backdrop-blur-sm hover:bg-accent hover:scale-105"
                }`}
            >
              <Calendar className="h-4 w-4" />
              Book Now
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-xl p-2.5 transition-all duration-300 lg:hidden ${scrolled ? "text-neutral-900 hover:bg-neutral-100" : "text-white hover:bg-white/15"
                }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Scroll progress indicator */}
        <ScrollProgress scrolled={scrolled} />
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-neutral-100 p-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-white font-bold" style={{ fontFamily: "var(--font-heading)" }}>V</div>
                  <span className="text-lg font-bold text-primary-dark" style={{ fontFamily: "var(--font-heading)" }}>V Dental</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="rounded-xl p-2 text-neutral-400 hover:bg-neutral-50 hover:text-neutral-600 transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5">
                <div className="space-y-1">
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, ease: EASE_SMOOTH }}
                      >
                        <Link
                          href={link.href}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-all duration-200 ${isActive
                            ? "bg-primary/5 text-primary"
                            : "text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                            }`}
                        >
                          {link.label}
                          <ChevronRight className={`h-4 w-4 transition-colors ${isActive ? "text-primary" : "text-neutral-300"}`} />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="mt-8 space-y-3"
                >
                  <Link
                    href="/contact#appointment-form"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-neutral-900 shadow-md shadow-accent/20 transition-all hover:bg-accent-light"
                  >
                    <Calendar className="h-5 w-5" />
                    Book Appointment
                  </Link>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/20 px-6 py-3.5 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white hover:border-primary"
                  >
                    <Phone className="h-5 w-5" />
                    Call Us
                  </a>
                </motion.div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ScrollProgress({ scrolled }: { scrolled: boolean }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  if (!scrolled) return null;

  return (
    <div className="h-0.5 w-full bg-neutral-100">
      <motion.div
        className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
