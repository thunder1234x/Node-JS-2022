const { CustomError } = require("../errors/customError");

const errorMiddleware = async (err,req,res,next)=>{
    if (err instanceof(CustomError)) {
        console.log(err.message);
        return res.status(err.statusCode).json({msg:err.message})
    }
    return res.status(500).json({
        msg:'Something went wrong , Please try again later'
    })
}



module.exports  = errorMiddleware;