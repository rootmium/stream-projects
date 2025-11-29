import { Database } from "bun:sqlite"
import data from "./jokes.json" with { type: "json" }

const databaseFile = Bun.file("./dev.db")

if (await databaseFile.exists()) {
  await databaseFile.delete()
}

const db  = new Database("dev.db", { create: true, strict: true })
const query = db.query(`CREATE TABLE Joke(id INTEGER PRIMARY KEY, text TEXT)`)
query.run()

const insert = db.query(`INSERT INTO Joke (id, text) VALUES (?, ?)`)

data.forEach((j) => {
  insert.run(j.id, j.joke)
})

const getResults = db.query(`SELECT * FROM Joke`)
const result = getResults.all()
console.log(result)
