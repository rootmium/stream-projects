import { createServer } from "node:http";

const port = 3000;

const server = createServer((req, res) => {
  const { method , url } = req
  const parsedUrl = new URL(url, `http://${req.headers.host}`)
  const path = parsedUrl.pathname

  if (path === "/" && method === "GET") {
    res.writeHeader(200, { "Content-Type": "text/json" })
    res.end(JSON.stringify({ name: "hello world!" }))
  } else {
    res.writeHeader(404, { "Content-Type": "text/json" })
    res.end(JSON.stringify({ erro: "Wrong url" }))
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
