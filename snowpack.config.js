/** @type {import("snowpack").SnowpackUserConfig } */

module.exports = {
  exclude: [
    '**/.*',
    '**/package.json',
    '**/LICENSE',
    '**/README.md',
    '**/tsconfig.json',
    '**/yarn.lock',
    '**/yarn-error.log',
  ],
  mount: {
    public: {
      url: '/',
    },
    src: {
      url: '/dist',
    },
  },
  plugins: [
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-run-script',
      {
        // warnings here https://github.com/sveltejs/svelte/blob/HEAD/src/compiler/compile/Component.ts
        cmd:
          'svelte-check --output human --compiler-warnings module-script-reactive-declaration:ignore',
        watch:
          'svelte-check --watch --output human --compiler-warnings module-script-reactive-declaration:ignore',
      },
    ],
    '@hisystems/snowpack-plugin-postcss',
    [
      '@snowpack/plugin-webpack',
      {
        sourceMap: false,
        outputPattern: {
          css: '[name].[contenthash:4].css',
          js: '[name].[contenthash:4].js',
          assets: '[name].[contenthash:4].[ext]',
        },
        manifest: true,
        htmlMinifierOptions: {
          collapseWhitespace: true,
          removeComments: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
        },
        failonWarnings: true,
        extendConfig: (config) => {
          config.plugins[0].options.ignoreOrder =
            process.env.NODE_ENV === 'production';
          return config;
        },
      },
    ],
  ],
  devOptions: {
    output: 'stream',
    open: 'none',
    port: 3000,
  },
  buildOptions: {
    sourcemap: false,
    baseUrl: '/',
    clean: true,
  },
  routes: [
      {
          match: 'routes',
          src: '.*',
          dest: '/index.html',
      },
  ],
  alias: {
    '@app': './src',
  },
};