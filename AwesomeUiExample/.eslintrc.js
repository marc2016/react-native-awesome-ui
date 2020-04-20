module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    '@react-native-community',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          'react-native-awesome-ui': '../src/index',
        },
      },
    },
  },
};
