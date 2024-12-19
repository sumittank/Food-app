require('./db/config')
const express = require('express')
const Items = require('./db/models/items')
const cors = require('cors')
const TopItems = require('./db/models/favitems')
const TopCities = require('./db/models/favcities')
const Users = require('./db/models/users')
const bcrypt = require('bcryptjs')
const jwtToken = require('jsonwebtoken')
const secretKey = "HELLOMYNAMEISRAMIN/|inCiTYoFGOD"

const app = express()
app.use(express.json())
app.use(cors())

app.get('/getitems',async (req,res) => {
    let result = await Items.find()
    res.send(result)
})

app.get('/getfavitems',async (req,res) => {
    let result = await TopItems.find()
    res.send(result)

})

app.get('/getfavcities',async (req,res) => {
    let result = await TopCities.find()
    res.send(result)
})

app.post('/register', async (req,res)=> {
    const salt= await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.password,salt)

    try{
        await Users.create({
            name:req.body.name,
            email:req.body.email,
            password:secPassword,
        })
        res.json({success:true})
    }
    catch(error){
        console.log(error)
        res.json({success:false})
    }
})

app.post('/login',async (req,res)=>{
    try{
        let formEmail = req.body.email 
        let user = await Users.findOne({email:formEmail})
        if (!user) {
            // Password validation can be added here if needed

            return res.json({ success: false, message: "Email not found" })
        } 

        const compPassword = await bcrypt.compare(req.body.password , user.password )

        if( !compPassword ){
            return res.json({ success: false, message: "wrong password" })
        }
        const uniqueData={
            user:{
                id: user.id
            }
        }
        let authToken = jwtToken.sign(uniqueData,secretKey)
        return res.json({success: true,message : "welcome ", authToken : authToken})
    }
    catch(error){
        res.json({success:false})

    }
})


app.listen(5000)