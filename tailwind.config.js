/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "link-color": "#10b981",
      },
      screens: {
        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        nlg: { max: "1118px" },
        // => @media (max-width: 1118px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "880px" },
        // => @media (max-width: 880px) { ... }

        sm: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        xs: { max: "479px" },
        // => @media (max-width: 479px) { ... }
      },
    },
  },
  plugins: [],
}
