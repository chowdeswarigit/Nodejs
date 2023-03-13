// Synchrously data is fetching 
// const fs = require("fs");

// const data = fs.readFileSync("chow.txt",'utf-8') 

// console.log(data)


const fs = require("fs");
 

const data = fs.readFile("chow.txt", 'utf-8',(err,newData)=>{
    fs.writeFile("cp.txt",newData,(err)=>{
        if(err) throw err; 
        console.log("file Wrire successfully")
    }); 
    
})
console.log(data)