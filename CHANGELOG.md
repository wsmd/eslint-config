# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

## [1.2.0] - 2019-12-22

### Added

- `[typescript]` Allow TypeScript linting inside mixed codebases that consist of JavaScript and TypeScript.

### Changed

- `[base]` Disable rule `no-plusplus` to allow `++` and `--` operators.
- `[typescript]` Disable rule `@typescript-eslint/no-empty-function` to allow empty functions. This is usually common when declaring a no-op function.

### Fixed

- `[typescript]` Fix conflicting rule `eslint(import/extensions)` when combining `typescript` and `base`/`react` configurations.

## [1.1.0] - 2019-11-27

### Added

- `[typescript]` Add TypeScript support to `eslint-plugin-import` via `eslint-import-resolver-typescript` which is now included by default.

### Changed

- `[base]` Disable rule `class-methods-use-this` as class methods tend to be specific to the class context, and moving those methods outside the class makes harder to subclass and makes the code less readable.
- `[typescript]` Update rule `@typescript-eslint/no-explicit-any` to ignore rest arguments.
- `[typescript]`: Update rule `@typescript-eslint/camelcase` to ignore properties and destructuring.
### Removed

- `[typescript]`: Remove rule `@typescript-eslint/consistent-type-definitions` to allow both types and interfaces because object literal types have implicit index signatures but interfaces do not.

## [1.0.0] - 2019-11-25

### Added

- `@wsmd/eslint-config/base`
- `@wsmd/eslint-config/react`
- `@wsmd/eslint-config/typescript`
- `@wsmd/eslint-config/prettier`
- `@wsmd/eslint-config/jest`
- `@wsmd/eslint-config/all`

[unreleased]: https://github.com/wsmd/eslint-config/compare/v1.1.0...HEAD
[1.2.0]: https://github.com/wsmd/eslint-config/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/wsmd/eslint-config/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/wsmd/eslint-config/releases/tag/v1.0.0
