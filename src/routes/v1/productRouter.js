const express = require("express");
const {createProduct, getProducts} = require("../../controllers/product_controller");
const {createProductValidator} = require("../../middlewares/product_middlewares")

const router = express.Router();

router.post("/",createProductValidator,createProduct);
router.get("/",getProducts);

module.exports = router;
