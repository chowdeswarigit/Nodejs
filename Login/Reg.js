const bcrypt = require("bcryptjs"); 


let userDetails = {
    name:"chow",
    email:"chow@p2fsemi.in",
    password:"12345",
}
const salt = bcrypt.genSaltSync(10)

const newPassword = bcrypt.hashSync(userDetails.password,salt) 

userDetails  = {...userDetails,password:newPassword} 
console.log(userDetails)

const x = bcrypt.compareSync("12345",userDetails.password) 

x ? console.log("password Matched") : console.log("password doesnot Mathcced")

console.log(x)