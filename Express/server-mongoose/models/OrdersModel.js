const mongoose=require('mongoose')


const OrdersSchema=new mongoose.Schema({
    UserID:{
        type:Number,
        required:true
    },
    ProductID:{
        type:Number,
        required:true
    },
    Price:{
        type:Number,
        required:true
    },
    ShippingAddress:{
        type:String,
        required:true
    }
})



const Orders=mongoose.model("Orders",OrdersSchema)

module.exports=Orders;