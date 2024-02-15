# @avenue-ui/eslint-config

## Install

```npm 
npm i --save-dev eslint @avenue-ui/eslint-config
```

## Usage
Add ```.eslintrc``` file in the project root with the following content:
```json
{
  "extends": "@avenue-ui/eslint-config",
  "root": true
}
```

### Prettier

```json
{
  "extends": ["@avenue-ui/eslint-config", "@avenue-ui/eslint-config/prettier"],
  "root": true
}
```

### Order

```json
{
  "extends": ["@avenue-ui/eslint-config", "@avenue-ui/eslint-config/order"],
  "root": true
}
```
