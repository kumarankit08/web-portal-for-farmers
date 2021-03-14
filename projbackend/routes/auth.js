var express = require("express")
var router = express.Router()

const {check , validationResult} = require("express-validator")
const {signout,signin, signup, isSignedIn} = require("../controllers/auth")

router.post("/signup",[
    check("name", "name should be atleast 3 characters").isLength({min:3}),
    check("email", "eamil is required").isEmail(),
    check("password","password should be 3 char").isLength({min:3})
], signup)


router.post("/signin",
[
    check("email", "eamil is required").isEmail(),
    check("password","password field is compulsory").isLength({min:3})
],
 signin)
router.get("/signout", signout)

router.get("/testroute", isSignedIn, (req,res) => {
    res.json(req.auth)
})

module.exports = router