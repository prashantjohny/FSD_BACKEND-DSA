const http=require("http");

const server=http.createServer(async (req,res) =>{
    res.writeHead(200,{"content-type":"text/plain"});
    if(req.url==='/home'){
        res.end("Welcome to the home page")
    }
    else if(req.url==='/about'){
        res.end('Know about our business')
    }
    else if(req.url==='/contact'){
        res.end('Conatct our business')
    }
    else{
        res.statusCode=404;
        res.end('Page Not Found');
    }
})

server.listen(9000,(err)=>{
    if(err)
        console.log("Error: "+err)
    console.log('Server is running at http://localhost:9000/');
});