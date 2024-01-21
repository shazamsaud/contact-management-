
const asyunchHandler = require("express-async-handler");
const User = require("../models/userModel")

const bcrypt = require("bcrypt");

const registerUser =  asyunchHandler(async(req,res)=>{
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("all fiels manda");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("user already exists");

    }
    // hash pass
    const hashPass = await bcrypt.hash(password,10);
    console.log(`hashed pass is  ${hashPass}`);
    const user = await User.create({
        username,
        email,
        password:hashPass
    });
    console.log(`account created : :  :  ${user}`);
    if(user){
        res.status(201).json({_id:user.id , email:user.email});
    }else{
        res.status(400);
        throw new Error("not valid");
    }

    res.json({message : "register user"})
});

const loginUser = asyunchHandler(async(req,res)=>{
    res.json({message : "Login user"})
});

const currentUser = asyunchHandler(async(req,res)=>{
    res.json({message : "current user"})
});

module.exports={registerUser,loginUser,currentUser}
