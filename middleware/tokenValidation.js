const { verifyTokenMiddleware } = require("../services/JwtService");


function jwtVerify(req, res, next){
    let pathArr = req.path.split('/');
    if(pathArr.length >= 4){
      let middleware = verifyTokenMiddleware(pathArr[3]);
      middleware(req, res, next);
      next();
    }else{
      next();
    } 
}

module.exports = jwtVerify