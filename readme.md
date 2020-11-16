# ESLint Config Custrino

ESLint shareable configurations.

## Installation

```shell
$ npm install --save-dev eslint-config-custrino
```

## Usage

Used by specifying in the `extends` section of the ESLint configuration.

```js
{
  "extends":
    - "custrino"
    - "custrino/xxx"
  "rules": {
    // Additional, per-project rules ...
  }
}
```

### Select Rule

There are several rules depending on the intended use.

#### `custrino`

Contains standard ESLint rules.

#### `custrino/typescript`

Contains TypeScript rules.

The following packages are additionally required to use this rule:

- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)

#### `custrino/react`

Contains React rules.

The following packages are additionally required to use this rule:

- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
