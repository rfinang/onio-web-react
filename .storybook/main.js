/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
  babel: async (options) => ({
    ...options,
    presets: [
      ['@babel/preset-env', { targets: { node: 'current' } }],
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript',
    ],
  }),
  webpackFinal: async (config) => {
    // Add support for absolute imports
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
    };
    
    // Add support for TypeScript and JSX
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: { node: 'current' } }],
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
          ],
        },
      },
    });
    
    // Remove duplicate CSS rules
    config.module.rules = config.module.rules.filter((rule) => {
      if (rule.test && rule.test.toString() === '/\\.css$/') {
        return false;
      }
      return true;
    });
    
    // Add proper CSS handling with PostCSS for Tailwind
    config.module.rules.push({
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
              ],
            },
          },
        },
      ],
    });
    
    // Add file extensions
    config.resolve.extensions.push('.ts', '.tsx');
    
    return config;
  },
};

module.exports = config;