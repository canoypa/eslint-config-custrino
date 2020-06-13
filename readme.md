# ESLint Config Custrino

ESLint shareable configurations.

## Installation

```shell
yarn add --dev eslint-config-custrino
```

## Usage

Apply rules according to the purpose of use.

Used by specifying `extend` in ESLint configuration file.

```js
{
  "extends": "custrino",
  // or "extends": ["custrino", "custrino/xxx"],
  "rules": {
    // Additional, per-project rules ...
  }
}
```

### `custrino`

ESLint Contains default rules.

### `custrino/typescript`

Add a rule from ESLint TypeScript.

The following packages are additionally required to use this rule:

- [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser)
- [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
