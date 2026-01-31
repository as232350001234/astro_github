"use client";

import { useState } from "react";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Platform", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Resources", hasDropdown: true },
  { label: "Open Source", hasDropdown: true },
  { label: "Enterprise", hasDropdown: true },
  { label: "Pricing", hasDropdown: false },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/80 backdrop-blur-md border-b border-[#30363d]/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <a href="#" className="text-foreground hover:text-foreground/80 transition-colors cursor-pointer">
              <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
              </svg>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center gap-1 px-3 py-2 text-sm text-foreground/80 hover:text-foreground transition-colors cursor-pointer group"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#21262d]/60 border border-[#30363d] rounded-md text-sm text-muted-foreground hover:border-[#8b949e]/50 transition-all cursor-pointer group">
                <Search className="w-4 h-4 group-hover:text-foreground transition-colors" />
                <span className="group-hover:text-foreground transition-colors">Search or jump to...</span>
                <kbd className="ml-4 px-1.5 py-0.5 bg-[#21262d] border border-[#30363d] rounded text-xs font-mono">/</kbd>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                className="text-foreground/80 hover:text-foreground hover:bg-transparent cursor-pointer"
              >
                Sign in
              </Button>
              <Button
                variant="outline"
                className="border-[#30363d] text-foreground hover:bg-[#21262d] hover:border-[#8b949e]/50 bg-transparent cursor-pointer transition-all"
              >
                Sign up
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 text-foreground hover:bg-[#21262d] rounded-md transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-[#30363d] animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  className="flex items-center justify-between px-3 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-[#21262d] rounded-md transition-colors cursor-pointer"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#30363d]">
                <Button variant="ghost" className="justify-start text-foreground/80 cursor-pointer">
                  Sign in
                </Button>
                <Button variant="outline" className="border-[#30363d] bg-transparent cursor-pointer">
                  Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
