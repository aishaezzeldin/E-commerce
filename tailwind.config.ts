import { Config } from "tailwindcss";
import flowbite from "flowbite/plugin";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js", // 👈 Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
//   plugins: [require("flowbite/plugin")],
};

export default config;