const jwt  = require('jsonwebtoken') 

const user ={

    email:"chow599@gmail.com",
    password:"Cp@599"
}

const payload = {

    id:user
}
const Skey  = "chow124"

const token  = jwt.sign(payload,Skey , {expiresIn:60*60}) 
console.log(token)

jwt.verify(token,Skey,(err,Newpayload )=>{
    if(err) throw err 
    console.log(Newpayload)
})