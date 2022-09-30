class CustomError extends Error{
    constructor(statusCode , message){
        super(message);
        this.statusCode = statusCode;

    }
}

const CustomErrorHandler = (statusCode , message)=>{
    return new CustomError(statusCode , message);
}

module.exports ={ CustomError , CustomErrorHandler};