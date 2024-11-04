const express=require('express')
const router=express.Router()
const Users=require('../models/UsersModel')

router.get('/all',async(req,res)=>{
    try{
        const users=await Users.find()
        res.status(200).json(users)
    }catch{
        res.status(500).json({message:error})
    }
})