# eslint-config-kidsloop

`eslint-config-kidsloop` is an NPM dependency used for linting javascript and typescript KidsLoop projects

## Installation

```bash
bitbucket:calmisland/eslint-config-kidsloop#GIT_TAG
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
