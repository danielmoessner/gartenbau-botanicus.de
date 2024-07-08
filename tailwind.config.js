let font_base = 16;
let font_scale = 1.250;
let h6 = font_base / font_base;
let h5 = h6 * font_scale;
let h4 = h5 * font_scale;
let h3 = h4 * font_scale;
let h2 = h3 * font_scale;
let h1 = h2 * font_scale;

let fontHeading = 'Inter';
let fontHeadingType = 'sans-serif';
let fontText = 'IBMPlexSerif';
let fontTextType = 'sans-serif';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [{
            h4: {
              fontSize: "1em",
            },
          }],
        }
      }),
      colors: {
        text: "#1b191d",
        dark: "#2b3246",
        // primary: "#749a30",
        primary: "#577523",
        secondary: "#e9f0dd",
        body: "#fff",
      },
      fontSize: {
        base: font_base + "px",
        h1: h1 + "rem",
        "h1-sm": h1 * 0.8 + "rem",
        h2: h2 + "rem",
        "h2-sm": h2 * 0.8 + "rem",
        h3: h3 + "rem",
        "h3-sm": h3 * 0.8 + "rem",
        h4: h4 + "rem",
        "h4-sm": h4 * 0.8 + "rem",
        h5: h5 + "rem",
        h6: h6 + "rem",
      },
      fontFamily: {
        // heading: [fontHeading, fontHeadingType],
        // text: [fontText, fontTextType],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
