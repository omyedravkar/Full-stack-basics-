# CORS

## What is CORS?

CORS stands for Cross-Origin Resource Sharing.

It is a browser security feature.

Example:

Frontend:
http://localhost:5173

Backend:
http://localhost:3000

Since both have different ports, they are different origins.

The browser blocks requests between different origins unless the backend allows them.

---

## Why do we use CORS?

Without CORS:

React ❌ Backend

Browser blocks the request.

With CORS:

React ✅ Backend

because Express tells the browser that the request is allowed.

---

## How?

```js
import cors from "cors";

app.use(cors());
```

---

## Remember

CORS is checked by the browser.

Postman doesn't care about CORS.