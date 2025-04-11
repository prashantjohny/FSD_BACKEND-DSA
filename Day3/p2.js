const http = require('http');
const fs = require('fs/promises');


const server = http.createServer(async (req,res)=>{
    res.writeHead(200,{'content-type' : 'application/json'});
    if(req.url === '/getData' && req.method === 'GET'){
        const data = await fs.readFile('data.json');
        res.end(data);
    }
    if(req.url === '/addData' && req.method === 'POST'){
        let body = '';
        req.on('data',chunk =>{
            body +=chunk;
        });
        req.on('end', async ()=>{
            let data = JSON.parse(body);
            const filedata = await fs.readFile('data.json');
            const jsondata = JSON.parse(filedata);
            jsondata.push(data);
            await fs.writeFile('data.json',JSON.stringify(jsondata));
            res.end(JSON.stringify({message:"data added successfully"}));
        })
    }
    return;
});

server.listen(9000,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server is running on port http://localhost:9000');
});