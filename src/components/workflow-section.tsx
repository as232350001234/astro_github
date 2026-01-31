"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { RotateCcw, ThumbsUp, ThumbsDown, ChevronRight, Play } from "lucide-react";

export function WorkflowSection() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const editorRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef.ref}
      className={`relative py-24 overflow-hidden transition-all duration-1000 ${
        sectionRef.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/15 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          sectionRef.isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] mb-6 shadow-lg shadow-purple-500/25">
            {/* Copilot-style robot face */}
            <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
              <rect x="8" y="12" width="32" height="24" rx="4" fill="white" fillOpacity="0.9"/>
              <rect x="12" y="18" width="8" height="8" rx="2" fill="#1a1a2e"/>
              <rect x="28" y="18" width="8" height="8" rx="2" fill="#1a1a2e"/>
              <rect x="16" y="30" width="16" height="3" rx="1.5" fill="#1a1a2e"/>
              <rect x="20" y="6" width="8" height="8" rx="4" fill="white" fillOpacity="0.7"/>
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            Accelerate your entire workflow
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From your first line of code to final deployment, GitHub provides AI and automation tools to help you build and ship better software faster.
          </p>
        </div>

        {/* Code editor mockup */}
        <div
          ref={editorRef.ref}
          className={`relative max-w-4xl mx-auto transition-all duration-1000 delay-200 ${
            editorRef.isVisible ? "animate-scale-in" : "opacity-0"
          }`}
        >
          {/* Glow effect behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/25 via-violet-500/20 to-blue-500/25 rounded-2xl blur-[50px] scale-105" />

          {/* Editor card */}
          <div className="relative glass border border-[#30363d] rounded-xl overflow-hidden shadow-2xl">
            {/* Chat message */}
            <div className="p-6 border-b border-[#30363d]">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
                <p className="text-sm text-foreground mb-4 leading-relaxed">
                  The search functionality is now fully implemented. Users can:
                </p>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside mb-5">
                  <li>Search for running races by name using the search box</li>
                  <li>See filtered results matching their search term</li>
                  <li>Navigate through paginated search results</li>
                  <li>The search term is preserved when navigating between pages</li>
                </ol>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                  Is there anything specific about the implementation you&apos;d like me to explain or would you like to update and run tests for validation?
                </p>
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-[#21262d] rounded-lg transition-colors cursor-pointer group">
                    <RotateCcw className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                  <button className="p-2 hover:bg-[#21262d] rounded-lg transition-colors cursor-pointer group">
                    <ThumbsUp className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                  <button className="p-2 hover:bg-[#21262d] rounded-lg transition-colors cursor-pointer group">
                    <ThumbsDown className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Files changed */}
            <div className="p-5 border-b border-[#30363d]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">3 files changed</span>
                <div className="flex items-center gap-2">
                  <button className="px-3 py-1.5 text-xs bg-[#238636] hover:bg-[#2ea043] text-white rounded-md font-medium transition-colors cursor-pointer">
                    Keep
                  </button>
                  <button className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-[#21262d] rounded-md transition-colors cursor-pointer">
                    Undo
                  </button>
                  <button className="p-1.5 hover:bg-[#21262d] rounded-md transition-colors cursor-pointer">
                    <svg className="w-4 h-4 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <path d="M9 3v18M15 3v18"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <FileItem name="race-service.ts" path="src/lib/data" type="ts" />
                <FileItem name="+page.server.ts" path="src/routes" type="ts" isNew />
                <FileItem name="+page.svelte" path="svelte" isNew />
              </div>
            </div>

            {/* Input area */}
            <div className="p-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <button className="flex items-center gap-1.5 px-2 py-1 hover:bg-[#21262d] rounded transition-colors cursor-pointer">
                  <span className="w-5 h-5 rounded bg-[#21262d] flex items-center justify-center text-xs">@</span>
                  <span>Add Context...</span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Edit files in your workspace in agent mode
                </span>
                <div className="flex items-center gap-3 text-sm">
                  <button className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                    Agent
                    <ChevronRight className="w-3 h-3 rotate-90" />
                  </button>
                  <button className="flex items-center gap-1 text-foreground hover:text-accent transition-colors cursor-pointer">
                    Claude 3.5 Sonnet
                    <ChevronRight className="w-3 h-3 rotate-90" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Play button */}
          <div className="absolute -bottom-5 -right-5 w-14 h-14 rounded-full bg-[#21262d] border border-[#30363d] flex items-center justify-center hover:bg-[#30363d] hover:scale-110 transition-all cursor-pointer shadow-lg group">
            <Play className="w-5 h-5 text-foreground ml-0.5" />
          </div>
        </div>

        {/* Bottom content - text + cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className={`transition-all duration-700 delay-300 ${
            editorRef.isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Your AI partner everywhere.
            </h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Copilot is ready to work with you at each step of the software development lifecycle.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1 text-accent hover:underline cursor-pointer group"
            >
              Explore GitHub Copilot
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Cards row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Duolingo card */}
            <div className={`bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-all duration-700 delay-400 hover:border-[#8b949e]/30 cursor-pointer ${
              editorRef.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-full bg-[#58cc02] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="9" cy="10" r="2"/>
                    <circle cx="15" cy="10" r="2"/>
                    <path d="M8 15c0 0 2 3 4 3s4-3 4-3" fill="none" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <span className="font-bold text-lg text-[#58cc02]">duolingo</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                Duolingo boosts developer speed by 25% with GitHub Copilot
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
              >
                Read customer story
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Gartner card */}
            <div className={`bg-[#161b22] border border-[#30363d] rounded-xl p-5 transition-all duration-700 delay-500 hover:border-[#8b949e]/30 cursor-pointer ${
              editorRef.isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="font-bold text-lg text-red-500">Gartner</span>
              </div>
              <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                2025 Gartner Magic Quadrant for AI Code Assistants
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm text-accent hover:underline group"
              >
                Read industry report
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#21262d] border-y border-[#21262d] mt-16">
          <FeatureCard
            title="Automate your path to production"
            description="Ship faster with secure, reliable CI/CD."
            link="Explore GitHub Actions"
          />
          <FeatureCard
            title="Code instantly from anywhere"
            description="Launch a full, cloud-based development environment in seconds."
            link="Explore GitHub Codespaces"
          />
          <FeatureCard
            title="Keep momentum on the go"
            description="Manage projects and assign tasks to Copilot, all from your mobile device."
            link="Explore GitHub Mobile"
          />
          <FeatureCard
            title="Shape your toolchain"
            description="Extend your stack with apps, actions, and AI models."
            link="Explore GitHub Marketplace"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="bg-[#0d1117] p-6 hover:bg-[#161b22] transition-colors cursor-pointer group">
      <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{description}</p>
      <a href="#" className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
        {link}
        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
}

function FileItem({
  name,
  path,
  type,
  isNew = false,
}: {
  name: string;
  path: string;
  type?: string;
  isNew?: boolean;
}) {
  const typeColors: Record<string, string> = {
    ts: "text-blue-400",
    svelte: "text-orange-400",
  };

  return (
    <div className="flex items-center gap-3 text-sm py-1 hover:bg-[#21262d]/50 px-2 -mx-2 rounded transition-colors cursor-pointer group">
      <span className={`font-mono text-xs ${type ? typeColors[type] || "text-muted-foreground" : "text-orange-400"}`}>
        {type ? type.toUpperCase() : "SV"}
      </span>
      <span className="text-foreground">
        {isNew && <span className="text-[#238636]">+</span>}
        {name}
      </span>
      <span className="text-muted-foreground">{path}</span>
    </div>
  );
}
