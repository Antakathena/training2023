module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Your TypeScript files extension

      // As mentioned in the comments, you should extend TypeScript plugins here,
      // instead of extending them outside the `overrides`.
      // If you don't want to extend any rules, you don't need an `extends` attribute.
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],

      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json'], // Specify it only for TypeScript files
      },
    },
  ],

  rules: {
    "max-len": [
      "error",
      {
        "code": 140
      }
    ],
    // Indent with 4 spaces
    "indent": ["error", 4],
    "@typescript-eslint/indent": ["error", 4, {
      "SwitchCase": 1,
      "flatTernaryExpressions": false,
      "ignoredNodes": [
        "PropertyDefinition[decorators]",
        "TSUnionType",
        "FunctionExpression[params]:has(Identifier[decorators])"
      ]
    }],
    // Indent JSX with 4 spaces
    //"react/jsx-indent": ["error", 4],
    // Indent props with 4 spaces
    //"react/jsx-indent-props": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": [
        "error",
        "single",
        {
          "allowTemplateLiterals": true
        }
    ],
    "semi": [
        "error",
        "always",
        {
          "omitLastInOneLineBlock": true
        }
    ],

    // fix semi linting for ts files ?
    "@typescript-eslint/member-delimiter-style": [
      "warn",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],

    // override default options for rules from base configurations
    "comma-dangle": ["error", "always-multiline"],
    "no-cond-assign": ["error", "always"],

    // disable rules from base configurations
    "no-console": "off",

    // added from Alk Eslint Config :
    "no-var": [ "error" ],
    "no-nested-ternary": [ "error" ],
    "no-empty": [ "error" ],
    "no-trailing-spaces": [ "error" ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1,
        "maxBOF": 1
      }
    ],
    "comma-spacing": [ "error" ],
    "keyword-spacing": [ "error" ],
    "key-spacing": [ "error", { "beforeColon": false } ],
    "curly": [ "error", "all" ],
    "computed-property-spacing": [ "error", "always" ],
    "no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^h",
        "ignoreRestSiblings": true
      }
    ],
    "block-spacing": "error",
    "array-bracket-spacing": [
      "error",
      "always"
    ],
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "object-curly-newline": [
      "error",
      {
        "ImportDeclaration": {
          "multiline": true,
          "consistent": true
        },
        "ExportDeclaration": {
          "multiline": true,
          "consistent": true
        }
      }
    ],
    "template-curly-spacing": [
      "error",
      "always"
    ],
    "eqeqeq": [
      "error",
      "always"
    ],
    "brace-style": [
      "error",
      "1tbs",
      { "allowSingleLine": false }
    ],
    "multiline-ternary": [ "error", "always-multiline" ],
    "operator-linebreak": [ "error", "after" ],
    "space-in-parens": [ "error" ],
    "space-infix-ops": [ "error" ],
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      {
        "ignoreCase": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "none",
          "all",
          "multiple",
          "single"
        ]
      }
    ],
    "id-length": [
      "error", {
        "properties": "never",
        "min": 2
      }
    ],
    "eol-last": [ "error", "always" ],
    "array-callback-return": [ "error" ],
    "no-return-await": [ "error" ],
    "no-unneeded-ternary": [ "error" ],
  }
}
