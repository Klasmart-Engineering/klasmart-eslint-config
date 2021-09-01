module.exports = {
    env: {
        browser: true,
    },
    extends: [ `@kidsloop/eslint-config/jest`, `plugin:testing-library/react` ],
    rules: {
        "testing-library/no-unnecessary-act": [
            `error`,
            {
                isStrict: true,
            },
        ],
    },
};
