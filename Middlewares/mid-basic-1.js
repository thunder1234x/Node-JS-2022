const base = (req,res,next)=>{
    console.log("Base middleware running .....");
    next();
}

const logger = (req,res,next)=>{
    console.log("Url Hit " + req.url + " at the time " + new Date().getTime() + " On " + new Date().getDate()
    + " in the method of [ " + req.method + " ] " );
    next();
}

module.exports = {logger , base};