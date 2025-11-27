module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1A34",
        sand: "#F1EDE4",
        gold: "#C5A572",
        aqua: "#53B6C2"
      }
    }
  },
  plugins: []
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B2545",
        sand: "#F7F2E7",
        gold: "#C9A44C",
        aqua: "#3FC4C4"
      },
      fontFamily: {
        serif: ["var(--font-heading)"],
        sans: ["var(--font-body)"]
      }
    }
  },
  plugins: []
}
