"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronRight } from "lucide-react";

const tabs = ["By industry", "By size", "By use case"];

const customers = [
  {
    id: "figma",
    name: "Figma",
    logo: <FigmaLogo />,
    category: "Technology",
    description: "Figma streamlines development and strengthens security",
  },
  {
    id: "mercedes",
    name: "Mercedes-Benz",
    logo: <MercedesBenzLogo />,
    category: "Automotive",
    description: "Mercedes-Benz standardizes source code and automates onboarding",
  },
  {
    id: "mercado",
    name: "Mercado Libre",
    logo: <MercadoLibreLogo />,
    category: "Financial services",
    description: "Mercado Libre cuts coding time by 50%",
  },
] as const;

type CustomerId = (typeof customers)[number]["id"];

export function CustomersSection() {
  // Keep this section fully CSS-driven for hover effects.
  // (Astro renders this as static HTML by default; no client hydration needed.)
  const activeTab = "By industry";
  const sectionRef = useScrollAnimation<HTMLElement>();
  const cardsRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef.ref}
      className={`relative py-24 overflow-hidden transition-all duration-1000 ${
        sectionRef.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            sectionRef.isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#f9a825] via-[#ffc107] to-[#ffb300] mb-6 shadow-lg shadow-orange-500/30">
            {/* 3D-style yellow Octocat face */}
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              {/* Face base - darker orange for shadow */}
              <ellipse cx="28" cy="38" rx="20" ry="14" fill="#e69500" />
              {/* Face highlight */}
              <ellipse cx="28" cy="32" rx="18" ry="16" fill="#ffc107" />
              <ellipse cx="28" cy="28" rx="15" ry="13" fill="#ffd54f" />
              {/* Eyes */}
              <ellipse cx="21" cy="26" rx="5" ry="6" fill="white" />
              <ellipse cx="35" cy="26" rx="5" ry="6" fill="white" />
              {/* Pupils */}
              <circle cx="22" cy="27" r="2.5" fill="#1a1a2e" />
              <circle cx="36" cy="27" r="2.5" fill="#1a1a2e" />
              {/* Eye shine */}
              <circle cx="23" cy="25" r="1" fill="white" />
              <circle cx="37" cy="25" r="1" fill="white" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4 text-balance leading-tight">
            <span className="italic text-gradient">From startups to enterprises,</span>
            <br />
            <span className="italic text-gradient">GitHub scales with teams</span>
            <br />
            <span className="italic text-gradient">of any size in any industry.</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="inline-flex bg-[#21262d]/50 rounded-full p-1 border border-[#30363d]">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab
                    ? "bg-[#21262d] text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Customer cards - vertical dividers created by gap-px on dark background */}
        <div
          ref={cardsRef.ref}
          className={`grid md:grid-cols-3 gap-px bg-[#21262d] border-y border-[#21262d] transition-all duration-700 ${
            cardsRef.isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          {customers.map((customer) => {
            return (
              <div
                key={customer.id}
                className="customer-card relative bg-[#0d1117] cursor-pointer group overflow-hidden transition-[transform] duration-300 hover:z-10"
              >
                {/* Hover background (blurred, per-card) */}
                <div
                  className="customer-card__hoverbg absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {/* Soft highlight at top like GitHub */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8b949e]/12 via-transparent to-transparent" />
                  {/* Blur blobs */}
                  <CustomerHoverBackdrop theme={customer.id} />
                  {/* Bottom darken overlay to keep text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/65 to-transparent" />
                </div>

                {/* Hover border + subtle elevation */}
                <div
                  className="customer-card__hoverborder absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <div className="absolute inset-0 ring-1 ring-inset ring-[#30363d]/80 shadow-[0_0_0_1px_rgba(48,54,61,0.35),0_24px_64px_rgba(0,0,0,0.40)]" />
                </div>

                {/* Content */}
                <div className="relative p-8 min-h-[320px] flex flex-col justify-between">
                  {/* Logo */}
                  <div className="mb-auto">{customer.logo}</div>

                  {/* Text content */}
                  <div className="mt-auto">
                    <span className="text-sm text-muted-foreground mb-2 block">
                      {customer.category}
                    </span>
                    <h3 className="text-lg font-medium text-foreground mb-4 leading-snug">
                      {customer.description}
                    </h3>
                    <a
                      href="#"
                      className="customer-card__link inline-flex items-center gap-1 text-sm text-accent hover:underline opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Read customer story
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom links */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-1 text-accent hover:underline cursor-pointer group"
          >
            Explore customer stories
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer group"
          >
            View all solutions
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CustomerHoverBackdrop({ theme }: { theme: CustomerId }) {
  switch (theme) {
    case "figma":
      return (
        <>
          <div className="absolute top-[14%] left-[22%] w-56 h-56 rounded-full bg-[#7c3aed]/22 blur-[80px]" />
          <div className="absolute top-[26%] right-[18%] w-44 h-44 rounded-full bg-[#ef4444]/22 blur-[70px]" />
          <div className="absolute top-[52%] left-[54%] w-36 h-36 rounded-full bg-[#ec4899]/14 blur-[60px]" />
        </>
      );
    case "mercedes":
      return (
        <>
          <div className="absolute top-[10%] left-[20%] w-72 h-72 rounded-full bg-[#94a3b8]/18 blur-[95px]" />
          <div className="absolute top-[22%] right-[16%] w-56 h-56 rounded-full bg-[#60a5fa]/14 blur-[85px]" />
          <div className="absolute top-[58%] left-[58%] w-40 h-40 rounded-full bg-[#22d3ee]/10 blur-[70px]" />
        </>
      );
    case "mercado":
      return (
        <>
          <div className="absolute top-[12%] left-[18%] w-72 h-72 rounded-full bg-[#94a3b8]/16 blur-[95px]" />
          <div className="absolute top-[28%] right-[12%] w-60 h-60 rounded-full bg-[#34d399]/10 blur-[90px]" />
          <div className="absolute top-[60%] left-[56%] w-44 h-44 rounded-full bg-[#60a5fa]/12 blur-[80px]" />
        </>
      );
    default:
      return null;
  }
}

function FigmaLogo() {
  return (
    <span className="text-3xl font-semibold text-foreground tracking-tight">
      Figma
    </span>
  );
}

function MercedesBenzLogo() {
  return (
    <div className="flex items-center gap-3 text-foreground">
      <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
        <circle
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 2v10l8.66 5M12 12l-8.66 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
      <span className="text-lg font-light tracking-wide">Mercedes-Benz</span>
    </div>
  );
}

function MercadoLibreLogo() {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
        <path
          d="M12 24c0-4.4 3.6-8 8-8s8 3.6 8 8"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="15" cy="18" r="2" fill="currentColor" />
        <circle cx="25" cy="18" r="2" fill="currentColor" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold">mercado</span>
        <span className="text-lg font-bold text-[#ffe600]">libre</span>
      </div>
    </div>
  );
}
