# @orbitkit/api

## 0.1.5

### Patch Changes

- bf709fb: feat: enables tsup experimental dts option

  - switches tsup to use the new experimental dts option.
  - adds a `tsconfig.build.json` file to the `ui` package.
  - removes `concurrently` and `@storybook/testing-library`
  - adds `@storybook/test` to the `ui` package as a replacement for `@storybook/testing-library` due to deprecation.

- Updated dependencies [bf709fb]
  - @orbitkit/utils@0.1.5
  - @orbitkit/auth@0.1.5
  - @orbitkit/db@0.1.5
  - @orbitkit/env@0.1.5

## 0.1.4

### Patch Changes

- 4f0f72d: feat: creates a trpc api package

  changes in this release:

  - creates a new `packages/api` package that hosts a tRPC api to be used for the web application.
  - renames the lucia auth `getSession` function to `auth` and provides a new uncached version of it.
  - refactors the code in some places to be generally better.
  - splits the utils package from a barrel export to multi-file export.
  - `getBaseUrl` util now returns `window.location.origin` instead of an empty string when the `window` object is not `undefined`.

- Updated dependencies [4f0f72d]
  - @orbitkit/utils@0.1.4
  - @orbitkit/auth@0.1.4
  - @orbitkit/db@0.1.4
  - @orbitkit/env@0.1.4