"use client";

import React from "react";
import { cn } from "@/lib/utils";

type InspirationSite = {
  id: string;
  name: string;
  url: string;
  description?: string;
};

type DesignInspirationStepProps = {
  notes: Record<string, string>;
  onNoteChange: (id: string, value: string) => void;
  selectedIds: string[];
  onToggle: (id: string) => void;
  skip: boolean;
  onSkipChange: (value: boolean) => void;
};

const inspirationSites: InspirationSite[] = [
  {
    id: "modern-huntsman",
    name: "Modern Huntsman",
    url: "https://modernhuntsman.com/",
    description: "Editorial storytelling with immersive imagery and refined typography."
  },
  {
    id: "cabot-cape-breton",
    name: "Cabot Cape Breton",
    url: "https://cabotcapebreton.com/",
    description: "Hospitality-focused layout with elegant spacing and rich photography."
  },
  {
    id: "drs-schuster-oxley",
    name: "Drs. Schuster & Oxley",
    url: "https://www.drsschusterandoxley.com/",
    description: "Calming medical aesthetic with modern UI patterns and reassuring content."
  },
  {
    id: "aspen-interiors",
    name: "Aspen Interiors",
    url: "https://aspeninteriors.com.au/",
    description: "Australian manufacturer showcasing commercial joinery with clean layouts and project galleries."
  },
  {
    id: "pixel-blue-college",
    name: "Pixel Blue College",
    url: "https://www.pixelblue.ca/",
    description: "Edmonton digital arts college site with modern navigation and program-focused design."
  },
  {
    id: "dia-browser",
    name: "Dia Browser",
    url: "https://www.diabrowser.com/",
    description: "AI browser landing page with bold typography, smooth animations, and product-focused storytelling."
  },
  {
    id: "post-labs",
    name: "Post Labs",
    url: "https://www.postlabs.com/",
    description: "Canadian media platform with bold typography, clean layouts, and mission-driven storytelling."
  },
  {
    id: "gkc-architecture",
    name: "GKC Architecture & Design",
    url: "https://gkc.ca/en",
    description: "Architecture firm portfolio with sophisticated navigation, project showcases, and elegant visual hierarchy."
  }
];

const iframeClasses = "w-full h-[640px] md:h-[760px] rounded-xl border border-neutral-700 bg-neutral-900";

export default function DesignInspirationStep({ notes, onNoteChange, selectedIds, onToggle, skip, onSkipChange }: DesignInspirationStepProps) {
  const count = selectedIds.length;
  const min = 1;
  const max = 5;
  const withinLimits = count >= min && count <= max;

  const handleToggle = (id: string) => {
    // Allow selection/deselection regardless of skip state
    if (selectedIds.includes(id)) {
      onToggle(id); // Allow deselection
    } else if (count < max) {
      onToggle(id); // Allow selection if under max
    }
  };

  return (
    <div className="space-y-6">
      <div className="mb-6 flex items-center justify-between bg-neutral-800/30 rounded-lg p-4 border border-neutral-700/50">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${withinLimits || skip ? 'bg-green-500' : 'bg-amber-500'}`}></div>
          <div className="text-sm font-medium text-neutral-200">
            {count} of {max} selected
            <span className="text-neutral-500 ml-1">({min} minimum)</span>
          </div>
        </div>
        <label className="flex items-center gap-3 text-sm text-neutral-300 cursor-pointer group">
          <div className="relative flex items-center justify-center">
            <input
              type="checkbox"
              checked={skip}
              onChange={(e) => onSkipChange(e.target.checked)}
              className="sr-only peer"
            />
            <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center ${
              skip 
                ? 'bg-orange-500 border-orange-500 group-hover:bg-orange-400 group-hover:border-orange-400' 
                : 'bg-neutral-800 border-neutral-600 group-hover:border-neutral-500'
            }`}>
              {skip && (
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
          </div>
          <span className="group-hover:text-white transition-colors duration-200 select-none">I'm flexible with Design Inspiration</span>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {inspirationSites.map((site) => {
          const isSelected = selectedIds.includes(site.id);
          return (
            <div
              key={site.id}
              className={cn(
                "rounded-2xl border-2 transition-all shadow-[0_20px_60px_-40px_rgba(0,0,0,0.9)] overflow-hidden",
                isSelected
                  ? "border-white bg-neutral-800/80 shadow-lg shadow-white/10"
                  : "border-neutral-700 bg-neutral-900/70"
              )}
            >
              <div className="flex items-center justify-between gap-4 border-b border-neutral-700 px-6 py-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">{site.name}</h3>
                  {site.description && (
                    <p className="text-sm text-neutral-400">{site.description}</p>
                  )}
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <button
                    onClick={() => handleToggle(site.id)}
                    disabled={!isSelected && count >= max}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                      isSelected
                        ? "bg-white text-black hover:bg-neutral-100"
                        : count >= max
                        ? "border border-neutral-600 bg-neutral-800 text-neutral-500 cursor-not-allowed"
                        : "border border-neutral-600 bg-neutral-800 text-white hover:bg-neutral-700 hover:border-neutral-500"
                    )}
                  >
                    {isSelected ? "✓ Selected" : "Select"}
                  </button>
                  <a
                    href={site.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-neutral-600 bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-700 hover:border-neutral-500 transition-all"
                  >
                    Open Site
                  </a>
                </div>
              </div>

            <div className="relative bg-neutral-950">
              <iframe
                src={site.url}
                className={iframeClasses}
                loading="lazy"
                title={`Preview of ${site.name}`}
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl border border-white/5 shadow-[inset_0_-120px_120px_-60px_rgba(0,0,0,0.65)]" />
            </div>
            <div className="border-t border-neutral-700 bg-neutral-900 px-6 py-4 text-sm text-neutral-400">
              If the preview shows a connection error, use the “Open Site” button above to view the live experience in a
              new tab.
            </div>

            <div className="border-t border-neutral-700 bg-neutral-900 px-6 py-5">
              <label htmlFor={`${site.id}-notes`} className="mb-2 block text-sm font-medium text-neutral-200">
                Notes for {site.name} <span className="text-neutral-500 font-normal">(optional)</span>
              </label>
              <textarea
                id={`${site.id}-notes`}
                value={notes[site.id] ?? ""}
                onChange={(event) => onNoteChange(site.id, event.target.value)}
                onClick={(e) => e.stopPropagation()}
                placeholder="What do you like about this experience? Any sections, layouts, or interactions that stand out?"
                className="h-28 w-full resize-none rounded-xl border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-100 placeholder-neutral-500 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/10"
              />
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}
