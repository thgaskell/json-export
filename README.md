# json-export

Converts an exported javascript object to JSON.

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
