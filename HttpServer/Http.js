
const http = require("http");


const server = http.createServer((req,res)=>{
    res.end(`<img src = 'https://res.cloudinary.com/dql3ac9hr/image/upload/v1672287074/rose_z3rxop.png' alt ="image"/>`)
})
server.listen(8000,(err)=>{
    if(err) throw err 
    console.log("Server is running at port number 8000")
}) 


// require("http").createServer((res,req)=>{
//     req.end(`<h1>Hello Chow <h1/>`)
// }).listen(5000,(err)=>{
//     if(err) throw err
//     console.log("server is renning at port number 5000...............")
// })