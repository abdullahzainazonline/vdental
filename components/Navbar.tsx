"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Calendar, ChevronRight, ChevronDown, ArrowRight, Drill, AlignCenter, Syringe, Sparkles, Stethoscope, Shield, ScanLine, Baby, AlertTriangle, Scissors, Smile } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SERVICES } from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";
import { trackCall, trackWhatsApp } from "@/lib/gtag";
import { WhatsAppIcon } from "./WhatsAppButton";

const IconMap: any = { Drill, AlignCenter, Syringe, Sparkles, Stethoscope, Shield, ScanLine, Baby, AlertTriangle, Scissors, Smile };
const EASE_SMOOTH: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Returns { isOpen, label } based on current Malaysia time vs clinic hours */
function useClinicStatus() {
  const getStatus = () => {
    const now = new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Kuala_Lumpur" })
    );
    const day = now.getDay();
    const h = now.getHours();
    const m = now.getMinutes();
    const totalMins = h * 60 + m;

    let openMin: number;
    let closeMin: number;
    let hoursLabel: string;

    if (day === 0) {
      openMin = 10 * 60;
      closeMin = 16 * 60;
      hoursLabel = SITE_CONFIG.hours.sunday;
    } else {
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
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { isOpen: clinicOpen, hoursLabel } = useClinicStatus();

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = isHome ? window.innerHeight * 0.8 : 20;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname, isHome]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 border-b ${scrolled
          ? "bg-[#FFF0ED]/95 shadow-lg shadow-primary/5 backdrop-blur-xl border-primary/10" : "bg-transparent border-transparent"
          }`}
      >
        {/* Top bar */}
        <div
          className={`relative z-[110] hidden border-b border-white/10 text-sm transition-all duration-500 md:block ${scrolled ? "h-0 overflow-hidden opacity-0" : "bg-transparent py-2 backdrop-blur-sm text-white/95"}`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span
                  className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${clinicOpen ? "bg-success" : "bg-red-500"
                    }`}
                />
                <span
                  className={`relative inline-flex h-2 w-2 rounded-full ${clinicOpen ? "bg-success" : "bg-red-500"
                    }`}
                />
              </span>
              {clinicOpen
                ? `Open Now — ${hoursLabel}`
                : `Closed · Opens ${hoursLabel.split("–")[0].trim()}`}
            </div>
            <div className="flex items-center gap-6">
              <a href={`tel:${SITE_CONFIG.phoneRaw}`} onClick={trackCall} className="flex items-center gap-1.5 transition-colors hover:text-white">
                <Phone className="h-3.5 w-3.5" />
                {SITE_CONFIG.phone}
              </a>
              <span className="text-white/40">|</span>
              <span className="text-white font-medium">📍 SS2, Petaling Jaya</span>
            </div>
          </div>
        </div>

        {/* Main nav */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <div className="relative flex h-14 sm:h-18 w-auto items-center justify-center rounded-md px-2 transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/black_logo.png"
                alt="V Dental Clinic Logo"
                width={200}
                height={40}
                className={`h-full w-auto object-contain transition-all duration-300 ${scrolled ? 'mix-blend-multiply opacity-100' : 'opacity-100'}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.filter(link => link.label !== "About Us").map((link) => {
              const isServices = link.label === "Services";
              const isActive = pathname === link.href || (isServices && pathname.startsWith('/services'));
              const linkColor = scrolled
                ? (isActive ? "text-primary" : "text-neutral-600 hover:text-primary hover:bg-primary/5")
                : (isActive ? "text-white font-extrabold drop-shadow-md" : "text-white/90 hover:text-white hover:bg-white/10 drop-shadow-sm");

              if (isServices) {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown('services')}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 rounded-xl px-4 py-2 text-[15px] font-bold transition-all duration-300 ${linkColor}`}
                    >
                      {link.label}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                      {isActive && (
                        <motion.div
                          layoutId="nav-active"
                          className="absolute -bottom-0.5 left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-primary to-secondary"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </Link>

                    {/* Mega Menu Dropdown */}
                    <AnimatePresence>
                      {activeDropdown === 'services' && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute left-1/2 top-full mt-2 w-[850px] -translate-x-1/2 rounded-3xl bg-white p-6 shadow-2xl border border-neutral-100 flex gap-6 z-[120]"
                        >
                          {/* Left Side: General Image & All Services CTA */}
                          <div className="w-1/3 rounded-2xl bg-neutral-50 p-6 flex flex-col justify-between relative overflow-hidden group/all">
                            <div className="absolute inset-0 z-0">
                              <Image src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=500&q=80" alt="All Services" fill className="object-cover opacity-20 transition-transform duration-700 group-hover/all:scale-110" />
                              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-primary/40 mix-blend-multiply" />
                            </div>
                            <div className="relative z-10 text-white mt-auto">
                              <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Comprehensive Dental Care</h4>
                              <p className="text-white/90 text-sm mb-6 leading-relaxed">Explore our full range of professional and cosmetic treatments.</p>
                              <Link href="/services" onClick={() => setActiveDropdown(null)} className="inline-flex items-center gap-2 bg-white text-primary px-5 py-2.5 rounded-full text-sm font-bold shadow-lg hover:scale-105 hover:bg-neutral-50 transition-all w-full justify-center">
                                View All Services <ArrowRight className="h-4 w-4" />
                              </Link>
                            </div>
                          </div>

                          {/* Right Side: Services Grid */}
                          <div className="w-2/3 grid grid-cols-2 gap-x-4 gap-y-1">
                            {SERVICES.map((s) => (
                              <Link
                                key={s.id}
                                href={`/services/${s.id}`}
                                onClick={() => setActiveDropdown(null)}
                                className="group/item flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/5 transition-colors"
                              >
                                <div className="h-9 w-9 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors shrink-0 shadow-sm">
                                  {(() => {
                                    const Icon = IconMap[s.icon] || ChevronRight;
                                    return <Icon className="h-4 w-4" />;
                                  })()}
                                </div>
                                <div>
                                  <h5 className="text-sm font-bold text-neutral-800 group-hover/item:text-primary transition-colors line-clamp-1">{s.title}</h5>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-xl px-4 py-2 text-[15px] font-bold transition-all duration-300 ${linkColor}`}
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
            <a
              href={getWhatsAppUrl(SITE_CONFIG.whatsappRaw)}
              onClick={trackWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 sm:inline-flex ${scrolled ? "bg-accent text-neutral-900 shadow-md shadow-accent/20 hover:shadow-lg hover:shadow-accent/30 hover:scale-105" : "bg-accent/90 text-neutral-900 backdrop-blur-sm hover:bg-accent hover:scale-105"}`}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Book Appointment
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`rounded-xl p-2.5 transition-all duration-300 lg:hidden ${scrolled ? "text-neutral-900 hover:bg-neutral-100" : "text-white hover:bg-white/20"}`}
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
            className="fixed inset-0 z-[110] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-primary/10 p-5 bg-[#FFF0ED]">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
                  <div className="relative flex h-12 w-auto items-center justify-center rounded-md">
                    <Image
                      src="/black_logo.png"
                      alt="V Dental Clinic Logo"
                      width={150} height={50}
                      className="h-full w-auto object-contain mix-blend-multiply"
                      priority
                    />
                  </div>
                </Link>
                <button onClick={() => setIsOpen(false)} className="rounded-xl p-2 text-neutral-400 hover:bg-white/50 hover:text-neutral-800 transition-colors">
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-5">
                <div className="space-y-1">
                  {NAV_LINKS.filter(link => link.label !== "About Us").map((link, i) => {
                    const isServices = link.label === "Services";
                    const isActive = pathname === link.href || (isServices && pathname.startsWith('/services'));

                    if (isServices) {
                      return (
                        <motion.div
                          key={link.href}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.06, ease: EASE_SMOOTH }}
                          className="space-y-1"
                        >
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold transition-all duration-200 ${isActive ? "bg-primary/5 text-primary" : "text-neutral-600 hover:bg-neutral-50 hover:text-primary"
                              }`}
                          >
                            {link.label}
                            <ChevronDown className={`h-5 w-5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180 text-primary" : "text-neutral-300"}`} />
                          </button>
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden px-2"
                              >
                                <div className="border-l-2 border-primary/20 ml-4 pl-4 py-2 space-y-3">
                                  <Link href="/services" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-sm font-bold text-primary">
                                    <ArrowRight className="h-3 w-3" /> All Services Overview
                                  </Link>
                                  {SERVICES.map(s => (
                                    <Link
                                      key={s.id}
                                      href={`/services/${s.id}`}
                                      onClick={() => setIsOpen(false)}
                                      className={`block text-sm transition-colors ${pathname === `/services/${s.id}` ? 'text-primary font-bold' : 'text-neutral-500 hover:text-primary font-medium'}`}
                                    >
                                      {s.title}
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    }

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.06, ease: EASE_SMOOTH }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold transition-all duration-200 ${isActive
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
                  <a
                    href={getWhatsAppUrl(SITE_CONFIG.whatsappRaw)}
                    onClick={trackWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-neutral-900 shadow-md shadow-accent/20 transition-all hover:bg-accent-light"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Book Appointment
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.phoneRaw}`}
                    onClick={trackCall}
                    className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary/20 px-6 py-3.5 text-base font-bold text-primary transition-all hover:bg-primary hover:text-primary-dark hover:border-primary"
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