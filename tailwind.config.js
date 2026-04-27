/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F2EC',
        foreground: '#1C1C1A',
        'accanto-green': '#0F6E56',
        'pale-green': '#E8F7F2',
        'ink': '#1C1C1A',
        'sand': '#F5F2EC',
        'terracotta': '#C4763A',
      },
      backgroundColor: {
        'accanto-green': '#0F6E56',
        'pale-green': '#E8F7F2',
        'sand': '#F5F2EC',
        'terracotta': '#C4763A',
      },
      textColor: {
        'accanto-green': '#0F6E56',
        'ink': '#1C1C1A',
        'terracotta': '#C4763A',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
