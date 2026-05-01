/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brutalist + AI palette — cream/ink base, ONE electric accent.
        // Add or swap a single color here and the entire site rebrands.
        bg:      "#fbf3e0",  // cream page background
        surface: "#fff8e7",  // slightly lighter card surface
        ink:     "#0a0a0a",  // primary text + thick borders
        muted:   "#4b4b4b",  // secondary text

        // Electric lime — the singular AI/terminal accent.
        // Used for highlights, active states, code-style elements.
        accent: "#a3e635",

        // Reserved utility colors (not used decoratively, only semantically).
        ok: "#16a34a", // green status dot for "available" pill
      },
      fontFamily: {
        // Bold mono everywhere — matches both brutalist + terminal aesthetics.
        mono: ["var(--font-space-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["var(--font-space-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderWidth: {
        // Extra-thick option for brutalist accents.
        3: "3px",
      },
      boxShadow: {
        // Hard-edged drop shadows — no blur, just an offset block.
        brutal:        "4px 4px 0 0 #0a0a0a",
        "brutal-lg":   "6px 6px 0 0 #0a0a0a",
        "brutal-sm":   "2px 2px 0 0 #0a0a0a",
        // Single colored variant for occasional emphasis (e.g. primary CTA).
        "brutal-acc":  "4px 4px 0 0 #a3e635",
        // Soft glow for the electric accent — used sparingly for an AI feel.
        glow: "0 0 0 1px #a3e635, 0 0 16px 0 rgba(163, 230, 53, 0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both",
        "fade-in": "fadeIn 0.8s ease-out both",
        blink:     "blink 1.1s steps(2, start) infinite",
        scan:      "scan 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
    },
  },
  plugins: [],
};
