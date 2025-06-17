'use client'

import React, { useRef, useEffect, useState, ReactNode } from "react";

interface CurtainRevealProps {
  children: ReactNode;
  direction?: "left" | "right";
  duration?: number; // in ms
}

const CurtainReveal: React.FC<CurtainRevealProps> = ({
  children,
  direction = "left",
  duration = 900,
}) => {
  const [revealed, setRevealed] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;

    let observer: IntersectionObserver | null = null;

    // Only reveal when the element enters the viewport
    observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            if (observer) observer.disconnect();
          }
        });
      },
      {
        threshold: 0.3, // Reveal when 30% visible
      }
    );

    observer.observe(ref);

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", overflow: "hidden" }}
      className="curtain-reveal-container"
    >
      <div
      className="curtain"
      style={{
        position: "absolute",
        top: 0,
        left: direction === "left" ? 0 : undefined,
        right: direction === "right" ? 0 : undefined,
        width: "100%",
        height: "100%",
        background: '#ffffff',
        backgroundImage: 'linear-gradient(268deg,rgba(255, 255, 255, 1) 0%, rgba(43, 127, 255, 1) 100%)',
        zIndex: 2,
        transform:
        revealed
          ? direction === "left"
          ? "translateX(-100%)"
          : "translateX(100%)"
          : "translateX(0%)",
        transition: `transform ${duration}ms cubic-bezier(0.77,0,0.175,1)`,
        borderRadius: "inherit",
        pointerEvents: "none",
      }}
      />
      <div
      style={{
        position: "relative",
        zIndex: 1,
        opacity: revealed ? 1 : 0.7,
        transition: `opacity 300ms ease ${duration / 2}ms`,
      }}
      >
      {children}
      </div>
    </div>
  );
};

export default CurtainReveal;
