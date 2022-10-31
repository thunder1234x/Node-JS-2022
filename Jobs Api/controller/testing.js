const asycWrapper = require("../middlewares/asyncWrapper")
const  {BadRequestError}  = require("../errors")

const products = asycWrapper( async (req,res)=>{
    throw new BadRequestError('Bad request Error')
    res.status(200).json({
        msg:'OK.'
    })
})

module.exports = {
    products
}