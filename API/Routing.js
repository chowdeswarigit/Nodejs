const express = require("express"); 


const app = express() 


app.get("/user",(req,res)=>{
    res.send(`<h1>Hello User</h1>`)
})
app.use('/user',require('../API/Login')) 




app.listen(7000,(err)=>{
    if(err) throw err;
        console.log("app is running on port number 7000")
    
    
})