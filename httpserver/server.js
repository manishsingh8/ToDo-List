const http =  require('http');
const port = 1000;

const fs = require('fs');

const server = http.createServer(function(req,res){
   fs.readFile('./demo.html',function(err,data){
    if(err){
        console.log(err);
        return;
    }
    res.write(data);
    res.end();
   })

});

server.listen(port,()=>{
    console.log("server is running");
})
