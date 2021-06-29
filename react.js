module.exports = {
    env: {
        browser: true,
    },
    extends: [ `eslint-config-kidsloop`, `plugin:react/recommended` ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: `module`,
        project: `tsconfig.react.json`,
    },
    plugins: [ `react` ],
    rules: {
        "react/react-in-jsx-scope": `off`,
        "react/jsx-max-props-per-line": 2,
        "react/jsx-first-prop-new-line": 2,
        "react/display-name": `off`,
        "react/jsx-sort-props": [
            2,
            {
                callbacksLast: true,
                shorthandFirst: true,
                ignoreCase: true,
                noSortAlphabetically: true,
                reservedFirst: [ `key`, `ref` ],
            },
        ],
    },
};
