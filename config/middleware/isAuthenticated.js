module.exports = function (req, res, next) {
    if (req.user) {
        console.log("MIDDLEWARE - User is authenticated and can view the page")
        res.status(500);
        return next()
    }
    
    console.log("MIDDLEWARE - NOT Authenticated returning status 500 to CLIENT")
    return next()

}