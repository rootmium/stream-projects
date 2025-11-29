import { createServer } from "node:http";

const port = 3000;

const server = createServer((req, res) => {
  console.log(`url: ${req.url}`)
  console.log(`method: ${req.method}`)
  console.log(JSON.stringify(req.headers))
  console.log(req.headers.host)
  console.log(req.headers["user-agent"])
  console.log(req.headers.accept)

  res.writeHeader(201, {
    "Content-Type": "text/json"
  })
  res.end(JSON.stringify({ name: "hello world!" }))
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
