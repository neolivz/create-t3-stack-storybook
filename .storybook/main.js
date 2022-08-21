const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-swc',
      options: {
        enable: process.env.BUILD_TOOL === 'swc',
      },
    },
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  managerWebpack(config) {
    config.plugins.push(new SpeedMeasurePlugin());
    return config;
  },
  webpackFinal(config) {
    config.plugins.push(new SpeedMeasurePlugin());
    return config;
  },
}