function createProduct(req, res) {
  try {
    // SOme db Processing

    return res.json({
      success: true,
      error: {},
      message: "Successfully Created a Product",
      data: {
        id: Math.random() * 20,
        title: "",
        description: "",
        category: "",
        price: 0,
        image: "",
      },
    });
  } catch (error) {
    console.log("Something Went Wrong ", error);
  }
}

module.exports = {
  createProduct,
};
