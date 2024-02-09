const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name:String,
        age:String,
        phnno:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports = mongoose.model("user",userSchema)