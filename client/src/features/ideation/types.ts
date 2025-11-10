export type Category = "Navigation Menu" | "Hero" | "Buttons" | "Carousel" | "Text Animations" | "Color Palettes";

export type Provider = "21st.dev" | "uiverse.io" | "reactbits.dev" | "custom";

export type ColorPalette = {
  primary: string; // Main brand color
  secondary: string[]; // Supporting colors
  accent: string[]; // Highlight colors
  neutral: string[]; // Background and text colors
  surface: string[]; // Card and panel colors
};

export type CatalogItem = {
  id: string;
  title: string;
  category: Category;
  provider: Provider;
  previewUrl?: string; // optional live demo
  image?: string; // local screenshot path for fast preview
  previewComponent?: string; // component name to render (e.g., "Header1Demo")
  sourceUrl: string;
  tags?: string[];
  license?: string;
  a11yNotes?: string;
  version?: string;
  badges?: ("popular" | "new" | "accessible")[];
  colors?: ColorPalette; // For color palette items
};

export type CategoryGuidance = {
  category: Category;
  guidance: string; // 1–2 sentences
  estTimeMins?: number; // for progress UI
};

export type Catalog = {
  items: CatalogItem[];
  guidance: CategoryGuidance[];
};


