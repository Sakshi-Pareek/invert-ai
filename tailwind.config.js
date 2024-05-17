/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': "url('/assets/images/png/card-bg.png')",
        'gateway-bg': "url('/assets/images/png/empowerment-img.png')",
        'explore': "url('/assets/images/png/gateway_img-1.png')",
        'footer_bg': "url('/assets/images/png/footer_bg.png')",
      },
      backgroundSize: {
        'full': "100% 100%;"
      },
      dropShadow: {
        '3xl': '0px 0px 6px 0px rgba(171, 104, 255, 0.6)',
      },
      screens: {
        "xxl": "1160px",
        'xs': "450px"
      }
    },
  },
  plugins: [],
};
