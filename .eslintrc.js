module.exports = {
    env: {
        es2020: true,
    },
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
        "eol-last": [ `error`, `always` ],
        "no-trailing-spaces": `error`,
        "no-multiple-empty-lines": [
            `error`,
            {
                max: 1,
                maxEOF: 0,
            },
        ],
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
        "quote-props": [ `error`, `as-needed` ],
        quotes: [ `error`, `backtick` ],
    },
};
