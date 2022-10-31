const jwt = require('jsonwebtoken');
const { customErrorFn } = require('../errors/customError');

const authenticationProvider = (req,res,next)=>{
    const authHeader = req.headers.authorization;
    // console.log(authHeader);
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return customErrorFn('No Auth Token Provided',401);
    }

    const token = authHeader.split(' ')[1]
    // console.log(token);

    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        // console.log(decode);
        const {id , name} = decode;
        req.user = {id,name};
        next()
    } catch (error) {
        return customErrorFn('Not authorized to access this route',401);
    }
}

module.exports = authenticationProvider