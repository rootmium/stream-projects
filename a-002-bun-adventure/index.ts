import figlet from "figlet"
import index from "./index.html"
import { Database } from "bun:sqlite"

const db = new Database("dev.db", { strict: true })

const resHelloWorld = () => {
  return new Response("Hello World!")
}

const figletCreate = (text) => {
  const body = figlet.textSync(text)
  return new Response(body)
}

const addProduct = (data) => {
  return data
}

const dynamicRoute = (params) => {
  return Response.json({"uniqueId": params.id, "productName": params.name})
}

const getAllJokes = () => {
  const getJokes = db.query(`SELECT * FROM Joke`)
  const result = getJokes.all()
  return Response.json(result)
}

const server = Bun.serve({
  development: true,
  port: 3000,
  routes: {
    "/": resHelloWorld,
    "/html": index,
    "/asciiart": figletCreate("Figlet"),
    "/product": {
      async POST(req) {
        const data = await req.json()
        const result = addProduct(data)
        return Response.json({ success: true, response: result })
      }
    },
    "/products/:id/:name": req => dynamicRoute(req.params),
    "/jokes": getAllJokes 
  },
  fetch(req) {
    return new Response("Not Found", { status: 404 })
  }
})

console.log(`Server running at ${server.url}`)
