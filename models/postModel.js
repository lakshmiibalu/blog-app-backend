const mongoose = require("mongoose")

const postSchema = mongoose.Schema(
    {
        userId : {
            type:mongoose.Schema.Types.ObjectId,
            required : true,
            ref:"user"
        },
        post :{
            type:String,
            required : true
        },
        postedDate:{
            type : Date,
            default:Date.now
        }
    }
)

module.exports = mongoose.model("blogposts",postSchema)