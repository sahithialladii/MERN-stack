
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
//Method:GET | API URL : localhost:3000/products/all
router.get('/all',async(req,res)=>{//all is an api endpoint//and is another api endpoint
    try{
        const products=await Products.find()//find() is a mongoose method
        res.status(200).json(products)//async and await..our operation should wait until it gets the response
    }catch(error){
        res.status(500).json({message:error})//can use error.message
    }
})


//Method : POST | API URL :localhost:3000/products/add
router.post('/add',async(req,res)=>{
    try{
        const ProductData=new Products(req.body)//parsing the data
        const {title, img, price}=ProductData//destructuring the data
        if(!title ||!img ||!price){
            res.status(401).json({message:"All fields required"})
        }
        const storedata=await ProductData.save()
        res.status(200).json(storedata)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

router.put('/edit/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const existingproduct=await Products.findOne({_id:id})
        if(!existingproduct){
            res.status(404).json({message: "Product not found"})
        }
        const updatedproduct=await Products.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).json(updatedproduct)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try{
        const id=req.params.id
        const existingproduct=await Products.findOne({_id:id})
        if(!existingproduct){
            res.status(404).json({message: "Product not found"})
        }
        await Products.findByIdAndDelete(id)
        res.status(200).json({message:"Product Deleted"})
    }catch(error){
        res.status(500).json({message:error.message})
    }
})


module.exports =router

