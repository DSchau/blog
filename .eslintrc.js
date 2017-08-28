module.exports = {
  extends: ['standard', 'standard-react'],
  env: {
    browser: true,
    es6: true
  },
  globals: {
    graphql: true
  },
  plugins: ['class-property'],
  parser: 'babel-eslint',
  rules: {
    indent: ['off'],
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: 'React'
      }
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/react-in-jsx-scope': 'error',
    'space-before-function-paren': 'off'
  }
};
