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
    id: "complementary-modern",
    name: "Complementary Modern",
    primary: "#f68634", // Orange
    secondary: "#3498db", // Bright blue (complementary)
    accent: "#2980b9", // Medium blue (complementary)
    neutral: "#2c3e50", // Dark blue-gray for headings
    background: "#ffffff", // Clean white
    description: "Modern blue complement creates fresh, contemporary contrast with orange"
  },
  {
    id: "triadic-harmony",
    name: "Triadic Harmony",
    primary: "#f68634", // Orange
    secondary: "#27ae60", // Emerald green (triadic)
    accent: "#9b59b6", // Purple (triadic)
    neutral: "#34495e", // Dark gray for headings
    background: "#f8f9fa", // Light gray
    description: "Balanced triad of orange, green, and purple for vibrant yet harmonious design"
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
