const express = require("express")
const app = express()

let response
app.post("/secret",(req,res,next)=>{
    response =  req.body.pass || false
})


function validar_secret(){
    return response
}

module.exports = validar_secret