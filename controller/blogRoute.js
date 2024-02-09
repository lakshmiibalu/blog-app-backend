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
    const hashedPassword = await hashPasswordgenerator(password)
    data.password=hashedPassword
    let user = new users(data)
            let result = await user.save()
             res.json(
                {
                    status:"success"
                }
                )
            })

        

     router.post("/signin",async(req,res)=>{
         let input = req.body
         let email = req.body.email
        let data = await users.findOne({"email":email})

        if(!data)
        {
            return res.json(
                {
                    status:"invalid user"
                }
            )
        }

        console.log(data)
        let dbPassword = data.password
        let inputPassword = req.body.password
        console.log(dbPassword)
        console.log(inputPassword)

        const match = await bcrypt.compare(inputPassword,dbPassword)

        if (!match) {
            return res.json({
                status:"incorrect password"
            })
            
        }

        res.json({
            status:"success"
        })
        

     })

    

module.exports = router