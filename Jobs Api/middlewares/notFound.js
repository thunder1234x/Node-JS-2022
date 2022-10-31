const NotFoundError = (req,res)=>{
    return res.status(404).json({
        msg:'Not Found'
    })
}

module.exports = NotFoundError;