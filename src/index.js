require("dotenv").config();
const fs = require("fs");
const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
const template = require("../templates/template");

app.get("/", (req, res) => {
  console.log("hello world");
  res.send({message: "hello world"});
});

app.get("/image", (req, res) => {
  console.log("image requested");
  res.send(template({title: "the title", description: "the description", style: ""}));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});