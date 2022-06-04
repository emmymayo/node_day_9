
function maintenance(req, res, next){
    if(req.app.get('maintenance') == true){
        res.status = 503;
        res.send('503 Service Unavailable')
    }
    next();
}

module.exports = maintenance;