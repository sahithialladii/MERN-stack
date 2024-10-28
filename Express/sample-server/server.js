const express=require('express')

//each application should have separate port to access server
const Port=3000//can use any port but try to keep it below 8080 few are reserved should not use


const app=express()//app will directly interact with express library
//basic application is set
//we need to port this to run


app.use(express.json())

app.get('/',(req,res)=>{
    res.status(500).json("Hello");
})



app.listen(Port,()=>{
    console.log("Server is runnning inn port: "+Port)
    
    console.log(`Server is runnning inn port: ${Port}`)


    //custom command
    //start command is given in package.json file
    //npm start command can be used now to run
})
