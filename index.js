const http=require("http")

http.createServer((request,response)=>{
    response.end("vous est dans le serveur du local host:3000")
}).listen(3000)