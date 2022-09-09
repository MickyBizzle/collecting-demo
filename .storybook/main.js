module.exports = {
  stories: ['../**/*.stories.mdx', '../**/*.stories.@(js|jsx|ts|tsx)'],
  staticDir: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
};
