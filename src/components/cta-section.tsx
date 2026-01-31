"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTASection() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef.ref}
      className={`relative pt-24 pb-48 sm:pb-56 overflow-hidden transition-all duration-1000 ${
        sectionRef.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background with 3D Octocats */}
      {/*
        Keep decorative elements behind content (no overlap with footnote/buttons):
        - restrict background height to the bottom area
        - explicit z-index layering
      */}
      <div
        className="absolute inset-x-0 bottom-0 h-56 sm:h-64 md:h-72 flex items-end justify-center overflow-hidden pointer-events-none z-0"
        aria-hidden="true"
      >
        <div className="relative w-full max-w-3xl h-full">
          {/* Purple octocat */}
          <div className="absolute left-1/4 -bottom-4 animate-float">
            <svg width="120" height="140" viewBox="0 0 120 140" fill="none">
              <ellipse cx="60" cy="100" rx="40" ry="35" fill="#8b5cf6" opacity="0.9"/>
              <ellipse cx="60" cy="65" rx="35" ry="30" fill="#a78bfa"/>
              <circle cx="48" cy="58" r="8" fill="white"/>
              <circle cx="72" cy="58" r="8" fill="white"/>
              <circle cx="50" cy="60" r="4" fill="#1e1e2e"/>
              <circle cx="74" cy="60" r="4" fill="#1e1e2e"/>
              <ellipse cx="40" cy="45" rx="10" ry="7" fill="#c4b5fd" transform="rotate(-20 40 45)"/>
              <ellipse cx="80" cy="45" rx="10" ry="7" fill="#c4b5fd" transform="rotate(20 80 45)"/>
            </svg>
          </div>
          {/* Orange octocat */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 animate-float-reverse delay-200">
            <svg width="140" height="160" viewBox="0 0 140 160" fill="none">
              <ellipse cx="70" cy="115" rx="45" ry="40" fill="#f97316" opacity="0.9"/>
              <ellipse cx="70" cy="75" rx="40" ry="35" fill="#fb923c"/>
              <circle cx="55" cy="68" r="9" fill="white"/>
              <circle cx="85" cy="68" r="9" fill="white"/>
              <circle cx="57" cy="70" r="4.5" fill="#1e1e2e"/>
              <circle cx="87" cy="70" r="4.5" fill="#1e1e2e"/>
              <ellipse cx="45" cy="52" rx="11" ry="8" fill="#fdba74" transform="rotate(-20 45 52)"/>
              <ellipse cx="95" cy="52" rx="11" ry="8" fill="#fdba74" transform="rotate(20 95 52)"/>
            </svg>
          </div>
          {/* Yellow octocat */}
          <div className="absolute right-1/4 -bottom-4 animate-float-slow delay-400">
            <svg width="100" height="120" viewBox="0 0 100 120" fill="none">
              <ellipse cx="50" cy="85" rx="35" ry="30" fill="#eab308" opacity="0.9"/>
              <ellipse cx="50" cy="55" rx="30" ry="26" fill="#facc15"/>
              <circle cx="40" cy="50" r="7" fill="white"/>
              <circle cx="60" cy="50" r="7" fill="white"/>
              <circle cx="42" cy="52" r="3.5" fill="#1e1e2e"/>
              <circle cx="62" cy="52" r="3.5" fill="#1e1e2e"/>
              <ellipse cx="35" cy="38" rx="8" ry="6" fill="#fde047" transform="rotate(-20 35 38)"/>
              <ellipse cx="65" cy="38" rx="8" ry="6" fill="#fde047" transform="rotate(20 65 38)"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className={`text-center transition-all duration-700 ${
          sectionRef.isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-4 text-balance leading-tight">
            <span className="italic text-gradient">Millions of developers and</span>
            <br />
            <span className="italic text-gradient">businesses call GitHub home</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
            Whether you&apos;re scaling your development process or just learning how to code, GitHub is where you belong. Join the world&apos;s most widely adopted developer platform to build the technologies that shape what&apos;s next.
          </p>

          {/* CTA Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto">
            <div className="relative flex-1 w-full sm:w-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 bg-[#21262d]/80 border-[#30363d] text-foreground placeholder:text-muted-foreground focus:border-[#58a6ff] focus:ring-1 focus:ring-[#58a6ff] transition-all"
              />
            </div>
            <Button className="w-full sm:w-auto h-12 px-6 bg-[#238636] hover:bg-[#2ea043] text-white font-medium transition-all cursor-pointer">
              Sign up for GitHub
            </Button>
            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 px-6 border-[#30363d] text-foreground hover:bg-[#21262d] hover:border-[#8b949e] bg-transparent transition-all cursor-pointer"
            >
              Try GitHub Copilot free
            </Button>
          </div>

          {/* Footnote */}
          <p className="mt-12 text-sm text-muted-foreground">
            1. GitHub internal customer data, 2025.{" "}
            <a href="#" className="text-accent hover:underline cursor-pointer">↵</a>
          </p>
        </div>
      </div>
    </section>
  );
}
