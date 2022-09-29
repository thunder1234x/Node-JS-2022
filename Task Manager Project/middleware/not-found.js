const notFoundPage = (req,res,next)=>res.status(404).json({success:false , msg: "Route not found error .. "});

module.exports = notFoundPage;