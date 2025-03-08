import {heroui} from '@heroui/theme';
 const {
     default: flattenColorPalette,
   } = require("tailwindcss/lib/util/flattenColorPalette");
 
   /** @type {import('tailwindcss').Config} */
   module.exports = {
     content: [
       "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
       "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
       "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   
       // Or if using `src` directory:
       "./src/**/*.{js,ts,jsx,tsx,mdx}",
     ],
   content: [
     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "// Or if using `src` directory:\n      \"./src/**/*.{js,ts,jsx,tsx,mdx}\"",
     "./node_modules/@heroui/theme/dist/components/navbar.js"
   ],
     darkMode: "class",
     theme: {
       extend: {},
     },
     plugins: [addVariablesForColors],
   plugins: [addVariablesForColors,heroui()],
   };
 