const http = require("http");
const fs = require("fs");
const port = Number(process.argv[2]);
const filePath = process.argv[3].toString();
const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    fs.createReadStream(filePath).pipe(res);
});

server.listen(port, ()=>{
    console.log('Server is listening on port ' + port);
});