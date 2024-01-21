const { constants } = require("../constants");

const errorHandler = (err,req,res,next)=>{
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.json({message : err.message, stackTrace : err.stack});
    switch(statusCode){
        case constants.validation_error:
            res.json({
                title:"validation failed",
                message : err.message, 
                stackTrace : err.stack
            });
            break;
        case constants.not_found:
            res.json({
                title:"Not Found",
                message : err.message, 
                stackTrace : err.stack
            });
        case constants.forbidden:
            res.json({
                title:"forbidden",
                message : err.message, 
                stackTrace : err.stack
            });
        case constants.unauthorised:
            res.json({
                title:"unauthorised",
                message : err.message, 
                stackTrace : err.stack
            });
        case constants.server_error:
            res.json({
                title:"server_error",
                message : err.message, 
                stackTrace : err.stack
            });
        default:
            console.log("No Error");
            break;
    }

};

module.exports=errorHandler;