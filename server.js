console.log("server file is great!");
import express from "express";
const app = express();
const PORT = 3000;

// middleware for json request parsing
app.use(express.json());

// route root
app.get("/", async (_req, res) => {
  res.json({ message: "Hello world!" });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
