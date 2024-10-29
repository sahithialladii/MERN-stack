const mongoose=require('mongoose')




const ProductsSchema= new mongoose.Schema({
    name:{
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


const Products=mongoose.model("Products",ProductsSchema)

module.exports=mongoose