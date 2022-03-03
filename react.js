module.exports = {
    env: {
        browser: true,
    },
    extends: [ `@kl-engineering/eslint-config`, `plugin:react/recommended` ],
    plugins: [
        `react`,
        `react-hooks`,
        `jsx-a11y`,
    ],
    settings: {
        react: {
            version: `detect`,
        },
    },
    rules: {
        "jsx-quotes": `error`,
        "jsx-a11y/alt-text": `error`,
        "jsx-a11y/img-redundant-alt": `error`,
        "jsx-a11y/no-access-key": `error`,
        "no-multi-spaces": `error`,
        "react/display-name": `off`,
        "react/jsx-boolean-value": `error`,
        "react/jsx-closing-bracket-location": `error`,
        "react/jsx-closing-tag-location": `error`,
        "react/jsx-curly-spacing": `error`,
        "react/jsx-first-prop-new-line": `error`,
        "react/jsx-filename-extension": [
            `warn`,
            {
                extensions: [ `.tsx` ],
            },
        ],
        "react/jsx-max-props-per-line": `error`,
        "react/jsx-pascal-case": `error`,
        "react/jsx-sort-props": [
            `error`,
            {
                callbacksLast: true,
                shorthandFirst: true,
                ignoreCase: true,
                noSortAlphabetically: true,
                reservedFirst: [ `key`, `ref` ],
            },
        ],
        "react/jsx-wrap-multilines": `error`,
        "react/jsx-tag-spacing": [
            `error`,
            {
                closingSlash: `never`,
                beforeSelfClosing: `always`,
                afterOpening: `never`,
                beforeClosing: `allow`,
            },
        ],
        "react/no-array-index-key": `warn`,
        "react/no-multi-comp": `error`,
        "react/no-string-refs": `error`,
        "react/react-in-jsx-scope": `off`,
        "react/self-closing-comp": `error`,
        "react-hooks/rules-of-hooks": `error`,
        "react-hooks/exhaustive-deps": `warn`,
    },
};
