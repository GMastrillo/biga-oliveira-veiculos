"use client";

import { useRef, useState, MouseEvent } from "react";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "default" | "blue" | "red";
}

export function SpotlightCard({
  children,
  className = "",
  glowColor = "default",
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const gradientMap = {
    default: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(24, 82, 180, 0.14), rgba(220, 38, 38, 0.06), transparent 70%)`,
    blue: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(24, 82, 180, 0.20), rgba(37, 99, 235, 0.08), transparent 70%)`,
    red: `radial-gradient(500px circle at ${position.x}px ${position.y}px, rgba(220, 38, 38, 0.18), rgba(239, 68, 68, 0.06), transparent 70%)`,
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500 z-10"
        style={{
          opacity,
          background: gradientMap[glowColor],
        }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
}
