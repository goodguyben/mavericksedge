import type { ColorPalette } from "./types";

export const colorPalettes: ColorPalette[] = [
  {
    id: "modern-blue",
    name: "Modern Blue",
    primary: "#f68634", // Orange
    secondary: "#2563eb", // Modern blue (complementary)
    accent: "#3b82f6", // Bright blue accent
    neutral: "#1e293b", // Modern dark gray
    background: "#ffffff", // Clean white
    description: "Trendy blue complement creates energetic, professional contrast with orange"
  },
  {
    id: "vibrant-teal",
    name: "Vibrant Teal",
    primary: "#f68634", // Orange
    secondary: "#0891b2", // Vibrant teal (split complementary)
    accent: "#06b6d4", // Modern teal accent
    neutral: "#0f172a", // Deep navy
    background: "#ffffff", // Clean white
    description: "Fresh teal-orange combination that's hugely popular in modern design"
  },
  {
    id: "rich-purple",
    name: "Rich Purple",
    primary: "#f68634", // Orange
    secondary: "#7c3aed", // Rich purple (triadic)
    accent: "#a855f7", // Light purple accent
    neutral: "#1e1b4b", // Deep purple-gray
    background: "#fafafa", // Warm white
    description: "Sophisticated purple triad creates luxurious, contemporary harmony"
  },
  {
    id: "sunset-glow",
    name: "Sunset Glow",
    primary: "#f68634", // Orange
    secondary: "#f59e0b", // Amber yellow (analogous)
    accent: "#f97316", // Bright orange accent
    neutral: "#9a3412", // Deep orange-brown
    background: "#fefefe", // Warm white
    description: "Warm sunset colors with golden accents for energetic, inviting design"
  },
  {
    id: "minimal-slate",
    name: "Minimal Slate",
    primary: "#f68634", // Orange
    secondary: "#64748b", // Trendy gray
    accent: "#94a3b8", // Light gray accent
    neutral: "#334155", // Modern dark gray
    background: "#f8fafc", // Off-white
    description: "Clean minimal palette with sophisticated grays and orange accents"
  },
  {
    id: "electric-gradient",
    name: "Electric Gradient",
    primary: "#f68634", // Orange
    secondary: "#0ea5e9", // Electric blue
    accent: "#06b6d4", // Cyan accent
    neutral: "#1e293b", // Dark slate
    background: "#ffffff", // Pure white
    description: "Electric blue-orange combination perfect for modern gradients and tech brands"
  }
];
