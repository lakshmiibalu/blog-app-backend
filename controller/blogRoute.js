const express = require("express")
const users = require("../models/users")

const router = express.Router()

const bcrypt = require("bcryptjs")
hashPasswordgenerator=async(pass)=>{
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    
    let {data} = {"data":req.body}
    let password = data.password
    hashPasswordgenerator(password).then(
        (hashedPassword)=>{
            console.log(hashedPassword)
            data.password=hashedPassword
            console.log(data)
            let user = new users(data)
        let result =  user.save()
        res.json(
            {
                status:"success"
            }
            )
        })
        }
    )

    

module.exports = router