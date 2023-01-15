const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const requestMiddleware = require("./middleware/request.middleware");
const githubRoutes = require("./httpHandler/github.routes");
require("dotenv").config();
app.use(cors());
app.use(express.static("public"));
app.use(requestMiddleware);
app.use("/api", githubRoutes);
app.listen(4000, () => {
  console.log("-----------------------------------");
  console.log("Github Users started at port:4000!");
  console.log("-----------------------------------");
});
module.exports = app;
