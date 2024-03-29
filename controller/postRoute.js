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

router.get("/view",async(req,res)=>{
    let data = await postModel.find()
    .populate("userId","name age address")
    .exec()
    res.json(data)
})

router.post("/mypost",async(req,res)=>{
    let input = req.body
    let result = await postModel.find(input)
    res.json(result)
})

router.post("/delete",async(req,res)=>{
    let input = req.body
    let response = await postModel.deleteOne(input)
    res.json({
        status:"success"
    })
})

module.exports = router