const express = require("express")
const postModel = require("../models/postModel")

const router = express.Router()

router.post("/add",async(req,res)=>{
    let data = req.body
    let blogPost = new postModel(data)
    let result = await blogPost.save()
    res.json({
        status:"success"
    })
})

module.exports = router