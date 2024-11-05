
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

router.put('/edit/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const existingorder=await Orders.findOne({_id:id})
        if(!existingorder){
            res.status(404).json({message: "Order not found"})
        }
        const updateorder=await Orders.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updateorder)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


router.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const existingorder=await Orders.findOne({_id:id})
        if(!existingorder){
            res.status(404).json({message: "Order not found"})
        }
        await Orders.findByIdAndDelete(id)
        res.status(200).json({message:"Order Deleted"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

module.exports =router

