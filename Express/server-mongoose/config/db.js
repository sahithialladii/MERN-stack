const mongoose= require('mongoose')

mongoose.connect("mongodb+srv://sahithialladi:12345@in-aws.rnchz.mongodb.net/")

const connection=mongoose.connection;

connection.on('connected',()=>(console.log("DB connected")))
connection.on('error',()=>(console.log("DB Error")))

module.exports=mongoose