var exp = require("express")

var app = exp()

app.get("/",(req,res)=>{
    console.log("get\n");
})

app.listen(process.env.po)