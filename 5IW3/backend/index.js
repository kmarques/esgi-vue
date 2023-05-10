const express = require("express");

const app = express();

app.use(require("cors")());

app.use(
  tracker({
    APP_ID: "5IW3",
    APP_SECRET: "5IW3",
    service: "microservice-billing",
  })
);

//app.options("*", (req, res)=> {
//    db.collection('app').findOne({
//        appId: req.headers['x-app-id'],
//        origin: req.headers['origin']
//    });
//});

app.get("/", (req, res, next) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
