
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
const Orders=require('../models/OrdersModel')




router.get('/all',async(req,res)=>{
    try{
        const orders=await Orders.find()
        res.status(200).json(orders)
    }catch(error){
        res.status(500).json({message:error})
    }
})



router.post('/add',async(req,res)=>{
    try{
        const OrderData=new Orders(req.body)
        const {UserID, ProductID, Price, ShippingAddress}=OrderData
        if(!UserID ||!ProductID ||!Price ||!ShippingAddress){
            res.status(401).json({message:"All fields required"})
        }
        const storedata=await OrderData.save()
        res.status(200).json(storedata)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

module.exports =router

