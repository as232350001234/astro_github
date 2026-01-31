"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play } from "lucide-react";

const tabs = [
  { id: "code", label: "Code" },
  { id: "plan", label: "Plan" },
  { id: "collaborate", label: "Collaborate" },
  { id: "automate", label: "Automate" },
  { id: "secure", label: "Secure" },
];

const tabDescriptions: Record<string, string> = {
  code: "Write, test, and fix code quickly with GitHub Copilot, from simple boilerplate to complex features.",
  plan: "Organize everything from high-level roadmaps to everyday tasks.",
  collaborate: "Keep your team's conversation and context next to your code.",
  automate: "Improve your software development process by automating builds, tests, and deployments with CI/CD.",
  secure: "Find and fix vulnerabilities automatically with built-in security features.",
};

const companyLogos = [
  { name: "Spotify", logo: <SpotifyLogo /> },
  { name: "Vodafone", logo: <VodafoneLogo /> },
  { name: "American Airlines", logo: <AmericanAirlinesLogo /> },
  { name: "Duolingo", logo: <DuolingoLogo /> },
  { name: "EY", logo: <EYLogo /> },
  { name: "Ford", logo: <FordLogo /> },
  { name: "Infosys", logo: <InfosysLogo /> },
  { name: "Mercado Libre", logo: <MercadoLibreLogo /> },
  { name: "Mercedes-Benz", logo: <MercedesLogo /> },
  { name: "Shopify", logo: <ShopifyLogo /> },
  { name: "PHILIPS", logo: <PhilipsLogo /> },
  { name: "Société Générale", logo: <SocieteGeneraleLogo /> },
];

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("code");
  const sectionRef = useScrollAnimation<HTMLElement>();
  const tabsRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section
      ref={sectionRef.ref}
      className={`relative py-20 overflow-hidden transition-all duration-1000 ${
        sectionRef.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Tabs */}
      <div
        ref={tabsRef.ref}
        className={`max-w-[1400px] mx-auto px-4 sm:px-6 mb-8 transition-all duration-700 ${
          tabsRef.isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="flex flex-wrap justify-center">
          <div className="inline-flex bg-[#21262d]/50 rounded-full p-1 border border-[#30363d]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#21262d] text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-muted-foreground max-w-2xl mx-auto mt-8 text-pretty leading-relaxed">
          {tabDescriptions[activeTab]}
        </p>
      </div>

      {/* Company logos marquee */}
      <div className="relative mt-16 overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee">
          <div className="flex items-center gap-16 px-8">
            {[...companyLogos, ...companyLogos].map((company, idx) => (
              <div
                key={`${company.name}-${idx}`}
                className="flex-shrink-0 opacity-50 hover:opacity-80 transition-opacity cursor-pointer grayscale hover:grayscale-0"
              >
                {company.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Company Logo Components
function SpotifyLogo() {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
      <span className="text-lg font-semibold">Spotify</span>
    </div>
  );
}

function VodafoneLogo() {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 6v12M8 10l4-4 4 4" fill="none" stroke="currentColor" strokeWidth="2"/>
      </svg>
      <span className="text-lg font-medium">vodafone</span>
    </div>
  );
}

function AmericanAirlinesLogo() {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 12l4-4v3h12V8l4 4-4 4v-3H6v3l-4-4z"/>
      </svg>
      <span className="text-lg font-light tracking-wide">American Airlines</span>
    </div>
  );
}

function DuolingoLogo() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-[#58cc02] flex items-center justify-center">
        <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="9" cy="10" r="2"/>
          <circle cx="15" cy="10" r="2"/>
          <path d="M8 15c0 0 2 3 4 3s4-3 4-3"/>
        </svg>
      </div>
      <span className="text-xl font-bold text-[#58cc02]">duolingo</span>
    </div>
  );
}

function EYLogo() {
  return (
    <span className="text-2xl font-bold text-foreground tracking-tight">EY</span>
  );
}

function FordLogo() {
  return (
    <div className="px-4 py-1 border-2 border-current rounded-lg text-foreground">
      <span className="text-xl font-serif italic">Ford</span>
    </div>
  );
}

function InfosysLogo() {
  return (
    <span className="text-xl font-semibold text-foreground">Infosys</span>
  );
}

function MercadoLibreLogo() {
  return (
    <div className="flex items-center gap-1 text-foreground">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm4 0h-2v-2h2v2zm-6-4V8h6v4h-6z"/>
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-semibold">mercado</span>
        <span className="text-xs text-[#ffe600]">libre</span>
      </div>
    </div>
  );
}

function MercedesLogo() {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2v10l8.66 5M12 12l-8.66 5" fill="none" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
      <span className="text-sm font-light tracking-wide">Mercedes-Benz</span>
    </div>
  );
}

function ShopifyLogo() {
  return (
    <div className="flex items-center gap-1 text-foreground">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.337 3.415c-.024-.147-.143-.22-.29-.22-.146 0-2.912.002-2.912.002s-1.937-1.884-2.125-2.072c-.187-.187-.55-.132-.693-.087l-.952.295c-.107-.327-.296-.629-.548-.868-.433-.41-1.015-.635-1.68-.635-1.316 0-2.388 1.073-2.967 2.7L1.592 3.115c-.543.169-.559.186-.63.7L0 14.384l10.666 2.006 5.334-.993V3.728c0-.156-.002-.285-.026-.313zm-4.15-.697l-1.533.475c0-.457-.063-.891-.188-1.278.764.152 1.322.782 1.72 1.803zm-2.75.85L5.972 4.41c.3-.972.877-1.804 1.747-1.804.341 0 .608.086.818.23-.445.574-.695 1.428-.695 2.732l-.005.001zm1.168-3.095c.106 0 .212.01.314.03-.62.292-1.127.98-1.376 2.028l-1.26.39c.341-1.23.963-2.448 2.322-2.448z"/>
      </svg>
      <span className="text-lg font-semibold">shopify</span>
    </div>
  );
}

function PhilipsLogo() {
  return (
    <span className="text-2xl font-bold tracking-wider text-foreground">PHILIPS</span>
  );
}

function SocieteGeneraleLogo() {
  return (
    <div className="flex items-center gap-2 text-foreground">
      <div className="w-6 h-6 bg-current" />
      <div className="flex flex-col leading-none text-sm">
        <span className="font-bold">SOCIETE</span>
        <span className="font-bold">GENERALE</span>
      </div>
    </div>
  );
}
