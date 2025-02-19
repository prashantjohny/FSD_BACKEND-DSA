const http=require("http");


const server=http.createServer(async(req,res)=>{
    
    res.writeHead(200,{'Content-Type':'application/json'});
    const names=Users.map((user)=>{
        return user.name;
    });
    res.end(JSON.stringify(names));
});
server.listen(9001,(err)=>{
    if(err){
        throw err;
    }
    console.log("server is running on port 9001");
});