const express = require("express")
const path = require("path")
const cors = require("cors");
const cookieParser = require("cookie-parser")

const app = express()

app.use(cors({
    origin: "https://login-authentication-app-z451.onrender.com", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies to be sent
    allowedHeaders: ["Content-Type", "Authorization", "x-csrf-token"], // Headers you need
    exposedHeaders: ["set-cookie"] // Expose the set-cookie header
}));




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