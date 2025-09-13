module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 Chrome versions',
            'last 2 Firefox versions',
            'last 2 Safari versions',
            'last 2 Edge versions',
            'Chrome >= 58',
            'Firefox >= 57',
            'Safari >= 11',
            'Edge >= 16',
            'Android >= 5.0',
            'not dead',
            'not IE 11'
          ]
        },
        useBuiltIns: 'entry',
        corejs: 3,
        modules: false
      }
    ]
  ]
};
