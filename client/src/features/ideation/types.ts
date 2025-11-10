export type Category = "Navigation Menu" | "Hero" | "Buttons" | "Carousel" | "Text Animations" | "Color Palettes";

export type ColorPalette = {
  id: string;
  name: string;
  primary: string; // #f68634 (fixed)
  secondary: string;
  accent: string;
  neutral: string;
  background: string;
  description: string;
};

export type Provider = "21st.dev" | "uiverse.io" | "reactbits.dev" | "custom";

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


