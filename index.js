module.exports = {
    env: {
        es2020: true,
        node: true,
    },
    extends: [
        `eslint:recommended`,
        `plugin:@typescript-eslint/eslint-recommended`,
        `plugin:@typescript-eslint/recommended`,
    ],
    parser: `@typescript-eslint/parser`,
    plugins: [
        `@typescript-eslint`,
        `putout`,
        `simple-import-sort`,
        `import`,
    ],
    rules: {
        indent: [ `error`, 4 ],
        "linebreak-style": [ `error`, `unix` ],
        semi: [ `error`, `always` ],
        "array-bracket-newline": [
            `error`,
            {
                multiline: true,
                minItems: 3,
            },
        ],
        "array-element-newline": [
            `error`,
            {
                multiline: true,
                minItems: 3,
            },
        ],
        "array-bracket-spacing": [ `error`, `always` ],
        "comma-dangle": [
            `error`,
            {
                arrays: `always-multiline`,
                exports: `always-multiline`,
                functions: `always-multiline`,
                imports: `always-multiline`,
                objects: `always-multiline`,
            },
        ],
        "comma-spacing": `off`, // turned off b/c '@typescript-eslint/comma-spacing' is enabled
        "dot-location": [ `error`, `property` ],
        "eol-last": [ `error`, `always` ],
        eqeqeq: `error`,
        "function-call-argument-newline": [ `error`, `never` ],
        "function-paren-newline": [ `error`, `never` ],
        "key-spacing": [ `error` ],
        "no-console": process.env.NODE_ENV === `production` ? `error` : `off`,
        "no-dupe-else-if": `error`,
        "no-lonely-if": `error`,
        "no-multiple-empty-lines": [
            `error`,
            {
                max: 1,
                maxEOF: 0,
            },
        ],
        "no-return-await": `error`,
        "no-trailing-spaces": `error`,
        "no-warning-comments": 1,
        "object-curly-spacing": [ `error`, `always` ],
        "object-curly-newline": [
            `error`,
            {
                ObjectExpression: {
                    multiline: true,
                    minProperties: 1,
                },
                ObjectPattern: {
                    multiline: true,
                    minProperties: 3,
                },
                ImportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
                ExportDeclaration: {
                    multiline: true,
                    minProperties: 3,
                },
            },
        ],
        "object-property-newline": `error`,
        "newline-per-chained-call": [
            `error`,
            {
                ignoreChainWithDepth: 1,
            },
        ],
        "prefer-template": `error`,
        "quote-props": [ `error`, `as-needed` ],
        "require-await": `error`,
        "semi-spacing": [
            `error`,
            {
                before: false,
                after: true,
            },
        ],
        "space-before-function-paren": [ `error`, `always` ],
        "template-curly-spacing": `error`,
        yoda: `error`,
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
        "@typescript-eslint/no-unused-vars": 1,
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
        "putout/multiple-properties-destructuring": [
            `error`,
            {
                minProperties: 2,
            },
        ],
        "simple-import-sort/imports": [
            `error`,
            {
                groups: [],
            },
        ],
        "simple-import-sort/exports": `error`,
        "import/first": `error`,
        "import/newline-after-import": `error`,
        "import/no-duplicates": `error`,
    },
};
