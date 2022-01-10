const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;
console.log(port);

app.listen(port, () => {
  var mess = "Am Listening at http://localhost:" + port;
  console.log(mess);
});

app.get("/", async (req, res) => {
  try {
    res.status(200).send(`The App IS Runnig on: ${port}`);
  } catch (e) {
    res.status(400).send(`Error The App IS Runnig on: ${port}`);
  }
});
