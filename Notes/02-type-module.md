# type: module

Inside package.json

```json
"type": "module"
```

## Why?

Node normally uses

```js
const express = require("express");
```

Adding

```json
"type":"module"
```

allows

```js
import express from "express";
```

---

Without it

```js
import
```

will give an error.

---

Remember

require() → CommonJS

import/export → ES Modules