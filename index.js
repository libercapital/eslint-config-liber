module.exports = {
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  rules: {
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    'no-console': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        printWidth: 100,
        tabWidth: 2,
      },
    ],
  },
};
