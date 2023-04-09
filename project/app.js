const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
const collection = require("./mongodb")

app.get("/login",cors(),(req,res)=>{

})

app.post("/login", async(req,res)=>{
    const{email,password} = req.body

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("notexist")

    }
})





app.post("/register", async(req,res)=>{
    const{email,password,name,cpassword} = req.body

    const data={
        email:email,
        password:password,
        name:name,
        cpassword:cpassword,
        
    }

    try{
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("notexist")

    }
})


// // get user data from mongo db  👇

app.get("/register" , (req,res) =>{
    collection.find((err, data) =>{
        if(err){
            res.status(500).send(err)
        }
        else{
            res.status(200).send(data)
        }
    })
})

// // ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️

app.listen(8000,()=>{
    console.log("port connected")
})

// const express = require("express")
// const app = express()
// const path = require("path")
// import React from "react";
// const collection = require("./mongodb")
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
// app.set


// app.get("/", (req, res) => {
//     res.render("login")
// })

// app.get("/signup", (req, res) => {
//     res.render("signup")
// })

// app.post("/signup", async (req, res) => {

//     const data = {
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password
//     }
    
//     await collection.insertMany([data])

//     res.render("home")


// })

// app.listen(3000, () => {
//     console.log("Port Connected");
// })