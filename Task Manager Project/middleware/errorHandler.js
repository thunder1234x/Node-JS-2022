const {CustomError} = require('../errors/customerror');

const errorHandler = (err,req,res,next)=>{
    if (err instanceof CustomError) {
        return  res.status(err.statusCode).json({msg:err.message});
    }
    return res.status(500).json({msg:"Something went wrong , please try again later"});
}

module.exports = errorHandler;