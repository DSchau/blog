module.exports = require('babel-jest').createTransformer({
  presets: ['babel-preset-env', 'babel-preset-stage-0', 'babel-preset-react'],
  plugins: ['babel-plugin-syntax-dynamic-import']
})
