import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./components/**/*.{md,vue}'],
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
  plugins: [
    require('@tailwindcss/typography'),
    // https://twitter.com/samselikoff/status/1383087435609993221
    // firefox:bg-white in DamnNavBar.vue
    plugin(function ({ addVariant, e, postcss }) {
      addVariant('firefox', ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: '-moz-document',
          params: 'url-prefix()',
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(`firefox${separator}${rule.selector.slice(1)}`)}`;
        });
      });
    }),
  ],
};
