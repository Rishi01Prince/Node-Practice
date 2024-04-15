module.exports = (req, res, next) => {

    if (req.query.age) {
        if (req.query.age >= 18) {
            next();
        }
        else {
            res.send("Access Denied");
        }
    }
    else {
        res.send(" Please enter your Age :");

    }
}