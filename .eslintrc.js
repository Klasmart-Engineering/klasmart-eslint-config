const { rules, ...rest } = require(`./index`);

module.exports = {
    ...rest,
    rules: {
        ...rules,
        quotes: [ `error`, `backtick` ],
        "comma-spacing": `error`,
    },
};
