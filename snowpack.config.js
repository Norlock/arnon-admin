// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

module.exports = {
  mount: {
      src: "/dist",
      public: "/"
  },
  plugins: [
      'snowpack-plugin-elm',
      '@snowpack/plugin-sass',
  ],
  packageOptions: {
      source: 'remote',
      types: true
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  routes: [{ 
      match: "routes", 
      src: ".*", 
      dest: "/index.html" 
  }]
};
