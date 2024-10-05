module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // Include all files in the pages directory
    './components/**/*.{js,ts,jsx,tsx}',  // Include all files in the components directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        'space-image': "url('/assets/mission-background.jpg')",
      }
    },
  },
  plugins: [],
}
