const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utils/error_response");

function createProductValidator(req, res, next) {
  if (!req.body.title) {
    return res
      .status(StatusCodes.BadRequest)
      .json(errorResponse(ReasonPhrases.BadRequest, new BadRequest("Title")));
  }

  if (!req.body.description) {
    return res
      .status(StatusCodes.BadRequest)
      .json(
        errorResponse(ReasonPhrases.BadRequest, new BadRequest("Description"))
      );
  }

  if (!req.body.price) {
    return res
      .status(StatusCodes.BadRequest)
      .json(errorResponse(ReasonPhrases.BadRequest, new BadRequest("Price")));
  }

  if (!req.body.image) {
    return res
      .status(StatusCodes.BadRequest)
      .json(errorResponse(ReasonPhrases.BadRequest, new BadRequest("Image")));
  }

  if (!req.body.category) {
    return res
      .status(StatusCodes.BadRequest)
      .json(
        errorResponse(ReasonPhrases.BadRequest, new BadRequest("Category"))
      );
  }
  // If Everything Looks Goog
  next();
}

module.exports = { createProductValidator };
