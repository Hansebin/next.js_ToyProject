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
        "section-w": "1200px",
        main: "880px",
        side: "300px",
      },
      height: {
        header: "100px",
      },
      minHeight: {
        "section-h": "700px",
        main: "580px",
        side: "580px",
      },
      margin: {
        "section-my": "calc((100vh - 700px) / 2)",
      },
      padding: {
        "26": "26px",
        "60": "60px",
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
