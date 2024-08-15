const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.isAuthenticated = async (req, res,next) => {

    try {
        const { token } = req.cookies
        
        if (!token) {
            res.status(400).json({
                success: false,
                message: "Please login first... "
            })
            console.log("This is the problem jack ..");
            return;
        }

            const decoded = await jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded._id)
            
            next()

    } catch (err) {
        res.status(500).json({
            success:false,
            message:err.message
        })
        return;
    }

}
