import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'xxs': '320px',   // Very small phones (iPhone SE)
      'xxs-plus': '350px', // Very small+ phones (small Android phones)
      'xs': '375px',    // Small phones (iPhone 6/7/8)
      'xs-plus': '390px', // Small+ phones (iPhone 12/13 mini, iPhone 14)
      'sm': '480px',    // Medium phones (iPhone 12/13 mini)
      'sm-plus': '540px', // Medium+ phones (larger Android phones)
      'phone': '640px', // Large phones (iPhone 12/13 Pro Max)
      'mini': '768px',  // iPad Mini (7.9")
      'galaxy-tab': '800px', // Galaxy Tab S7 (800x1280)
      'pad': '810px',   // Regular iPad (9.7-10.2")
      'air': '834px',   // iPad Air (10.5-10.9")
      'pro': '1024px',  // iPad Pro and large tablets (11"+)
      'tab-large': '1100px', // Large tablets and small laptops (1100px-1279px)
      'lg': '1280px',   // Desktop (1280px-1359px)
      'lgxl': '1360px', // Large desktop (1360px-1439px)
      'xl': '1440px',   // 14" laptops (1440px-1519px)
      'xl14': '1520px', // 14" high-res laptops (1520px-1599px)
      'xl14h': '1600px', // 14" ultra-high-res laptops (1600px-1679px)
      'xl15': '1680px', // 15" laptops (1680px-1919px)
      '2xl': '1920px',  // Ultra-wide desktop (1920px+)
    },
    fontFamily: {
      sans: ['Raleway', 'system-ui', 'sans-serif'],
      heading: ['Raleway', 'system-ui', 'sans-serif'],
      logo: ['Raleway', 'system-ui', 'sans-serif'],
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        maverick: {
          "yellow": "#FFD74B", // Bright yellow for dark backgrounds
          "orange": "#FF5630", // Vibrant orange for dark backgrounds
          "brown": "#AE6A4D", // Lighter brown for better visibility on dark
          "light-orange": "#FF8A50", // Brighter light orange
          "dark-brown": "#272114", // Very dark brown for backgrounds
          "amber": "#FFC43D", // Bright amber
          "charcoal": "#1E1A18", // Dark background
          "slate": "#252B32", // Alternative dark background
          "cream": "#FFFAF0", // Very light warm white
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "gradient-x": {
          "0%, 100%": { 
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": { 
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "gradient-slow": "gradient-shift 8s ease infinite",
        "gradient-x": "gradient-x 3s ease infinite",
        "gradient": "gradient-x 3s ease infinite",
      },
      backgroundSize: {
        'gradient-animate': '400% 400%'
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;