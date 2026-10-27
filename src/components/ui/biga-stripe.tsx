"use client";

import React from "react";

interface BigaStripeProps {
  size?: "xs" | "sm" | "md" | "lg";
  className?: string;
}

export function BigaStripe({ size = "md", className = "" }: BigaStripeProps) {
  const sizeClasses = {
    xs: "h-2.5 w-1 gap-[2px]",
    sm: "h-3.5 w-1.5 gap-[2px]",
    md: "h-5 w-2 gap-[3px]",
    lg: "h-7 w-2.5 gap-1",
  };

  const barClass = {
    xs: "h-2.5 w-1",
    sm: "h-3.5 w-1.5",
    md: "h-5 w-2",
    lg: "h-7 w-2.5",
  };

  return (
    <div
      className={`inline-flex items-center -skew-x-12 select-none ${className}`}
      aria-hidden="true"
    >
      <div className={`flex items-center ${sizeClasses[size]}`}>
        {/* Faixa 1: Vermelho Racing / Maranello */}
        <span className={`${barClass[size]} bg-[#DC2626] rounded-[0.5px] shadow-[0_0_8px_rgba(220,38,38,0.35)]`} />
        {/* Faixa 2: Azul Royal / Motorsport */}
        <span className={`${barClass[size]} bg-[#1852B4] rounded-[0.5px] shadow-[0_0_8px_rgba(24,82,180,0.35)]`} />
        {/* Faixa 3: Cinza Titânio Metálico */}
        <span className={`${barClass[size]} bg-[#717A88] rounded-[0.5px] shadow-[0_0_6px_rgba(113,122,136,0.25)]`} />
      </div>
    </div>
  );
}

export function BigaGradientLine({
  className = "",
  orientation = "horizontal",
}: {
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  if (orientation === "vertical") {
    return (
      <div
        className={`w-[2px] bg-gradient-to-b from-[#DC2626] via-[#1852B4] to-[#717A88] ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`h-[2px] w-full bg-gradient-to-r from-[#DC2626] via-[#1852B4] to-[#717A88] ${className}`}
      aria-hidden="true"
    />
  );
}

export function BigaBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-2.5 py-1 bg-slate-900/90 text-slate-100 border border-slate-700/60 text-[10px] font-mono tracking-widest uppercase shadow-sm ${className}`}
    >
      <BigaStripe size="xs" />
      <span>{children}</span>
    </div>
  );
}
