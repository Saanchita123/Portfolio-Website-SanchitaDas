/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // Enable dark mode if needed
  // darkMode: 'class',
  theme: {
    extend: {
      transformOrigin: {
        center: 'center',
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-2deg)" },
          "50%": { transform: "rotate(2deg)" },
        },
        float: {
          "0%": { transform: "translateX(-10%)" },
          "100%": { transform: "translateX(110%)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        sway: "sway 3s ease-in-out infinite",
        float: "float 60s linear infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        // ✅ Add for Flip Cards
        '.transform-style': {
          'transform-style': 'preserve-3d',
        },
        '.backface-hidden': {
          'backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden',
        },
        '.preserve-3d': {
          'transform-style': 'preserve-3d',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
        '.transform-3d': {
          transform: 'translateZ(0)',
        },
      });
    },
  ],
};
