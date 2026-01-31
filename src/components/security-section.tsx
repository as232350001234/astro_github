"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronRight } from "lucide-react";

export function SecuritySection() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const cardRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef.ref}
      className="relative py-24 overflow-hidden"
    >
      {/* Background glow (subtle, like GitHub) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[650px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 translate-x-1/3 w-[700px] h-[550px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className={`text-center mb-16 ${sectionRef.isVisible ? "animate-fade-in-up" : ""}`}>
          <div className="inline-flex items-center justify-center mb-6">
            <ShieldCheck3D className="gh-shield-icon w-16 h-16" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance italic">
            Built-in application security
            <br />
            where found means fixed
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Use AI to find and fix vulnerabilities so your team can ship more secure software faster.
          </p>
        </div>

        {/* Security demo panel (matches GitHub: thin border + purple glow + hero image) */}
        <div
          ref={cardRef.ref}
          className={`relative max-w-[1200px] mx-auto ${cardRef.isVisible ? "animate-scale-in" : ""}`}
        >
          <div className="gh-security-panel">
            <div className="gh-security-panel__glow" />
            <div className="gh-security-panel__particles" />

            <div className="gh-security-panel__content grid lg:grid-cols-2 gap-10 p-8 sm:p-10 lg:p-12 min-h-[420px] items-end">
              {/* Left content (bottom aligned) */}
              <div className="max-w-md">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4">
                  Apply fixes in seconds. <span className="text-muted-foreground font-normal">Spend less time debugging and more time building features with Copilot Autofix.</span>
                </h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-accent hover:underline cursor-pointer group"
                >
                  Explore GitHub Advanced Security
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right hero image */}
              <div className="relative w-full flex justify-center lg:justify-end">
                <img
                  src="/assets/security-hero.webp"
                  alt="Copilot Autofix identifies vulnerable code and provides a secure fix"
                  loading="lazy"
                  decoding="async"
                  className="w-[560px] max-w-full rounded-2xl shadow-[0_0_0_1px_rgba(240,246,252,0.10),0_24px_80px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-px bg-[#21262d] border-y border-[#21262d] mt-16">
          <FeatureCard
            title="Security debt, solved."
            description="Leverage security campaigns and Copilot Autofix to reduce application vulnerabilities."
            link="Learn about GitHub Code Security"
          />
          <FeatureCard
            title="Dependencies you can depend on."
            description="Update vulnerable dependencies with supported fixes for breaking changes."
            link="Learn about Dependabot"
          />
          <FeatureCard
            title="Your secrets, your business."
            description="Detect, prevent, and remediate leaked secrets across your organization."
            link="Learn about GitHub Secret Protection"
          />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-3xl mx-auto">
          <div className={`text-center ${cardRef.isVisible ? "animate-fade-in-up" : ""}`}>
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              70% <span className="text-lg font-normal text-muted-foreground">MTTR reduction</span>
            </div>
            <p className="text-sm text-muted-foreground">with Copilot Autofix<sup>1</sup></p>
          </div>
          <div className={`text-center ${cardRef.isVisible ? "animate-fade-in-up" : ""}`}>
            <div className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
              8.3M <span className="text-lg font-normal text-muted-foreground">secret leaks stopped</span>
            </div>
            <p className="text-sm text-muted-foreground">in the past 12 months with push protection<sup>1</sup></p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ShieldCheck3D({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ghShieldA" x1="18" y1="6" x2="48" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7EE7FF" />
          <stop offset="0.35" stopColor="#3B82F6" />
          <stop offset="1" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="ghShieldB" x1="20" y1="10" x2="44" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="0.55" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
        <filter id="ghGlow" x="-50%" y="-50%" width="200%" height="200%" colorInterpolationFilters="sRGB">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.55 0"
            result="glow"
          />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Outer glow */}
      <g filter="url(#ghGlow)">
        {/* Shield body */}
        <path
          d="M32 5.8c7.3 5.1 14.6 6.8 20.6 7.6v18.1c0 14.4-9.3 23.2-20.6 26.7C20.7 54.7 11.4 45.9 11.4 31.5V13.4c6-0.8 13.3-2.5 20.6-7.6Z"
          fill="url(#ghShieldA)"
        />
        {/* Inner highlight */}
        <path
          d="M32 9.2c6.1 4.2 12.2 5.6 17.2 6.3v16.2c0 12.1-7.7 19.6-17.2 22.6C22.5 51.3 14.8 43.8 14.8 31.7V15.5c5-0.7 11.1-2.1 17.2-6.3Z"
          fill="url(#ghShieldB)"
          opacity="0.55"
        />
        {/* Check mark */}
        <path
          d="M28.2 34.4 24 30.2a1.6 1.6 0 0 0-2.3 2.3l5.2 5.2c.7.7 1.8.7 2.4 0L43 24a1.6 1.6 0 1 0-2.3-2.3L28.2 34.4Z"
          fill="#EAF2FF"
          opacity="0.95"
        />
      </g>
    </svg>
  );
}

function FeatureCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link?: string;
}) {
  return (
    <div className="bg-[#0d1117] p-6">
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      {link && (
        <a href="#" className="inline-flex items-center gap-1 text-sm text-accent hover:underline cursor-pointer group">
          {link}
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </div>
  );
}
