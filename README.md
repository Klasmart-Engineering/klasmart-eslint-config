# eslint-config-kidsloop

`eslint-config-kidsloop` is an NPM dependency used for linting javascript and typescript KidsLoop projects

## Installation

Add the following dependencies to the projects `package.json`:
```json
{
  "devDependencies": {
    ...
    "@kidsloop/eslint-config": "bitbucket:calmisland/eslint-config-kidsloop#1.0.0",
    ...
    "eslint": "^7.0.0",
    ...
  }
}
```

## Usage

In your local `eslintrc.js` config file:

```javascript
module.exports = {
  ...
  extends: [ `@kidsloop/eslint-config` ],
  ...
}
```

For React projects, use instead:
```javascript
module.exports = {
  ...
  extends: [ `@kidsloop/eslint-config/react` ],
  ...
}
```
