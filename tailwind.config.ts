import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       "primary" : "#336E2E",
       "secondary" : "#1A402B",
       "background": "#F1FBFB" 
          },
    },
  },
  plugins: [],
} satisfies Config;
