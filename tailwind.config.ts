import type { Config } from "tailwindcss";
import daisyui from "daisyui";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      "light",
      "black",
      "cupcake",
      "synthwave",
      "night",
      "dark",
      {
        mytheme: {
          primary: "#ffffff", // Adjust as needed
          secondary: "#000000",
          accent: "#00001f",
          neutral: "#010013",
          "base-100": "#000110", // Base background
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#f87272",
          "--background": "linear-gradient(-45deg, #000000, #00001f, #010013, #000110)",
          "--foreground": "#ffffff", // Text color
        },
      },
    ],
  },
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
} satisfies Config;
