const express= require ('express') 
const dotenv = require('dotenv')

const app  = express() 
dotenv.config ({path:'../Config/config.env'})


/* API URL :"localhost:5000/chow",

METHOD :  GET, 

Fields :Not Required 

Access Type: Not Required  */

app.get('/chow',(req,res)=>{
    res.send(`<h1>Hello chow</h1>`)
})

/* API URL :"localhost:5000/user",

METHOD :  Post, 

Fields:Email,Password, 

Access Type: Private */


app.post('/user',(req,res)=>{
    res.send("user login successfully")
})

app.listen(process.env.PORT,(err)=>{
    console.log(process.env.PORT)
    if(err) throw err 
    console.log("server is running at port number 5000........")
}) 