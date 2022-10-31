const BadRequestError = require("./bad-request");
const CustomError = require("./CustomError");
const AuthenticationError = require("./unauthenticatedError");

module.exports ={
    CustomError,
    BadRequestError,
    AuthenticationError
}