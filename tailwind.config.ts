import fluid, { extract } from "fluid-tailwind";
import type { Config } from "tailwindcss";
const config: Config = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    extract,
  },

  theme: {
    extend: {
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      borderWidth: {
        spinner: "4px",
      },

      backgroundImage: {
        /*      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))", */
      },
      colors: {
        gradient:
          "linear-gradient(0deg, rgba(160, 124, 206, 0.10) 0%, rgba(160, 124, 206, 0.10) 100%)",
        primary_1: "#D1AC00",
        primary_2: "#620086",
        primary_3: "#0A0B11",
        secondary_1: "#BEA7E5",
        secondary_2: "#F8F4F9",
        secondary_3: "#CED3DC",
        secondary_4: "#FCF7F8",
        "spinner-background": "rgba(0, 0, 0, 0.1)",
        "spinner-color": "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
