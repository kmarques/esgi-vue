const express = require("express");

const app = express();

app.use(require("cors")());

app.use(
  tracker({
    APP_ID: "YOUR_APP_ID",
    APP_SECRET: "YOUR_APP_SECRET",
    service: "backend",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World");
});
