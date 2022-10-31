require('dotenv').config();
const jwt = require('jsonwebtoken');

const { customErrorFn } = require('../errors/customError');
const asyncWrapper = require("../middlewares/asycWrapper");

const login = asyncWrapper( async (req,res)=>{
    const {name, passwd} = req.body;
    if (!name || !passwd) {
        return customErrorFn('Please Provide Name and Password',400)
    }
    const id = new Date().getDate();
    const token = jwt.sign({id,name},process.env.JWT_SECRET,{expiresIn:'30d'})
    res.status(200).json({msg:'User Created',token:'Bearer '+ token})
})

const dashboard = asyncWrapper( (req,res)=>{
    // console.log(req.user);
    const luckyNumber = Math.floor(Math.random()*100);
        res.status(200).json({
            msg:`Hello, Mr./Mrs. ${req.user.name} ` , 
            data:`Here is your authorized data. Your lucky number is ${luckyNumber}`
        })
})

module.exports = {
    login,
    dashboard
}