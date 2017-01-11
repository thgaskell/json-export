# json-export

Converts an exported javascript object to JSON.

# Installation

This module may be installed either globally:

```bash
npm i -g json-export-cli
```

or locally:

```bash
npm install --save-dev json-export-cli
```

# Usage

```bash
json-export my-object.js
```

# Example

**my-object.js**

```js
module.exports = {
  sum: 1 + 2,
};
```

## Output

```json
{"sum":3}
```
