const companyMiddleware = async (req, res, next) => {
    if(req.user.type == "Company"){
         next()
         return
    }
     return res.status(401).json({message: "Unauthorized"});
}

module.exports = companyMiddleware;