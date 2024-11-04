
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
const Products=require('../models/ProductsModel')


//get request-for products schema
router.get('/all',async(req,res)=>{
    try{
        const products=await Products.find()
        res.status(200).json(products)
    }catch{
        res.status(500).json({message:error})
    }
})

