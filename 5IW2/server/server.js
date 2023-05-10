const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(
  tracker({
    app_id: "5IW2",
    service: "backend1",
    app_secret: "5IW2",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000!");
});
