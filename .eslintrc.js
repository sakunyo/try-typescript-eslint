module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
        "prettier/@typescript-eslint"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "project": "./tsconfig.json",
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
      "no-console": 0
    },
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ]
};
