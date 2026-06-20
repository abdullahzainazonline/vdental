"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

// Desktop 16:9 video
const DESKTOP_ID = "4l3ftp";
// Mobile 9:16 vertical video
const MOBILE_ID  = "d877d1";

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);
  // null = not yet detected (SSR safe)
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  const isInView = useInView(sectionRef, { amount: 0.25, once: false });

  // Detect mobile on client only (avoids SSR mismatch)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 639px)");
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Load & autoplay once in viewport
  useEffect(() => {
    if (isInView && !hasStarted && isMobile !== null) {
      setHasStarted(true);
    }
  }, [isInView, hasStarted, isMobile]);

  const videoId  = isMobile ? MOBILE_ID : DESKTOP_ID;
  const embedSrc = hasStarted
    ? `https://streamable.com/e/${videoId}?autoplay=1&muted=1&mute=1&loop=1`
    : "";

  return (
    <section
      ref={sectionRef}
      id="video-showcase"
      aria-label="V Dental Clinic Video"
      className="vs-root"
    >
      {/* Aspect-ratio box — 9:16 mobile | 16:9 desktop (CSS switches via media query) */}
      <div className="vs-wrapper">
        {embedSrc ? (
          <iframe
            key={videoId}          /* re-mount if video ID switches */
            src={embedSrc}
            className="vs-iframe"
            title="V Dental Clinic Showcase"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className="vs-iframe vs-placeholder" />
        )}
      </div>

      {/* Edge fades to blend cleanly with adjacent sections */}
      <div className="vs-fade vs-fade-top" />
      <div className="vs-fade vs-fade-bottom" />
    </section>
  );
}
