const BadRequest = require("../errors/bad_request_error");
const errorResponse = require("../utils/error_response");

function createProductValidator(req, res, next) {
  if (!req.body.title) {
    return res
      .status(400)
      .json(
        errorResponse("Title is Not Present", new BadRequest("Missing"))
      );
  }

  if (!req.body.description) {
    return res.json({
      success: false,
      data: {},
      message: "description Not Present in the incoming Request",
      error: {
        message: "Req Body Received without description",
      },
    });
  }

  if (!req.body.price) {
    return res.json({
      success: false,
      data: {},
      message: "price Not Present in the incoming Request",
      error: {
        message: "Req Body Received without price",
      },
    });
  }

  if (!req.body.image) {
    return res.json({
      success: false,
      data: {},
      message: "image Not Present in the incoming Request",
      error: {
        message: "Req Body Received without image",
      },
    });
  }

  if (!req.body.title) {
    return res.json({
      success: false,
      data: {},
      message: "Title Not Present in the incoming Request",
      error: {
        message: "Req Body Received without Title",
      },
    });
  }
  // If Everything Looks Goog
  next();
}

module.exports = { createProductValidator };
