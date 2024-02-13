const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

const blogRoute = require("./controller/blogRoute")
const postRoute = require("./controller/postRoute")


//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://Lakshmi:ZEPH26YR@cluster0.gs9xdes.mongodb.net/blogDb?retryWrites=true&w=majority",
{useNewUrlParser:true})


//routing
app.use("/api/blog",blogRoute)
app.use("/api/post",postRoute)

app.listen(3003,()=>{
    console.log("Server Running")
})
