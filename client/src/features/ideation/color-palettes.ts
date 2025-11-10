import type { ColorPalette } from "./types";

export const colorPalettes: ColorPalette[] = [
  {
    id: "analogous-warm",
    name: "Analogous Warm",
    primary: "#f68634", // Orange
    secondary: "#d4a574", // Warm beige for text
    accent: "#f4c542", // Golden yellow (analogous)
    neutral: "#8b4513", // Saddle brown for headings
    background: "#fefefe", // Warm white
    description: "Warm color family using yellows, oranges, and browns for cohesive harmony"
  },
  {
    id: "analogous-cool",
    name: "Analogous Cool",
    primary: "#f68634", // Orange
    secondary: "#8b7355", // Taupe gray for text
    accent: "#cd853f", // Peru orange (analogous)
    neutral: "#654321", // Dark brown for headings
    background: "#f5f5f0", // Warm off-white
    description: "Cooler earth tones with browns and muted oranges for sophisticated warmth"
  },
  {
    id: "complementary-ocean",
    name: "Complementary Ocean",
    primary: "#f68634", // Orange
    secondary: "#4682b4", // Steel blue (complementary)
    accent: "#1e90ff", // Dodger blue (complementary)
    neutral: "#2f4f4f", // Dark slate gray for headings
    background: "#ffffff", // Clean white
    description: "Orange paired with its complementary blue for energetic contrast"
  },
  {
    id: "complementary-deep",
    name: "Complementary Deep",
    primary: "#f68634", // Orange
    secondary: "#4169e1", // Royal blue (complementary)
    accent: "#000080", // Navy blue (complementary)
    neutral: "#191970", // Midnight blue for headings
    background: "#f8f9fa", // Light gray
    description: "Deep blue complement creates dramatic contrast with vibrant orange"
  },
  {
    id: "split-complementary",
    name: "Split Complementary",
    primary: "#f68634", // Orange
    secondary: "#20b2aa", // Light sea green (split complementary)
    accent: "#40e0d0", // Turquoise (split complementary)
    neutral: "#2f4f4f", // Dark slate gray for headings
    background: "#ffffff", // White
    description: "Orange with blue-green split complements for balanced energy"
  },
  {
    id: "monochromatic",
    name: "Monochromatic",
    primary: "#f68634", // Orange
    secondary: "#d2691e", // Chocolate (darker orange)
    accent: "#daa520", // Goldenrod (lighter orange)
    neutral: "#8b4513", // Saddle brown (darkest)
    background: "#fff8f0", // Very light orange tint
    description: "Single color family using various shades of orange for unified harmony"
  }
];
