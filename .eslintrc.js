module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/react"
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "babel-eslint",
  plugins: ["flowtype", "react-hooks", "prettier"],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "flowtype/generic-spacing": 0,
    "flowtype/space-after-type-colon": 0,
    "import/prefer-default-export": 0,
    "no-plusplus": 0,
    "no-underscore-dangle": 0,
    "prefer-template": 0,
    "no-await-in-loop": 0,
    "no-restricted-syntax": 0,
    "consistent-return": 0,
    "no-lonely-if": 0,
    "no-use-before-define": 0,
    "no-nested-ternary": 0,
    "import/no-cycle": 0,
    "no-multi-assign": 0,
    "guard-for-in": 0,
    "no-continue": 0,
    "lines-between-class-members": 0,
    "prefer-destructuring": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "error"
  }
};
