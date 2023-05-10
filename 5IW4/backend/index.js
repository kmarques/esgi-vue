const express = require("express");
const cors = require("cors");
const tracker = require("./middleware/tracker");
const app = express();

app.use(cors());

// Logging : winston + morgan
app.use(
  tracker({
    APP_ID: "5IW4",
    service: "microservice-billing",
  })
);

app.get("/", (req, res, next) => {
  req.sendTrackingEvent({
    tag: "home",
    event_type: "pageview",
  });
  res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
