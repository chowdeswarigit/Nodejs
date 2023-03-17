
const { Router } = require('express');
const express = require('express');

const Router = Router.express() 

Router.get('/login',(req,res)=>{
    res.send("User Login Successfully")


})

Router.get('/Register',(req,res)=>{
    res.send("User Registred Successfully")
})

module.exports = Router