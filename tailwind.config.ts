import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      // 
      'default-bg': '#2A3C44',
      'default-card': '#30444E',
      'default-active': '#40DF9F',
      'white': '#FFFFFF',
      'default-orange': '#FFC542',
      'default-border': '#B8C2C0',
      'default-error': '#FF575F'
    }
  },
  plugins: [],
} satisfies Config;
