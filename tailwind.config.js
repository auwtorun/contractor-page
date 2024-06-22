/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002147',
        secondary: '#5C2B03',
        dark: '#000b18'
      },
      fontFamily: {
        'satoshi-light': ['Satoshi-Light', 'sans-serif'],
        'satoshi-light-italic': ['Satoshi-LightItalic', 'sans-serif'],
        'satoshi-regular': ['Satoshi-Regular', 'sans-serif'],
        'satoshi-italic': ['Satoshi-Italic', 'sans-serif'],
        'satoshi-medium': ['Satoshi-Medium', 'sans-serif'],
        'satoshi-medium-italic': ['Satoshi-MediumItalic', 'sans-serif'],
        'satoshi-bold': ['Satoshi-Bold', 'sans-serif'],
        'satoshi-bold-italic': ['Satoshi-BoldItalic', 'sans-serif'],
        'satoshi-black': ['Satoshi-Black', 'sans-serif'],
        'satoshi-black-italic': ['Satoshi-BlackItalic', 'sans-serif'],
        'satoshi-variable': ['Satoshi-Variable', 'sans-serif'],
        'satoshi-variable-italic': ['Satoshi-VariableItalic', 'sans-serif'],
      },
      rotate: {
        '360': '360deg',
      },
      backgroundImage: {
        'black-to-transparent': 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
