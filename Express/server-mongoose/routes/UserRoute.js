
/*
4 major http request methods

1.get(read)
2.post(create)
3.put(update)
4.delete


CRUD
1.create
2.read
3.update
4.delete
*/

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



module.exports =router

