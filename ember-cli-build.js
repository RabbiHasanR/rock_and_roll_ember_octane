'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

const { SOURCEMAPS: _sourceMaps } = process.env;

const SOURCEMAPS = _sourceMaps === 'true';

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sourcemaps: {
      enabled: SOURCEMAPS,
    },
    postcssOptions: {
      compile: {
        // track changes in template, css, scss, and tailwind config files
        map: SOURCEMAPS,
        cacheInclude: [/.*\.(css|scss|hbs)$/, /.tailwind\/config\.js$/],
        plugins: [
          {
            module: autoprefixer,
            options: {},
          },
          {
            module: tailwind,
            options: {
              config: './app/styles/tailwind/config.js',
            },
          },
        ],
      },
    },
  });

  const { Webpack } = require('@embroider/webpack');
  return require('@embroider/compat').compatBuild(app, Webpack, {
    skipBabel: [
      {
        package: 'qunit',
      },
    ],
    staticAddonTrees: true,
    staticAddonTestSupportTrees: true,
    staticHelpers: true,
    staticComponents: true,
    splitControllers: true,
    splitRouteClasses: true,
    // staticAppPaths: [],
    // splitAtRoutes: [],
    packagerOptions: {
      webpackConfig: {
        // this option might not be working?
        // devtool: SOURCEMAPS ? 'eval-source-map' : 'none',
      },
    },
    // required due to this app being a dynamic component generator
    allowUnsafeDynamicComponents: true,
  });
};
