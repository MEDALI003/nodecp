const fs=require("fs")
fs.writeFile("welcome.txt","Hello world",(error)=>{
    if(error) throw(error)
})
fs.readFile("welcome.txt","utf8",(err,data)=>{
    if(err) throw(err)
    console.log(data)
})