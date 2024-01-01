import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        container: "900px",
      },
      height: {
        header: "80px",
      },
      minHeight: {},
      margin: {
        "50": "50px",
      },
      padding: {
        section: "calc(80px + 50px)",
      },
      boxShadow: {
        basic: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
      },
      colors: {
        "green-basic": "#44BB44",
      },
    },
  },
  plugins: [],
};
export default config;
