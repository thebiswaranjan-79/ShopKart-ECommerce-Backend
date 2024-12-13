const { StatusCodes, ReasonPhrases } = require("http-status-codes");

const  ProductService  = require("../services/product_service");

function createProduct(req, res) {
  try {
    // Some db Processing

    const response = ProductService.createProduct(req.body);

    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: ReasonPhrases.CREATED + " the Product",
      data: response,
    });
  } catch (error) {
    console.log("Something Went Wrong ", error);
  }
}

function getProducts(req, res){
    try {
       const response = ProductService.getProducts();
      
       return res.status(StatusCodes.OK).json({
        success: true,
        error: {},
        message: "Successfully fetch the Product",
        data: response,
      });

    } catch (error) {
      console.log("Something Went Wrong ", error);
    }
}

function getProductById(req, res){
  try {
     const response = ProductService.getProductById(req.params.id);
    
     return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetch the Product",
      data: response,
    });

  } catch (error) {
    console.log("Something Went Wrong ", error);
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductById
};
