# express.static()

```js
app.use(express.static("dist"));
```

## Why?

After building React

```bash
npm run build
```

a dist folder is created.

Express serves these files to the browser.

Browser

↓

Express

↓

dist

↓

React Application

---

Without express.static()

Express cannot send the React files.

---

Remember

Development

Vite serves React.

Production

Express serves the dist folder.