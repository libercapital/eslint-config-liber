# Eslint-config-liber

Eslint and prettier configuration for front-end projects

## Installation

1. add the package to the devDependencies on package.json:
  ```
  "eslint-config-liber": "git+ssh://git@github.com:libercapital/eslint-config-liber"
  ```
2. add the peer dependecencies `yarn add -D prettier eslint`

## Prettier configuration

  - to enable prettier configuration for extensions add to `package.json`:
  ```
  "prettier": "eslint-config-liber/prettier"
  ```
   - or create a `prettier.config.js` file :
   ```
   module.exports = require('eslint-config-liber/prettier);
   ```

   with that any prettier extension you're using should be able to recognize the configuration




## Usage

in your `.eslintrc` or in the eslint configuration in `package.json` extend from this config 
```
"extends": "liber"
```

