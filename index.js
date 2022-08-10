var exp = require("express")
var app = exp()

app.listen(process.env.PORT||8008,()=>{
    console.log("listening\n");
})

app.get("/",(req,res)=>{
    res.send({"a":1});
})
app.post("/",(req,res)=>{
    res.send({"a":2});
})
console.log("star");