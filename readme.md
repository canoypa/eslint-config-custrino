# ESLint Config Custrino

A personally created ESLint shareable configuration set.

## Installation

```shell
$ npm install --save-dev eslint-config-custrino
```

## Usage

Used by specifying in the `extends` section of the ESLint configuration.

```jsonc
{
  "extends": ["custrino", "custrino/xxxxxx"]
}
```

### Additional configurations

Additional configurations can be used depending on the project.

You need to add a corresponding plugin.

#### `custrino/typescript`

This configuration enables the rules for TypeScript and any additional rules supported by the TypeScript ESLint plugin.

Add required plugins:

```shell
$ npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

#### `custrino/react`

This configuration enables the rules for React.

Add required plugins:

```shell
$ npm install --save-dev eslint-plugin-react-hooks eslint-plugin-react
```
