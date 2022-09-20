const express = require("express");

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

app.get("/test", (req, res) => {
  res.send("Our api server is working correctly");
});

app.listen(port, () => {
  console.log(`Started api service on port ${port}`);
  console.log(`Our host is ${host}`);
});
