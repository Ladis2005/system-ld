import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial da marca LSN Web Studio.
        electric: "#1265F5",
        "deep-blue": "#06162E",
        "tech-black": "#020817",
        brand: {
          50: "#eaf1ff",
          100: "#d5e3ff",
          200: "#aac6ff",
          300: "#7ba4ff",
          400: "#4a83fb",
          500: "#1265F5",
          600: "#0d4fc9",
          700: "#0a3d9c",
          800: "#082e75",
          900: "#06162E",
          950: "#020817",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(18, 101, 245, 0.55)",
        "glow-lg": "0 0 80px -12px rgba(18, 101, 245, 0.65)",
        card: "0 20px 60px -20px rgba(2, 8, 23, 0.6)",
      },
      backgroundImage: {
        "grid-glow":
          "linear-gradient(rgba(18,101,245,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(18,101,245,0.08) 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(18,101,245,0.25), transparent 60%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
