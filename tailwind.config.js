module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'indigo-dark': '#1a0533',
        'indigo': '#4B0082',
        'indigo-light': '#6a1b9a',
        'neon-cyan': '#00FFFF',
        'neon-turquoise': '#40E0D0',
        'neon-purple': '#9D00FF',
      },
      fontFamily: {
        'sora': ['Sora', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}