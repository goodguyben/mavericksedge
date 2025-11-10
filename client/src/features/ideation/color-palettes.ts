import type { ColorPalette } from "./types";

export const colorPalettes: ColorPalette[] = [
  {
    id: "analogous-sunrise",
    name: "Analogous Sunrise",
    primary: "#f68634",
    secondary: "#8b4513", // Much darker brown for WCAG AA compliance
    accent: "#ff7033", // Rich red-orange accent
    neutral: "#000000", // Black for sharp contrast
    background: "#fff4e6", // Soft sunrise tint
    description: "Analogous range of warm sunrise oranges with crisp black contrast"
  },
  {
    id: "analogous-citrus",
    name: "Analogous Citrus",
    primary: "#f68634",
    secondary: "#b8860b", // Much darker goldenrod for proper contrast
    accent: "#ffda79", // Pale citrus highlight
    neutral: "#000000", // Black typography for clarity
    background: "#fff9ed", // Light citrus wash
    description: "Golden citrus tones hugging the orange hue for a bright, inviting feel"
  },
  {
    id: "analogous-ember",
    name: "Analogous Ember",
    primary: "#f68634",
    secondary: "#654321", // Much darker sienna for strong contrast
    accent: "#c04c1d", // Smoldering ember accent
    neutral: "#000000", // Black grounding element
    background: "#ffe9dd", // Smoky warm backdrop
    description: "Deeper ember-inspired oranges that stay within the warm spectrum"
  },
  {
    id: "mono-amber",
    name: "Monochrome Amber",
    primary: "#f68634",
    secondary: "#a0522d", // Much darker amber brown for contrast
    accent: "#ad551f", // Deep molten accent
    neutral: "#000000", // Black for bold typography
    background: "#fff2e6", // Light amber tint
    description: "Monochromatic amber shades that layer depth without leaving the hue"
  },
  {
    id: "mono-glow",
    name: "Monochrome Glow",
    primary: "#f68634",
    secondary: "#cd853f", // Much darker sandy brown for readability
    accent: "#ffa463", // Soft highlight within the same hue
    neutral: "#000000", // Black for balance
    background: "#fff5ec", // Gentle glowing wash
    description: "Glowing tints of the brand orange for a soft yet cohesive presentation"
  },
  {
    id: "mono-deep",
    name: "Monochrome Deep",
    primary: "#f68634",
    secondary: "#8b4513", // Dark brown for contrast on earthy background
    accent: "#8f4118", // Rich shadow accent
    neutral: "#000000", // Black to anchor the palette
    background: "#fde7d6", // Earthy monochrome base
    description: "Grounded monochrome shades that explore the deeper side of the brand orange"
  }
];
