const jwt = require("jsonwebtoken");


const verifyJWT = (token) => {

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        if (user) return user
        else return null

    } catch (error) {
        return null

    }

}

module.exports = verifyJWT