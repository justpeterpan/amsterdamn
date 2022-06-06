module.exports = {
  content: ['./components/**/*.vue'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        light: '#d6d3cd',
        'light-gray': '#9e9589',
        'lighter-gray': '#363b3d',
        dark: '#181a1b',
      },
      dropShadow: {
        dark: '4px 4px 0px rgba(0,0,0,1)',
        light: '4px 4px 0px rgba(255,255,255,.8)',
      },
    },
  },
};
