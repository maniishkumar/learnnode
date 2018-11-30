var http = require("http");
var url = process.argv[2].toString(); //https://api.github.com/users/octocat

//Using http.request function

//   var req = http.request(url, function(res) {
//     res.setEncoding('utf8');
//     res.on('data', function (chunk) {
//       console.log(chunk);
//     });
//   });
  
//   req.on('error', function(e) {
//     console.log('problem with request: ' + e.message);
//   });
  
//   req.end();  


//Using http.get function

  http.get(url, function(response){
      response.setEncoding('utf8');
      response.on('data', console.log);
      response.on('error', console.error);
  }).on('error', console.error);