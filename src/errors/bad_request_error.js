class BadRequest extends Error {
  constructor(propertyMissing) {
    const errormessage = `${propertyMissing} is Missing From the Request Body`;
    super(errormessage);
    this.statusCode = 400;
    this.errormessage = errormessage;
  }
}
module.exports = BadRequest;
