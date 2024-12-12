const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/apiRouter");

// Middlewares 
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));


app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`Server Running at PORT ${PORT}`);
});
