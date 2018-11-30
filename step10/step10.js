var net = require("net");
var port = Number(process.argv[2]);
function zeroFill(i) {
    return (i < 10 ? "0" : "") + i; 
}
function getNow() {
    var d = new Date();
    return d.getFullYear() + "-" + zeroFill(d.getMonth() + 1) + "-" +
        zeroFill(d.getDate()) + " " +
        zeroFill(d.getHours()) + ":" +
        zeroFill(d.getMinutes());
}
var server = net.createServer(function(socket) {
    socket.end(getNow() + "\n");
});

server.listen(port);

//Code to write the date on console.

// var server = net.createServer(function(socket) {
//     socket.on('data', function(res) {
//         console.log(res.toString());
//     });
//     // socket.end(getNow() + "\n");
// });

// server.listen(port);

// var socket = require('net').Socket();
// socket.connect(port);
// socket.end(getNow() + "\n");
