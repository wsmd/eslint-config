<h1 align="center">
  <img src="https://user-images.githubusercontent.com/2100222/69524696-8fac5600-0f5e-11ea-9258-f14132ff3c3c.png" width="547" />

@wsmd/eslint-config

</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/@wsmd/eslint-config">
    <img src="https://img.shields.io/npm/v/@wsmd/eslint-config.svg" alt="Current Release" />
  </a>
  <a href="https://travis-ci.org/wsmd/eslint-config">
    <img src="https://travis-ci.org/wsmd/eslint-config.svg?branch=master" alt="CI Build">
  </a>
  <a href="https://coveralls.io/github/wsmd/eslint-config?branch=master">
    <img src="https://coveralls.io/repos/github/wsmd/eslint-config/badge.svg?branch=master" alt="Coverage Status">
  </a>
  <a href="https://github.com/wsmd/eslint-config/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/wsmd/eslint-config.svg" alt="Licence">
  </a>
</p>

All-in-one, composable, ESLint configurations with support for:

- **Javascript** (via Airbnb Javascript style guide)
- **React** (via Airbnb React style guide)
- **TypeScript**
- **Prettier**
- **Jest**

<details>
<summary>📖 Table of Contents</summary>
<p>

- [Usage](#usage)
- [Configurations](#configurations)
  - [`@wsmd/eslint-config/base`](#wsmdeslint-configbase)
  - [`@wsmd/eslint-config/react`](#wsmdeslint-configreact)
  - [`@wsmd/eslint-config/typescript`](#wsmdeslint-configtypescript)
  - [`@wsmd/eslint-config/prettier`](#wsmdeslint-configprettier)
  - [`@wsmd/eslint-config/jest`](#wsmdeslint-configjest)
  - [`@wsmd/eslint-config/all`](#wsmdeslint-configall)
- [Composing Multiple Configurations](#composing-multiple-configurations)
- [Gotchas](#gotchas)
  - [Order of Configs](#order-of-configs)
  - [Custom Rules](#custom-rules)
- [License](#license)

</p>
</details>

## Usage

This package consists of various configurations that can be composed together depending on the needs of the project.

To get started, add `@wsmd/eslint-config` to your project:

```sh
# using yarn
yarn add --dev eslint @wsmd/eslint-config

# using npm
npm i --save-dev eslint @wsmd/eslint-config
```

Then add [one or some of the configurations](#configurations) included in this package to your ESLint configuration file depending on the project's needs. For example, this ESLint configuration below adds support for TypeScript, Prettier and Jest:

```js
{
  "extends": [
    "@wsmd/eslint-config/typescript",
    "@wsmd/eslint-config/prettier",
    "@wsmd/eslint-config/jest"
  ]
}
```

Note that some of configurations require other dependencies to be included in your project as well (npm does not allow optional peer dependencies). For more information, please refer to the documentation of each configuration below.

## Configurations

### `@wsmd/eslint-config/base`

This configuration is an extensions of the Airbnb JavaScript style guide targeted for JavaScript projects without React or TypeScript. It also serves as the base configuration for some of the other configurations included in this package.

Under the hood, this configuration extends:

- `airbnb-eslint-config-base`
- `eslint-plugin-import`

#### Usage <!-- omit in toc -->

```js
{
  "extends": [
    "@wsmd/eslint-config/base",
  ]
}
```

### `@wsmd/eslint-config/react`

This is an extension of the [base configuration](#wsmdeslint-configbase) targeted for React projects.

Under the hood, this configuration extends:

- `@wsmd/eslint-config/base`
- `eslint-airbnb-config`
  - `eslint-plugin-react`
  - `eslint-plugin-jsx-a11y`
- `eslint-plugin-react-hooks`

#### Usage <!-- omit in toc -->

```js
{
  "extends": [
    "@wsmd/eslint-config/react",
  ]
}
```

### `@wsmd/eslint-config/typescript`

This configuration adds support for TypeScript projects by specifying the TypeScript ESLint Parser (`@typescript-eslint/parser`) as the code parser. It also applies a set of rules specific to TypeScript.

It can also be used alongside `@wsmd/eslint-config/base` or `@wsmd/eslint-config/react`.

Under the hood, this configuration extends:

- `@typescript-eslint/recommended`
- `plugin:import/typescript`

#### Usage <!-- omit in toc -->

```js
{
  "extends": [
    "@wsmd/eslint-config/typescript",
  ]
}
```

If you are including this configuration in your project, make sure you have `typescript` installed a dependency.

### `@wsmd/eslint-config/prettier`

This configuration enforces Prettier formatting via ESLint. This includes:

- Disabling all ESLint rules that may conflicts with prettier formatting.
- Reporting prettier violations as ESLint issues.

It does not extend any of the other configurations in this package. However, please note that it must be applied after all other configurations.

#### Usage <!-- omit in toc -->

```js
{
  "extends": [
    /* other eslint configurations... */
    "@wsmd/eslint-config/prettier"
  ]
}
```

If you are including this configuration in your project, make sure you have `prettier` installed a dependency.

### `@wsmd/eslint-config/jest`

This configuration configures the ESLint environment to be compatible with Jest. It also extends the style and recommended rules included in `eslint-plugin-jest`.

It does not extend any of the other configurations in this package.

#### Usage <!-- omit in toc -->

```js
{
  "extends": [
    "@wsmd/eslint-config/jest",
  ]
}
```

### `@wsmd/eslint-config/all`

This configuration is a convenient configuration that extends all the other configurations above.

By extending it, ESLint support will enforce rules from the Airbnb JavaScript and React style guide, and have support for TypeScript, Jest, and Prettier.

#### Usage <!-- omit in toc -->

```js
{
  "extends": [
    "@wsmd/eslint-config/all",
  ]
}
```

## Composing Multiple Configurations

The idea of this package is to allow the composition of multiple configurations to better fit the project needs as opposed to a catch-all configuration that could potentially slow down the linting process if most of the rules are not needed.

```js
{
  "extends": [
    "@wsmd/eslint-config/base",
    "@wsmd/eslint-config/react", // `react` already includes `base`
    "@wsmd/eslint-config/typescript",
    "@wsmd/eslint-config/prettier",
    "@wsmd/eslint-config/jest"
  ]
}
```

## Gotchas

### Order of Configs

If you are composing multiple configurations, note that the configurations must be listed in the following order:

The `base`/`react` configs come first, followed by the `typescript` config, then followed by the `prettier` config.

### Custom Rules

This config builds on top of popular style guides and recommended rule sets of various plugins. However, it was originally built as a sharable ESLint configuration for my personal projects. This means that there are a small number of rule overrides that I have applied as well.

You can still override these rules and customize others in your ESLint config file:

```js
{
  "extends": [
    "@wsmd/eslint-config/base",
    "@wsmd/eslint-config/typescript",
    "@wsmd/eslint-config/prettier",
    "@wsmd/eslint-config/jest"
  ],
  "rules": {
    // override rules here
  }
}
```

## License

MIT
