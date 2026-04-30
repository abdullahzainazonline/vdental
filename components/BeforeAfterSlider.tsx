"use client";

import React, { useState, useRef, useEffect } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  alt: string;
}

export default function BeforeAfterSlider({ beforeImage, afterImage, alt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    let newPosition = ((clientX - left) / width) * 100;
    newPosition = Math.max(0, Math.min(100, newPosition)); // Clamp between 0 and 100
    setSliderPosition(newPosition);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handlePointerDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    // Optional: Immediately move to clicked position
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
    handleMove(clientX);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mouseup", handlePointerUp);
      window.addEventListener("touchend", handlePointerUp);
    } else {
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    }
    return () => {
      window.removeEventListener("mouseup", handlePointerUp);
      window.removeEventListener("touchend", handlePointerUp);
    };
  }, [isDragging]);

  return (
    <div 
      className="relative w-full h-full overflow-hidden select-none group/slider touch-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
    >
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt={`${alt} - After`} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
        draggable="false" 
        loading="lazy" 
      />
      <div className="absolute inset-0 pointer-events-none">
        <span className="absolute bottom-2 right-2 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          After
        </span>
      </div>

      {/* Before Image (Foreground, clipped) */}
      <img 
        src={beforeImage} 
        alt={`${alt} - Before`} 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none will-change-transform" 
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        draggable="false" 
        loading="lazy" 
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <span className="absolute bottom-2 left-2 rounded-full bg-neutral-900/70 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
          Before
        </span>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute inset-y-0 flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-[3px] h-full bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"></div>
        <div className="absolute w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-lg border-2 border-primary text-primary transition-transform group-hover/slider:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-180 absolute">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
