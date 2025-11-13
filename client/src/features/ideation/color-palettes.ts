import type { ColorPalette } from "./types";

export const colorPalettes: ColorPalette[] = [
  {
    id: "analogous-sunrise",
    name: "Analogous Sunrise",
    primary: "#f68634",
    secondary: "#8b4513", // Much darker brown for WCAG AA compliance
    accent: "#ff7033", // Rich red-orange accent
    neutral: "#1e1b16", // Deep espresso for softer typography contrast
    background: "#fff4e6", // Soft sunrise tint
    description: "Analogous range of warm sunrise oranges with crisp black contrast"
  },
  {
    id: "analogous-emberglow",
    name: "Analogous Emberglow",
    primary: "#f68634",
    secondary: "#bf661a", // Smoked amber for connective warmth
    accent: "#8f2e14", // Dark ember accent for dramatic contrast
    neutral: "#2b1a13", // Rich kiln-baked brown for typography
    background: "#ffebd9", // Soft emberglow wash
    description: "Smoldering ember hues blending dark spice accents with a warm ambient glow"
  },
  {
    id: "analogous-ember",
    name: "Analogous Ember",
    primary: "#f68634",
    secondary: "#654321", // Much darker sienna for strong contrast
    accent: "#c04c1d", // Smoldering ember accent
    neutral: "#24160f", // Smoky umber for balanced text contrast
    background: "#ffe9dd", // Smoky warm backdrop
    description: "Deeper ember-inspired oranges that stay within the warm spectrum"
  },
  {
    id: "terracotta-muse",
    name: "Terracotta Muse",
    primary: "#f68634",
    secondary: "#7f3f1a", // Kiln-fired terracotta shadow
    accent: "#f5b48a", // Sunlit clay highlight
    neutral: "#43362c", // Weathered adobe for body copy
    background: "#fef2e3", // Clay courtyard stucco
    description: "Modern terracotta tones inspired by sculpted pottery and warm galleries"
  },
  {
    id: "mono-glow",
    name: "Monochrome Glow",
    primary: "#f68634",
    secondary: "#8b4513", // Even darker brown for maximum contrast
    accent: "#ffa463", // Soft highlight within the same hue
    neutral: "#1f1f22", // Charcoal slate for gentle contrast
    background: "#fff5ec", // Gentle glowing wash
    description: "Glowing tints of the brand orange for a soft yet cohesive presentation"
  },
  {
    id: "ember-nocturne",
    name: "Ember Nocturne",
    primary: "#f68634",
    secondary: "#3a3d5b", // Indigo midnight shadow
    accent: "#ff7c6b", // Neon ember flare
    neutral: "#222136", // Deep twilight charcoal
    background: "#f3f2ff", // Moonlit lavender haze
    description: "Nightfall embers against indigo skies with neon accents for a futuristic edge"
  },
  {
    id: "velvet-ember",
    name: "Velvet Ember",
    primary: "#f68634",
    secondary: "#722f37", // Deep plum burgundy
    accent: "#b22222", // Rich firebrick
    neutral: "#1b1418", // Inky plum-black for luxurious depth
    background: "#faf0e6", // Linen (warm off-white)
    description: "Luxurious velvet depths with smoldering ember warmth and rich texture"
  },
  {
    id: "crimson-dawn",
    name: "Crimson Dawn",
    primary: "#f68634",
    secondary: "#722f37", // Deep burgundy for drama
    accent: "#dc143c", // Crimson accent
    neutral: "#23151d", // Blackberry charcoal for refined copy
    background: "#fff0f5", // Lavender blush
    description: "Bold crimson depths that capture the mystery of early morning light"
  },
  {
    id: "solar-flare",
    name: "Solar Flare",
    primary: "#f68634",
    secondary: "#b22222", // Firebrick red
    accent: "#ff4500", // Orange red
    neutral: "#000000", // Black contrast
    background: "#fff5ee", // Seashell
    description: "Explosive energy of solar flares captured in vivid orange bursts"
  }
];
