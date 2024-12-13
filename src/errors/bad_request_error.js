class BadRequest extends Error {
    constructor(errormessage){
        super(errormessage);
        this.statusCode = 400;
        this.errormessage = errormessage;
    }
}
module.exports = BadRequest;