"use client";

import { useEffect, useState } from "react";
import { Languages } from "lucide-react";

export default function LanguageTranslator({ scrolled }: { scrolled?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Only add if not already present
    if (!document.getElementById("google-translate-script")) {
      const addScript = document.createElement("script");
      addScript.id = "google-translate-script";
      addScript.setAttribute(
        "src",
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
      );
      document.body.appendChild(addScript);

      // Define the callback
      (window as any).googleTranslateElementInit = () => {
        new (window as any).google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,zh-CN,ms",
            autoDisplay: false,
          },
          "google_translate_element"
        );
      };
    }
  }, []);

  const changeLanguage = (lang: string) => {
    if (typeof document !== "undefined") {
      // Set the translation cookie
      const value = `/en/${lang}`;
      document.cookie = `googtrans=${value}; path=/`;
      document.cookie = `googtrans=${value}; domain=${window.location.hostname}; path=/`;
      window.location.reload();
    }
  };

  if (!mounted) return null;

  return (
    <div className="relative group/lang flex items-center">
      {/* Hidden google translate element */}
      <div id="google_translate_element" className="hidden" />

      <button
        className={`flex items-center gap-1.5 transition-colors pl-4 ${
          scrolled ? "text-primary hover:text-primary-dark" : "text-white/80 hover:text-white"
        }`}
      >
        <Languages className="h-4 w-4" />
        <span className="text-sm font-medium">Translate</span>
      </button>

      {/* dropdown menu */}
      <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-xl shadow-2xl border border-neutral-100 opacity-0 invisible group-hover/lang:opacity-100 group-hover/lang:visible transition-all duration-200 overflow-hidden z-[99999] origin-top-right">
        <button
          onClick={() => changeLanguage("en")}
          className="block w-full text-left px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors focus:outline-none"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("zh-CN")}
          className="block w-full text-left px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors focus:outline-none"
        >
          中文 (Chinese)
        </button>
        <button
          onClick={() => changeLanguage("ms")}
          className="block w-full text-left px-4 py-2.5 text-sm text-neutral-700 hover:bg-primary/5 hover:text-primary transition-colors focus:outline-none"
        >
          Bahasa Melayu
        </button>
      </div>
    </div>
  );
}
