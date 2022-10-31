const CustomError = require("./CustomError");


class BadRequestError extends CustomError{
    constructor(msg){
        super(msg)
        this.statusCode = 400;
    }
}

module.exports = BadRequestError