module.exports = {
  hash: true,
  vite: true,
  outputDir: 'dist',
  outputAssetsPath: {
    js: 'caiyun-live/js',
    css: 'caiyun-live/css',
  },
  alias: {
    'venn.js': 'venn.js/build/venn.js',
    '@ajax': './src/ajax',
  },
  plugins: [
    [
      'build-plugin-moment-locales',
      {
        locales: ['zh-cn'],
      },
    ],
    [
      'build-plugin-ignore-style',
      {
        libraryName: '@alifd/next',
      },
    ],
  ],
};
