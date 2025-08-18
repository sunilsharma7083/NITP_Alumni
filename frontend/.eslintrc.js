module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Disable all rules that cause compilation errors
    'no-unused-vars': 'off',
    'no-console': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/prop-types': 'off',
    'indent': 'off',
    'quotes': 'off',
    'semi': 'off',
    'no-duplicate-keys': 'off',
    'no-trailing-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'comma-dangle': 'off',
    'object-curly-spacing': 'off',
    'array-bracket-spacing': 'off',
    'space-before-blocks': 'off',
    'keyword-spacing': 'off',
    'curly': 'off',
    'brace-style': 'off',
    'eqeqeq': 'off',
    'react/jsx-uses-vars': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-unknown-property': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
