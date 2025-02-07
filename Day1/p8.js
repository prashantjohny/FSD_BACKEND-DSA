const fs=require('fs');

fs.mkdir('MyFolder',{recursive: true},(err)=>{
    if(err){
        console.error("An error occured:",err);
        return;
    }
    console.log("Directory created successfully");
});