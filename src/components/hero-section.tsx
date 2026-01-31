"use client";

import React, { useEffect, useState } from "react"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, MessageSquare, Play } from "lucide-react";

export function HeroSection() {
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [ideOpacity, setIdeOpacity] = useState(1);
  const [heroProgress, setHeroProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const max = Math.max(520, window.innerHeight * 0.85);
      // GitHub-like hero transition:
      // - headline/copy fades out
      // - IDE mockup subtly drifts + scales
      // - background glow ramps up
      const progress = Math.min(1, scrollY / max);
      setHeroProgress(progress);
      setScrollOpacity(1 - progress);
      setIdeOpacity(1 - (progress * 0.08));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="gh-hero relative min-h-screen pt-32 pb-20 overflow-hidden"
      style={{ ["--hero-progress" as any]: heroProgress } as React.CSSProperties}
    >
      {/* GitHub-like aurora background (pure CSS) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="gh-hero-bg" />
        <div className="gh-hero-bg-noise" />
        <div className="gh-hero-bg-bottom" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div
          className="text-center mb-12 animate-fade-in-up"
          style={{ opacity: scrollOpacity, transform: `translateY(${(1 - scrollOpacity) * -20}px)` }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-foreground mb-6 leading-tight">
            <span className="italic text-gradient">The future of building</span>
            <br />
            <span className="italic text-gradient">happens together</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty leading-relaxed">
            Tools and trends evolve, but collaboration endures. With GitHub,
            developers, agents, and code come together on one platform.
          </p>

          {/* CTA Form */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-xl mx-auto" style={{ opacity: scrollOpacity }}>
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
        </div>

        {/* 3D Octocats floating */}
        <div className="relative h-32 mb-8" style={{ opacity: Math.max(0, scrollOpacity) }}>
          <div className="absolute left-1/2 -translate-x-20 top-0 animate-float">
            <OctocatPurple />
          </div>
          <div className="absolute left-1/2 translate-x-8 top-4 animate-float-reverse delay-200">
            <OctocatOrange />
          </div>
          <div className="absolute left-1/2 translate-x-32 top-12 animate-float-slow delay-400">
            <OctocatYellow />
          </div>
        </div>

        {/* IDE Mockup */}
        <div
          className="relative mt-8 animate-scale-in"
          style={{ opacity: ideOpacity }}
        >
          {/* IDE shell: ultra-thin border + purple glow (matches GitHub feel) */}
          <div className="relative max-w-5xl mx-auto gh-hero-ide-shell">
            <div className="gh-hero-ide-glow" />

            <div className="relative gh-hero-ide-surface overflow-hidden">
            {/* Window controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#30363d] bg-[#161b22]">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56] cursor-pointer hover:brightness-110 transition-all" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] cursor-pointer hover:brightness-110 transition-all" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f] cursor-pointer hover:brightness-110 transition-all" />
              </div>
            </div>

            <div className="flex">
              {/* Left sidebar - Activity bar */}
              <div className="hidden md:flex flex-col items-center gap-4 py-4 px-2 bg-[#0d1117] border-r border-[#30363d]">
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
                  </svg>
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                  </svg>
                </button>
                <button className="p-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                </button>
                <button className="p-2 text-foreground bg-[#21262d] rounded transition-colors cursor-pointer">
                  <MessageSquare className="w-5 h-5" />
                </button>
              </div>

              {/* Copilot Chat Panel */}
              <div className="hidden md:flex flex-col w-[320px] border-r border-[#30363d] bg-[#0d1117]">
                <div className="px-4 py-3 border-b border-[#30363d] flex items-center justify-between">
                  <span className="text-xs text-muted-foreground font-medium tracking-wide">GITHUB COPILOT: CHAT</span>
                  <button className="p-1 hover:bg-[#21262d] rounded transition-colors cursor-pointer">
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
                
                <div className="flex-1 p-4 overflow-y-auto text-sm">
                  {/* Copilot avatar and welcome message */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-foreground">GitHub Copilot</span>
                      </div>
                      <p className="text-foreground">Hi <span className="text-[#58a6ff]">@monalisa</span>, how can I help you?</p>
                    </div>
                  </div>

                  {/* AI disclaimer */}
                  <div className="text-muted-foreground text-xs leading-relaxed">
                    <p>{"I'm powered by AI, so surprises and mistakes are possible. Make sure to verify any generated code or suggestions, and share feedback so that we can learn and improve."}</p>
                  </div>
                </div>

                {/* Copy button on left side */}
                <div className="absolute bottom-20 left-2">
                  <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-[#21262d] rounded transition-colors cursor-pointer">
                    <MessageSquare className="w-5 h-5" />
                  </button>
                </div>

                {/* Chat input */}
                <div className="p-3 border-t border-[#30363d]">
                  <div className="flex items-center gap-2 px-3 py-2 bg-[#21262d] rounded-lg border border-[#30363d] focus-within:border-[#58a6ff] transition-all">
                    <input 
                      type="text" 
                      placeholder="Ask a question or type '/' for commands"
                      className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                    />
                    <button className="p-1 hover:bg-[#30363d] rounded transition-colors cursor-pointer">
                      <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Code Editor */}
              <div className="flex-1 bg-[#0d1117]">
                {/* Tabs */}
                <div className="flex items-center border-b border-[#30363d] bg-[#161b22] overflow-x-auto">
                  <EditorTab name="game.ts" icon="TS" active />
                  <EditorTab name="characters.module.css" icon="#" />
                  <EditorTab name="bonus-level.ts" icon="TS" />
                </div>

                {/* Code content */}
                <div className="p-4 font-mono text-xs overflow-x-auto">
                  <CodeLine num={58} content={<><span className="syntax-comment">{"// Create score texts"}</span></>} />
                  <CodeLine num={59} content={<><span className="syntax-variable">this</span>.player1ScoreText = <span className="syntax-variable">this</span>.add.<span className="syntax-function">text</span>(<span className="syntax-number">16</span>, <span className="syntax-number">16</span>, <span className="syntax-string">{"'Player 1: 0'"}</span>, {"{"} fontSize: <span className="syntax-string">{"'32px'"}</span> {"}"});</>} />
                  <CodeLine num={60} content={<><span className="syntax-variable">this</span>.player2ScoreText = <span className="syntax-variable">this</span>.add.<span className="syntax-function">text</span>(<span className="syntax-number">300</span>, <span className="syntax-number">16</span>, <span className="syntax-string">{"'Player 2: 0'"}</span>, {"{"} fontSize: <span className="syntax-string">{"'32px'"}</span> {"}"});</>} />
                  <CodeLine num={61} content={<><span className="syntax-comment">{"// Add collision detection for scoring"}</span></>} />
                  <CodeLine num={62} content={<><span className="syntax-variable">this</span>.physics.world.<span className="syntax-function">on</span>(<span className="syntax-string">{'"worldbounds"'}</span>, (body) ={">"} {"{"}</>} />
                  <CodeLine num={63} content={<>{"  "}<span className="syntax-keyword">if</span> (body.gameObject === <span className="syntax-variable">this</span>.ball) {"{"}</>} />
                  <CodeLine num={64} content={<>{"    "}<span className="syntax-keyword">if</span> (body.blocked.left) {"{"}</>} />
                  <CodeLine num={65} content={<>{"      "}<span className="syntax-variable">this</span>.player2Score += <span className="syntax-number">1</span>;</>} />
                  <CodeLine num={66} content={<>{"      "}<span className="syntax-variable">this</span>.player2ScoreText.<span className="syntax-function">setText</span>(<span className="syntax-string">{"`Player 2: ${this.player2Score}`"}</span>);</>} />
                  <CodeLine num={67} content={<>{"    }"} <span className="syntax-keyword">else if</span> (body.blocked.right) {"{"}</>} />
                  <CodeLine num={68} content={<>{"      "}<span className="syntax-variable">this</span>.player1Score += <span className="syntax-number">1</span>;</>} />
                  <CodeLine num={69} content={<>{"      "}<span className="syntax-variable">this</span>.player1ScoreText.<span className="syntax-function">setText</span>(<span className="syntax-string">{"`Player 1: ${this.player1Score}`"}</span>);</>} />
                  <CodeLine num={70} content={<>{"    }"}</>} />
                  <CodeLine num={71} content={<>{"  }"}</>} />
                  <CodeLine num={72} content={<>{"});"}</>} />
                  <CodeLine num={73} content={<>{"}"}</>} />
                  <CodeLine num={74} />
                  <CodeLine num={75} content={<><span className="syntax-function">update</span>() {"{"}</>} />
                  <CodeLine num={76} content={<>{"  "}<span className="syntax-comment">{"// Player 1 controls"}</span></>} />
                  <CodeLine num={77} content={<>{"  "}<span className="syntax-keyword">if</span> (<span className="syntax-variable">this</span>.cursors.left.isDown) {"{"}</>} />
                  <CodeLine num={78} content={<>{"    "}<span className="syntax-variable">this</span>.player1.<span className="syntax-function">setVelocityX</span>(<span className="syntax-number">-200</span>);</>} />
                  <CodeLine num={79} content={<>{"  }"}</>} />
                </div>
              </div>
            </div>

            {/* Play button */}
            <div className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center hover:bg-[#30363d] transition-all cursor-pointer group">
              <Play className="w-5 h-5 text-foreground ml-0.5 group-hover:scale-110 transition-transform" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EditorTab({ name, icon, active = false }: { name: string; icon: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 border-r border-[#30363d] cursor-pointer transition-colors ${
      active ? "bg-[#0d1117] text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-[#21262d]"
    }`}>
      <span className={`text-xs font-medium ${icon === "TS" ? "text-blue-400" : "text-pink-400"}`}>{icon}</span>
      <span className="text-sm whitespace-nowrap">{name}</span>
      <button className="ml-2 p-0.5 hover:bg-[#30363d] rounded opacity-0 hover:opacity-100 transition-opacity">
        <X className="w-3 h-3" />
      </button>
    </div>
  );
}

function CodeLine({ num, content }: { num: number; content?: React.ReactNode }) {
  return (
    <div className="flex hover:bg-[#161b22] transition-colors group">
      <span className="w-12 text-right pr-4 text-muted-foreground/50 select-none">{num}</span>
      <span className="text-foreground">{content}</span>
    </div>
  );
}

function OctocatPurple() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
      <ellipse cx="40" cy="50" rx="25" ry="20" fill="#8b5cf6" opacity="0.9"/>
      <ellipse cx="40" cy="35" rx="20" ry="18" fill="#a78bfa"/>
      <circle cx="32" cy="32" r="5" fill="white"/>
      <circle cx="48" cy="32" r="5" fill="white"/>
      <circle cx="33" cy="33" r="2.5" fill="#1e1e2e"/>
      <circle cx="49" cy="33" r="2.5" fill="#1e1e2e"/>
      <ellipse cx="28" cy="24" rx="6" ry="4" fill="#c4b5fd" transform="rotate(-20 28 24)"/>
      <ellipse cx="52" cy="24" rx="6" ry="4" fill="#c4b5fd" transform="rotate(20 52 24)"/>
    </svg>
  );
}

function OctocatOrange() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
      <ellipse cx="35" cy="45" rx="22" ry="18" fill="#f97316" opacity="0.9"/>
      <ellipse cx="35" cy="32" rx="18" ry="16" fill="#fb923c"/>
      <circle cx="28" cy="29" r="4" fill="white"/>
      <circle cx="42" cy="29" r="4" fill="white"/>
      <circle cx="29" cy="30" r="2" fill="#1e1e2e"/>
      <circle cx="43" cy="30" r="2" fill="#1e1e2e"/>
      <ellipse cx="24" cy="22" rx="5" ry="3.5" fill="#fdba74" transform="rotate(-20 24 22)"/>
      <ellipse cx="46" cy="22" rx="5" ry="3.5" fill="#fdba74" transform="rotate(20 46 22)"/>
    </svg>
  );
}

function OctocatYellow() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <ellipse cx="30" cy="40" rx="18" ry="14" fill="#eab308" opacity="0.9"/>
      <ellipse cx="30" cy="28" rx="15" ry="13" fill="#facc15"/>
      <circle cx="24" cy="26" r="3.5" fill="white"/>
      <circle cx="36" cy="26" r="3.5" fill="white"/>
      <circle cx="25" cy="27" r="1.75" fill="#1e1e2e"/>
      <circle cx="37" cy="27" r="1.75" fill="#1e1e2e"/>
      <ellipse cx="21" cy="20" rx="4" ry="3" fill="#fde047" transform="rotate(-20 21 20)"/>
      <ellipse cx="39" cy="20" rx="4" ry="3" fill="#fde047" transform="rotate(20 39 20)"/>
    </svg>
  );
}
