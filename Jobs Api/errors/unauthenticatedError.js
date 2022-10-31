const CustomError  = require("./CustomError");

class AuthenticationError extends CustomError{
    constructor(msg){
        super(msg)
        this.statusCode = 401;
    }
}

module.exports = AuthenticationError