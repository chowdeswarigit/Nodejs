const express= require ('express') 

const app  = express() 

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

app.listen(5000,(err)=>{
    if(err) throw err 
    console.log("server is running at port number 5000........")
}) 