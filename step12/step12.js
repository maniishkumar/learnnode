const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]);
let server = http.createServer((req, res) => {
    if (req.method != 'POST' ) {
        res.end('Send me a POST\n');
    }

    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(port, () => {
    console.log('Server is running on port ' + port);
});