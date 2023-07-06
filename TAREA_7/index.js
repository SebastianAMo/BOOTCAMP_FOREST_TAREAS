const { config } = require("./config")
const express = require("express");
const cors = require("cors");
const app = express();
const loadEndpoint = require("./router/index");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

loadEndpoint(app);
app.set("port", config.port);

app.listen(app.get("port"), () => {
  console.log(
    `[SERVER]: App running on port on http://localhost:${app.get("port")}/`
  );
});
