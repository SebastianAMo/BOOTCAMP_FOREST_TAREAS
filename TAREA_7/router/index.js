const router = require("express").Router();
const exampleRouter = require("./example.router");


const loadEndpoint = (app) => {
  app.use("/api", router);
  router.use("/", exampleRouter);
  

};

module.exports = loadEndpoint;