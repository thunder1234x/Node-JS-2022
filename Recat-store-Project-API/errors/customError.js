
class CustomError extends Error{
    
    constructor(msg,statusCode){
        super(msg)
        this.statusCode = statusCode;
    }
}

const customErrorFn = (msg,statusCode)=>{
    throw new CustomError(msg,statusCode);
}

module.exports = {customErrorFn , CustomError}