require ("dotenv").config()
 
const mongoose = require("mongoose")
const express = require("express")
const app = express()
const bodyParser = require("body-Parser")
const cookkieParser = require ("cookie-Parser")
const cors = require("cors")

// my routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/order")
const paymentBRoutes = require("./routes/paymentBRoutes")


// DB connection
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
}).then(() => {
    console.log("DB CONNECTED")
 })//.catch(
//     console.log("DB got OOPS")
// )

// middleware
app.use( bodyParser.json())
app.use(cookkieParser())
app.use(cors()) 


// My routes
app.use("/api", authRoutes)
app.use("/api", userRoutes)
app.use("/api", categoryRoutes)
app.use("/api", productRoutes)
app.use("/api", orderRoutes)
app.use("/api", paymentBRoutes)

// PORT
const port = process.env.PORT || 8000

// START SERVER
app.listen(port, () => {
    console.log(`app is running on ${port}`)
})
