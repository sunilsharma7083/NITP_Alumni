module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    // React specific rules
    'react/prop-types': 'off', // Turn off for now due to many violations
    'react/jsx-uses-react': 'off', // Not needed with React 17+
    'react/jsx-uses-vars': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    
    // General code quality rules - focus on critical issues
    'no-unused-vars': 'warn',
    'no-console': 'off', // Allow console for debugging in development
    'no-debugger': 'error',
    'no-extra-semi': 'error',
    'no-unreachable': 'error',
    'eqeqeq': ['warn', 'always'],
    
    // Formatting rules - be more lenient
    'curly': 'off', // Allow single-line if statements
    'brace-style': 'off',
    'indent': 'off', // Turn off strict indentation for now
    'quotes': 'off', // Allow both single and double quotes
    'semi': ['warn', 'always'],
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { max: 2 }],
    'comma-dangle': 'off',
    'object-curly-spacing': 'off',
    'array-bracket-spacing': 'off',
    'space-before-blocks': 'off',
    'keyword-spacing': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['build/', 'node_modules/', '*.min.js'],
};
