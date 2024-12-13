const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utils/error_response");

function createProductValidator(req, res, next) {
  if (!req.body.title) {
    return res
      .status(400)
      .json(
        errorResponse("Title is Not Present", new BadRequest("Title"))
      );
  }

  if (!req.body.description) {
    return res
      .status(400)
      .json(
        errorResponse("Description is Not Present", new BadRequest("Description"))
      );
  }

  if (!req.body.price) {
    return res
    .status(400)
    .json(
      errorResponse("Price is Not Present", new BadRequest("Price"))
    );
  }

  if (!req.body.image) {
    return res
      .status(400)
      .json(
        errorResponse("Image is Not Present", new BadRequest("Image"))
      );
  }

  if (!req.body.category) {
     return res
      .status(400)
      .json(
        errorResponse("Category is Not Present", new BadRequest("Category"))
      );
  }
  // If Everything Looks Goog
  next();
}

module.exports = { createProductValidator };
