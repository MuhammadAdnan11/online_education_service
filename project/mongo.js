// const mongoose = require("mongoose")
// mongoose.connect("mongodb://localhost:27017/login-page-db")
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log("failed");
// })


// const newSchema = new mongoose.Schema({
//     email:{
//         type:String,
//         required:true
//     },
//     name:{
//         type:String,
//         required:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     cpassword:{
//         type:String,
//         required:true
//     }
    
// })

// const collection = mongoose.model("collection",newSchema)
// module.exports=collection
















// here i started 👇

const mongoose = require("mongoose");

const UserDetailsSchema = new mongoose.Schema(
    {
        fname:String,
        email:{
            type:String,
            unique:true
        },
        password:String,
        userType:String,
    },
    {
        collection: "UserInfo",
    }
);

mongoose.model("UserInfo", UserDetailsSchema)