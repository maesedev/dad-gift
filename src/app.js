const express = require('express')
const path = require('path')
const fs = require("fs")
const bodyParser = require("body-parser")
const app = express()

let parsed ;


//views templates
app.set('view engine', "hbs")
app.set('views',path.join(__dirname,'../views'))

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({ extended: false }));

//routers
app.get("/",async(req,res)=>{

    let rawJSON = fs.readFileSync("./src/data.txt","utf8")

    let value = JSON.parse(rawJSON)
   
    if(value)  res.render("index")
    else res.redirect("/secret")

   
    })
    
 app.get("/secret",(req,res)=>{
        res.render("secret")
    })
    
app.post("/secret", (req,res,next)=>{

    let userPass =  req.body.password;
    let pass = "javascript";

    if (userPass.includes(pass)){

        fs.writeFile("./src/data.txt","true",(err)=>{
            if (err) console.log(err)

            else res.redirect("/")
            
        })

    }else {

        setTimeout(()=>res.redirect("/secret"),1500)
        
    }
    })




app.set("port",process.env.PORT || 3000)
    app.listen(app.get("port"),()=>{
        console.log('listening')
})


