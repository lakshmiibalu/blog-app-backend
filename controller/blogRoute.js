const express = require("express")
const users = require("../models/users")

const router = express.Router()

router.post("/signup",async(req,res)=>{
    let data = req.body
    let user = new users(data)
    let result = await user.save()
    res.json(
        {
            status:"success"
        }
    )
})

module.exports = router