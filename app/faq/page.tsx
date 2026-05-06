"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal, BlurReveal, FloatingElement } from "@/components/ScrollAnimations";
import { FAQS, SITE_CONFIG } from "@/lib/constants";
import { Search, Plus, Minus, Phone, MessageCircle, Sparkles } from "lucide-react";

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");

  const categories = FAQS.map((f) => f.category);

  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) {
      const cat = FAQS.find((f) => f.category === activeCategory);
      return cat ? cat.items : [];
    }
    const q = searchQuery.toLowerCase();
    const results: { q: string; a: string }[] = [];
    FAQS.forEach((cat) =>
      cat.items.forEach((item) => {
        if (item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)) {
          results.push(item);
        }
      })
    );
    return results;
  }, [searchQuery, activeCategory]);

  const toggleItem = (question: string) => {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(question)) next.delete(question);
      else next.add(question);
      return next;
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden bg-neutral-900 section-divider">
        <div className="absolute inset-0 ken-burns bg-cover bg-center opacity-40 hidden sm:block" style={{ backgroundImage: "url('/V Dental Website images/FAQ Page/FAQ_Hero_Bg_pc.jpg')" }} />
        <div className="absolute inset-0 ken-burns bg-cover bg-center opacity-40 block sm:hidden" style={{ backgroundImage: "url('/V Dental Website images/FAQ Page/FAQ_Hero_Bg_mobile.jpg')" }} />
        <div className="hero-overlay absolute inset-0" />
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <FloatingElement delay={0} yRange={18} duration={11} className="absolute top-[20%] right-[10%]">
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
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-4xl font-bold text-white md:text-5xl lg:text-7xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Frequently Asked
            <br />
            <span className="text-secondary-light">Questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="max-w-xl text-lg text-white/70 leading-relaxed"
          >
            Find quick answers to common questions about our services, treatments, payments, and more.
          </motion.p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Search & FAQ */}
      <section className="relative py-20 md:py-32 overflow-hidden section-divider">
        <div className="absolute top-0 right-0 h-72 w-72 translate-x-1/3 -translate-y-1/3 rounded-full bg-primary/5 blur-3xl" />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <ScrollReveal>
            <div className="group relative mb-12">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-neutral-400 transition-colors duration-300 group-focus-within:text-primary" />
              </div>
              <input
                type="text"
                placeholder="Search for a question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-2xl border border-neutral-200 bg-white py-4 pl-13 pr-5 text-neutral-900 shadow-sm transition-all duration-300 focus:border-primary/30 focus:outline-none focus:ring-4 focus:ring-primary/10 focus:shadow-lg"
              />
            </div>
          </ScrollReveal>

          {/* Category Tabs */}
          {!searchQuery && (
            <div className="mb-10 flex flex-wrap justify-center gap-2.5">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenItems(new Set()); }}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${activeCategory === cat
                      ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20"
                      : "border border-neutral-200 bg-white text-neutral-600 hover:border-primary/30 hover:text-primary"
                    }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cat}
                </motion.button>
              ))}
            </div>
          )}

          {/* Search result indicator */}
          {searchQuery && (
            <p className="mb-6 text-sm text-neutral-500">
              Found <span className="font-bold text-primary">{filteredItems.length}</span> result{filteredItems.length !== 1 ? "s" : ""} for &ldquo;{searchQuery}&rdquo;
            </p>
          )}

          {/* Accordion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={searchQuery ? "search" : activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {filteredItems.map((item, i) => {
                const isOpen = openItems.has(item.q);
                return (
                  <motion.div
                    key={item.q}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="overflow-hidden rounded-2xl border border-primary/30 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/10"
                  >
                    <button
                      onClick={() => toggleItem(item.q)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200"
                    >
                      <span className="text-[15px] font-semibold text-neutral-900">{item.q}</span>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${isOpen ? "bg-primary text-white rotate-0" : "bg-neutral-100 text-neutral-500"}`}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-neutral-50 px-6 pb-5 pt-3 text-sm leading-relaxed text-neutral-600 whitespace-pre-line">
                            {item.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
              {filteredItems.length === 0 && (
                <div className="py-16 text-center">
                  <p className="text-neutral-400">No matching questions found. Try a different search term.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="bg-neutral-50 py-20 section-divider">
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
                  Still Have Questions?
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-lg text-white/70">
                  Our friendly team is ready to help. Contact us through any channel and we&apos;ll get back to you quickly.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="btn-shine inline-flex items-center gap-2 rounded-full bg-white px-9 py-4 font-bold text-primary shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                  <a href={`https://wa.me/${SITE_CONFIG.whatsappRaw}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-9 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:scale-105">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp
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
