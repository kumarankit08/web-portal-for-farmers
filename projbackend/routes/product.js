
const express = require("express")
const router = express.Router()

const {getProductById, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllProducts, getAllUniqueCategories} = require("../controllers/product")
const {isSignedIn, isAdmin, isAuthenticated} = require("../controllers/auth")
 const {getUserById} = require("../controllers/user")

//  all param
router.param("userId",getUserById)
router.param("productId",getProductById)


// all actuL ROUTES
// create route
router.post("/product/create/:userId",isSignedIn, isAdmin, isAuthenticated, createProduct )


// read route
router.get("/product/:productId", getProduct)
router.get("/product/photo/:productId", photo)

// delete route
router.delete("/product/:productId/:userId", isSignedIn, isAdmin, isAuthenticated, deleteProduct)

// update route
router.put("/product/:productId/:userId", isSignedIn, isAdmin, isAuthenticated, updateProduct)

// listing route
router.get("/products", getAllProducts)

router.get("/products/categories", getAllUniqueCategories)
module.exports = router