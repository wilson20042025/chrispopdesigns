import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#1152d4",
        "background-light": "#f6f6f8",
        "background-dark": "#0a0a0b",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"],
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem",
      },
    },
  },
  plugins: [],
};
export default config;
