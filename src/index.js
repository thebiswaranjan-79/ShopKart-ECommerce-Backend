const express = require("express");
const app = express();

const { PORT } = require("./config/serverConfig");
const  apiRoutes  = require("./routes/apiRouter");
// const { pingController } = require("./controllers/pingController");

// app.get("/api/v1/ping", pingController).;

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
