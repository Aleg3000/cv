module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'standard-with-typescript', 
        'plugin:react/recommended', 
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": ['*.ts', '*.tsx'],
            "parserOptions": {
                "sourceType": "script",
                "project": ["./tsconfig.json"]
            }
        }
    ],
    parser: '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        '@typescript-eslint',
        "react-hooks"
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        "@typescript-eslint/indent": [2, 4],
        "@typescript-eslint/explicit-function-return-type": "warn",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/naming-convention": "warn",
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "error",
        "react/display-name": "off"
    },
    globals: {
        __IS_DEV__: true,
        // __BASENAME__: '/',
    },
}
