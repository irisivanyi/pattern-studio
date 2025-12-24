/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'maru': ['GT Maru Trial', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'grey-placeholder': '#cfcfcf',
        'nav-bg': '#f7f7f7',
        'text-dark': '#1a1a1a',
        'text-light': '#a4a4a4',
        'contact-bg': '#1a1a1a',
        'contact-text': '#f4f4f4',
        'social-bg': '#e9e9e9',
        'social-text': '#1c1c1c',
        'twitter-label': '#9e9e9e',
      },
    },
  },
  plugins: [],
}

