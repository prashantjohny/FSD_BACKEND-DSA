const http=require("http");
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(`<h1 style="background-color:red; color:white">Hola everyone</h1>`);
});
server.listen(9000,(err)=>{
    if(err){
        throw err;
    }
    console.log("server is running on port 9000");
});