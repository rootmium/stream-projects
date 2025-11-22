console.log("server file is great!");
import express from "express";
const app = express();

// route root
app.get("/", async (req, res) => {
  res.send("Hello world!");
});

// Start listening
app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
