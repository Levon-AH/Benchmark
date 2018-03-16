let http = require('http');

let server = http.createServer();
server.on('request' , (req , res) => {
    //console.log(req);
    req.on('data' , (chunk) => {
        console.log(chunk);
    });
    req.on('end' , () => {
        res.end();
    });
});
server.listen(5000 , console.log("http server running on port 5000"));

