const http = require('http');

const server = http.createServer((req,res)=>{

    res.write('rakesh');
    res.end();

})

server.listen(5000);