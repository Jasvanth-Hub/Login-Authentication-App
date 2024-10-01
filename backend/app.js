const express = require("express")
const path = require("path")

const app = express()

const cookieParser = require("cookie-parser")

if(process.env.NODE_ENV!=="production")
{
    require("dotenv").config({path:"backend/config/config.env"})
}

app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({limit:"50mb",  extended:true}))
app.use(cookieParser())

app.timeout = 3000000;

const user = require("./routes/user")

app.use("/api/v1/user",user)

// app.use(express.static(path.join(__dirname,"../frontend/build")))

// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"../frontend/build/index.html"))
// })

module.exports = app