<a
  href="https://travis-ci.org/Xotic750/symbol-iterator-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/symbol-iterator-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/symbol-iterator-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/symbol-iterator-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/symbol-iterator-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/symbol-iterator-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/symbol-iterator-x"
  title="npm version">
<img src="https://badge.fury.io/js/symbol-iterator-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/symbol-iterator-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/symbol-iterator-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/symbol-iterator-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/symbol-iterator-x?branch=master"
  alt="bettercodehub score" height="18">
</a>

<a name="module_symbol-iterator-x"></a>

## symbol-iterator-x

The system Symbol.iterator (real or fake)

Possible values are.

- Symbol.iterator (real)
- '\_es6-shim iterator\_' (fake)
- '@@iterator' (fake)

**Example**

```js
import $iterator$ from 'symbol-iterator-x';

typeof [][$iterator$] === 'function';
```
