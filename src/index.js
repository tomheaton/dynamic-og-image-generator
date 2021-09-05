const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello world");
  res.send({message: "hello world"});
})
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});