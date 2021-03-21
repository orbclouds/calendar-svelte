const preprocess = require('svelte-preprocess');

module.exports = {
  preprocess: preprocess({
    defaults: {
      script: 'typescript',
    },
  }),
  compilerOptions: {
    css: false,
  },
};