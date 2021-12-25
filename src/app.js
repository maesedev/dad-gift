const express = require('express')
const path = require('path')
const app = express()

//views templates
app.set('view engine', "hbs")
app.set('views',path.join(__dirname,'../views'))

app.use(express.static(__dirname + "/public"))

//routers
app.get("/",(req,res)=>{
    res.render('index')
})


app.set("port",process.env.PORT || 3000)
app.listen(app.get("port"),()=>{
    console.log('listening')
})


