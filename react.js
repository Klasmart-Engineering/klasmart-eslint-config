module.exports = {
    env: {
        browser: true,
    },
    extends: [ `@kidsloop/eslint-config`, `plugin:react/recommended` ],
    plugins: [ `react`, `react-hooks` ],
    settings: {
        react: {
            version: `detect`,
        },
    },
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
        "react-hooks/rules-of-hooks": `error`,
        "react-hooks/exhaustive-deps": `warn`,
    },
};
