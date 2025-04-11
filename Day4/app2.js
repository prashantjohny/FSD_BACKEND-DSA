const express=require('express')
const fs=require('fs/promises')

const app=express()

app.use(express.json())
let users=[];
app.use(express.json())

const readdata=()=>{
    users=fs.readFile('./data.json','utf8')
}

const writedata=()=>{
    fs.writeFile('./data.json',JSON.stringify(users,null,2))
}

app.get('./getdata',async(req,res)=>{
    readdata();
    res.json(users);
})