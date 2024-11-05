const express=require('express')


const app=express()
const port=3000
app.use(express.json())
const db=require('./config/db')
//to connect our modekl to db we need to import it
const Products=require('./routes/ProductRoute')
const Users = require('./models/UsersModel')
const Orders = require('./models/OrdersModel')


app.get('/',(req,res)=>res.status(200).json({ message:"welcome"}))
app.use('/products',Products)
app.use('/users',Users)
app.use('/orders',Orders)
app.listen(port,(()=>console.log(`Listening on ${port}`)))
