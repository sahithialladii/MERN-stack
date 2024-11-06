const express=require('express')
const router=express.Router()
const Users=require('../models/UsersModel')





router.post('/add',async(req,res)=>{
    try{
        const UserData=new Users(req.body)
        const {name, email, phonenumber, password, address}=UserData
        if(!name ||!email ||!phonenumber ||!password ||!address){
            res.status(401).json({message:"Name,email,password and phonenumber are required"})
        }
        const storedata=await UserData.save()
        res.status(200).json(storedata)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})