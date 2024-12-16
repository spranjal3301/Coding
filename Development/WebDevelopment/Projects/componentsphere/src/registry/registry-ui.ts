import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "magic-card",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/magic-card.tsx"],
  },
  {
    name: "flickering-grid",
    type: "registry:ui",
    dependencies: ["framer-motion"],
    files: ["ui/flickering-grid.tsx"],
  },
  {
    name: "rainbow-button",
    type: "registry:ui",
    files: ["ui/rainbow-button.tsx"],
    cssVars: {
      light: {
        "--color-1": "0 100% 63%",
        "--color-2": "270 100% 63%",
        "--color-3": "210 100% 63%",
        "--color-4": "195 100% 63%",
        "--color-5": "90 100% 63%",
      },
      dark: {
        "--color-1": "0 100% 63%",
        "--color-2": "270 100% 63%",
        "--color-3": "210 100% 63%",
        "--color-4": "195 100% 63%",
        "--color-5": "90 100% 63%",
      },
    },
    tailwind: {
      config: {
        theme: {
          extend: {
            colors: {
              "color-1": "hsl(var(--color-1))",
              "color-2": "hsl(var(--color-2))",
              "color-3": "hsl(var(--color-3))",
              "color-4": "hsl(var(--color-4))",
              "color-5": "hsl(var(--color-5))",
            },
            animation: {
              rainbow: "rainbow var(--speed, 2s) infinite linear",
            },
            keyframes: {
              rainbow: {
                "0%": { "background-position": "0%" },
                "100%": { "background-position": "200%" },
              },
            },
          },
        },
      },
    },
  }
  
];
