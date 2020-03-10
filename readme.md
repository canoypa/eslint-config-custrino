# ESLint Config Custrino

Strict ESLint shareable configurations.

## Installation

```shell
npm install --save-dev eslint-config-custrino
```

## Usage

Used by specifying `extend` in ESLint configuration file.

```js
{
  "extends": "custrino",
  "rules": {
    // Additional, per-project rules ...
  }
}
```

If you don't use TypeScript in your project, use `custrino/no-ts`.
