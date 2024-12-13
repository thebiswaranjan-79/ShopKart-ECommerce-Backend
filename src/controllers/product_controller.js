const { StatusCodes, ReasonPhrases } = require("http-status-codes");

function createProduct(req, res) {
  try {
    // SOme db Processing

    return res.status(StatusCodes.CREATED).json({
      success: true,
      error: {},
      message: ReasonPhrases.CREATED + " the Product",
      data: {
        id: Math.random() * 20,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        price: req.body.price,
        image: req.body.image,
      },
    });
  } catch (error) {
    console.log("Something Went Wrong ", error);
  }
}

module.exports = {
  createProduct,
};
