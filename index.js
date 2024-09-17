import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

let blogProfile = "";
let blogPost = "";
let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
  });
  
  app.post("/submit", (req, res) => {
    blogProfile = req.body["profile"];
    blogPost = req.body["blogPost"];
    res.send(`<h1>Creator:</h1><h2>${blogProfile}</h2>
            <h1>Post:</h1><h2>${blogPost}</h2>`);
  });


  app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
  });