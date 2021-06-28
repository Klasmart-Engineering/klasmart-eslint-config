module.exports = {
    env: {
        browser: true,
    },
    extends: [ `@kidsloop/eslint-config`, `plugin:react/recommended` ],
    parser: `@typescript-eslint/parser`,
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
