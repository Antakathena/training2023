module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    // Indent with 4 spaces
    "indent": ["error", 4],
    // Indent JSX with 4 spaces
    "react/jsx-indent": ["error", 4],
    // Indent props with 4 spaces
    "react/jsx-indent-props": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "single"],
    "semi": ["error", "always", { "omitLastInOneLineBlock": true}],

    // override default options for rules from base configurations
    "comma-dangle": ["error", "always-multiline"],
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off"
  }
}
