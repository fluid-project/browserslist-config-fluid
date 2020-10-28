# browserslist-config-fluid

[![License: BSD 3-Clause](https://badgen.net/github/license/fluid-project/browserslist-config-fluid/)](https://github.com/fluid-project/browserslist-config-fluid/blob/main/LICENSE.md)
[![Latest Release](https://badgen.net/github/release/fluid-project/browserslist-config-fluid/)](https://github.com/fluid-project/browserslist-config-fluid/releases/latest/)
[![NPM Package](https://badgen.net/npm/v/browserslist-config-fluid)](https://www.npmjs.com/package/browserslist-config-fluid)

Shareable Browserslist config for the Fluid Project.

## Usage

To use the [browserslist](https://github.com/browserslist/browserslist) configuration provided by this module, add it as a dev dependency to your project:

```bash
npm install browserslist-config-fluid --save-dev --save-exact
```

Then, add the following to your project's `package.json` file.

```json
    "browserslist": [
        "extends browserslist-config-fluid"
    ]
```

## Development

### Releasing

This package uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/), enforced with [commitlint](https://commitlint.js.org/). This facilitates releasing new versions of the package. To cut a release, run:

```bash
npm run release
```

This will tag an appropriate [semantic version](https://semver.org) based on the nature of the recent commits to the project and update [the changelog](CHANGELOG.md).

You will then need to publish the updated version to the [npm registry](http://npmjs.com). This requires an npm account with appropriate maintainer permissions. To publish the package, run:

```bash
npm publish
```

For more information on publishing to npm, see the [npm publish documentation](https://docs.npmjs.com/cli/publish).
