module.exports = {
    env: {
        browser: true,
    },
    extends: [
        `@kl-engineering/eslint-config`,
        `plugin:@typescript-eslint/eslint-recommended`,
        `plugin:@typescript-eslint/recommended`,
    ],
    parser: `@typescript-eslint/parser`,
    plugins: [ `@typescript-eslint` ],
    settings: {
        react: {
            version: `detect`,
        },
    },
    rules: {
        "@typescript-eslint/await-thenable": `error`,
        "@typescript-eslint/ban-types": [
            `error`,
            {
                extendDefaults: true,
                types: {
                    "{}": false,
                },
            },
        ],
        "@typescript-eslint/comma-spacing": [ `error` ], // turned on b/c 'comma-spacing' is disabled
        "@typescript-eslint/explicit-module-boundary-types": `off`,
        '@typescript-eslint/naming-convention': [
            `error`,
            {
                selector: `default`,
                format: [ `camelCase` ],
            },
            {
                selector: `variable`,
                format: [
                    `camelCase`,
                    `UPPER_CASE`,
                    `PascalCase`,
                ],
                trailingUnderscore: `allow`,
            },
            {
                selector: `typeLike`,
                format: [ `PascalCase` ],
            },
            {
                selector: `function`,
                format: [ `camelCase`, `PascalCase` ],
            },
            {
                selector: `variable`,
                modifiers: [ `destructured` ],
                format: [
                    `camelCase`,
                    `snake_case`,
                    `PascalCase`,
                ],
            },
            {
                selector: `enumMember`,
                format: [ `UPPER_CASE` ],
            },
            {
                selector: `property`,
                format: [
                    `camelCase`,
                    `snake_case`,
                    `UPPER_CASE`,
                    `PascalCase`,
                ],
            },
            {
                selector: `memberLike`,
                format: [ `camelCase` ],
            },
        ],
        "@typescript-eslint/no-empty-interface": [
            `warn`,
            {
                allowSingleExtends: true,
            },
        ],
        "@typescript-eslint/no-unused-vars": `off`,
        "@typescript-eslint/no-var-requires": `off`,
        "@typescript-eslint/quotes": [ `error`, `backtick` ],
        "@typescript-eslint/member-delimiter-style": [
            2,
            {
                multiline: {
                    delimiter: `semi`,
                    requireLast: true,
                },
                singleline: {
                    delimiter: `semi`,
                    requireLast: false,
                },
            },
        ],
        "@typescript-eslint/no-explicit-any": [
            `off`,
            {
                fixToUnknown: false,
                ignoreRestArgs: false,
            },
        ],
        "@typescript-eslint/type-annotation-spacing": `error`,
    },
};
