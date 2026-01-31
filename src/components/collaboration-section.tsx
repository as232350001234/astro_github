"use client";

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ChevronRight, Plus, Circle, CheckCircle2 } from "lucide-react";

const accordionItems = [
  {
    id: "tasks",
    title: "Keep track of your tasks",
    description: "Create issues and manage projects with tools that adapt to your code.",
    link: "Explore GitHub Issues",
    content: "issue",
  },
  {
    id: "ideas",
    title: "Share ideas and ask questions",
    description: "Start discussions to share announcements, create polls, answer questions, and more.",
    link: "Explore GitHub Discussions",
  },
  {
    id: "review",
    title: "Review code changes together",
    description: "Request reviews, leave comments, and merge with confidence.",
    link: "Explore pull requests",
  },
  {
    id: "fund",
    title: "Fund open source projects",
    description: "Invest in the software you depend on with GitHub Sponsors.",
    link: "Explore GitHub Sponsors",
  },
];

export function CollaborationSection() {
  const [activeItem, setActiveItem] = useState("tasks");
  const sectionRef = useScrollAnimation<HTMLElement>();
  const contentRef = useScrollAnimation<HTMLDivElement>({ threshold: 0.2 });

  return (
    <section
      ref={sectionRef.ref}
      className={`relative py-24 overflow-hidden transition-all duration-1000 ${
        sectionRef.isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          sectionRef.isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 mb-6 shadow-lg shadow-pink-500/20">
            <span className="text-4xl">😺</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-4 text-balance">
            Work together, achieve more
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            From planning and discussion to code review, GitHub keeps your team&apos;s conversation and context next to your code.
          </p>
        </div>

        {/* Main content grid */}
        <div
          ref={contentRef.ref}
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-1000 delay-200 ${
            contentRef.isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left - Accordion */}
          <div className="space-y-4">
            {/* Quote */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 mb-8">
              <div className="text-4xl text-[#30363d] mb-4">&ldquo;</div>
              <p className="text-foreground text-lg leading-relaxed mb-6">
                It helps us onboard new software engineers and get them productive right away. We have all our source code, issues, and pull requests in one place... GitHub is a complete platform that frees us from menial tasks and enables us to do our best work.
              </p>
              <div>
                <p className="font-semibold text-foreground">Fabian Faulhaber</p>
                <p className="text-sm text-muted-foreground font-mono">Application manager at Mercedes-Benz</p>
              </div>
            </div>

            {/* Accordion */}
            {accordionItems.map((item) => (
              <div
                key={item.id}
                className={`border-b border-[#30363d] pb-4 cursor-pointer transition-all ${
                  activeItem === item.id ? "opacity-100" : "opacity-60 hover:opacity-80"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <div className="flex items-center justify-between py-2">
                  <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                  <Plus
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                      activeItem === item.id ? "rotate-45" : ""
                    }`}
                  />
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeItem === item.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-muted-foreground mb-3">{item.description}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1 text-accent hover:underline group"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {item.link}
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Issue card visualization */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/15 to-cyan-500/20 rounded-2xl blur-[50px] scale-95" />

            <div className="relative glass border border-[#30363d] rounded-xl overflow-hidden">
              {/* Issue header */}
              <div className="p-6 border-b border-[#30363d]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      New rendering engine <span className="text-muted-foreground font-normal">#920</span>
                    </h3>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#238636] text-white text-xs font-medium rounded-full">
                        <Circle className="w-3 h-3 fill-current" />
                        Open
                      </span>
                      <span className="text-sm text-muted-foreground">
                        <span className="w-4 h-4 inline-flex items-center justify-center rounded-full bg-[#21262d] text-xs mr-1">○</span>
                        1/3 sub-issues
                      </span>
                    </div>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div>
                    <span className="text-sm text-foreground font-medium">exactlymyra</span>
                    <span className="text-sm text-muted-foreground"> commented 5 days ago</span>
                  </div>
                </div>
              </div>

              {/* Issue body */}
              <div className="p-6 bg-[#0d1117]/50">
                <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
                  <h4 className="font-semibold text-foreground mb-3">Epic description</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Now that we&apos;ve decided on our new rendering engine (see <a href="#" className="text-accent hover:underline">#824</a>), we have some follow-up work to do. Let&apos;s use this issue for tracking. I&apos;ve taken a first pass at outstanding to-dos here.
                  </p>

                  {/* Sub-issues */}
                  <div className="mt-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-medium text-foreground">Sub-issues</span>
                      <span className="text-xs text-muted-foreground bg-[#21262d] px-1.5 py-0.5 rounded">○ 1/3</span>
                    </div>
                    <div className="space-y-2">
                      <SubIssue title="Update collision logic" number="#1752" done />
                      <SubIssue title="Engine prototype (physics, rendering)" number="#1753" />
                      <SubIssue title="Updates to aliens and cannon game logic" />
                    </div>
                    <button className="mt-3 flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                      <span className="px-2 py-1 bg-[#21262d] rounded text-xs">Create sub-issue</span>
                      <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SubIssue({ title, number, done = false }: { title: string; number?: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-3 py-1.5 group cursor-pointer">
      {done ? (
        <CheckCircle2 className="w-4 h-4 text-purple-400" />
      ) : (
        <Circle className="w-4 h-4 text-[#238636]" />
      )}
      <span className={`text-sm ${done ? "text-muted-foreground line-through" : "text-foreground"}`}>
        {title}
      </span>
      {number && (
        <span className="text-xs text-muted-foreground">{number}</span>
      )}
    </div>
  );
}
