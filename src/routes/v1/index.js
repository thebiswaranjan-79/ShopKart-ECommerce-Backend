const express = require("express");

const v1Router = express.Router();

const pingRouter = require("../v1/pingRoutes");
const productRouter = require("../v1/productRouter");

v1Router.use("/ping", pingRouter);
v1Router.use("/products", productRouter);

module.exports = v1Router;
