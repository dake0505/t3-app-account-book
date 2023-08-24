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
      'default-orange': '#FFC542'
    }
  },
  plugins: [],
} satisfies Config;
