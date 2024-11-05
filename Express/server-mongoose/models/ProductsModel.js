const mongoose=require('mongoose')




//creation of product schema
const ProductsSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
        // unique:true will give unique values no same values
    }
})


// assign the schema to productsmodel
const Products=mongoose.model("Products",ProductsSchema)

module.exports=Products;