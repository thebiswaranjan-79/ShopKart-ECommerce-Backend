const express = require("express");
const {createProduct, getProducts, getProductById} = require("../../controllers/product_controller");
const {createProductValidator} = require("../../middlewares/product_middlewares");


const router = express.Router();

router.post("/",createProductValidator,createProduct);
router.get("/",getProducts);
router.get("/:id",getProductById);

module.exports = router;
