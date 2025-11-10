import type { ColorPalette } from "./types";

export const colorPalettes: ColorPalette[] = [
  {
    id: "warm-professional",
    name: "Warm Professional",
    primary: "#f68634",
    secondary: "#2c3e50", // Dark blue-gray for excellent contrast
    accent: "#e67e22", // Slightly darker orange for hover
    neutral: "#34495e", // Darker gray for headings
    background: "#ffffff", // Pure white for maximum contrast
    description: "Clean and approachable with strong contrast and professional warmth"
  },
  {
    id: "modern-slate",
    name: "Modern Slate",
    primary: "#f68634",
    secondary: "#7f8c8d", // Medium gray for good contrast
    accent: "#3498db", // Professional blue accent
    neutral: "#2c3e50", // Dark slate for headings
    background: "#ecf0f1", // Light gray background
    description: "Contemporary and balanced with sophisticated gray tones"
  },
  {
    id: "deep-elegant",
    name: "Deep Elegant",
    primary: "#f68634",
    secondary: "#bdc3c7", // Light gray for contrast on dark background
    accent: "#9b59b6", // Sophisticated purple
    neutral: "#ecf0f1", // Light gray for headings on dark background
    background: "#2c3e50", // Dark blue-gray background
    description: "Luxurious and refined with deep tones and elegant accents"
  },
  {
    id: "fresh-vibrant",
    name: "Fresh Vibrant",
    primary: "#f68634",
    secondary: "#27ae60", // Rich green that complements orange
    accent: "#e74c3c", // Professional red accent
    neutral: "#2c3e50", // Dark gray for headings
    background: "#ffffff", // White background
    description: "Energetic yet professional with complementary green and red accents"
  },
  {
    id: "minimalist-clean",
    name: "Minimalist Clean",
    primary: "#f68634",
    secondary: "#95a5a6", // Medium gray for text
    accent: "#34495e", // Dark blue-gray for hover
    neutral: "#2c3e50", // Dark gray for headings
    background: "#f8f9fa", // Off-white background
    description: "Ultra-clean and simple with subtle gray variations"
  },
  {
    id: "corporate-blue",
    name: "Corporate Blue",
    primary: "#f68634",
    secondary: "#2980b9", // Professional blue
    accent: "#34495e", // Dark blue-gray
    neutral: "#2c3e50", // Darker blue-gray for headings
    background: "#ffffff", // White background
    description: "Trustworthy corporate aesthetic with blue and orange balance"
  }
];
