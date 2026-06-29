# Proxy

During development

React runs on

localhost:5173

Backend runs on

localhost:3000

Instead of writing

```js
axios.get("http://localhost:3000/api")
```

we write

```js
axios.get("/api")
```

Vite forwards the request to

localhost:3000

using

```js
server:{
    proxy:{
        "/api":"http://localhost:3000"
    }
}
```

---

Why?

No need to write backend URL everywhere.

Changing server later becomes easy.

---

Production

Proxy is usually removed.

Frontend and backend are served differently.