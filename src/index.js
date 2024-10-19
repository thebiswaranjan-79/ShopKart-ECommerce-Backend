const express = require("express");
const app = express();

const { PORT } = require("./config/serverConfig");
const  pingRoutes  = require("./routes/pingRoutes");
// const { pingController } = require("./controllers/pingController");

// app.get("/api/v1/ping", pingController).;

app.use("/api/v1/ping", pingRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
