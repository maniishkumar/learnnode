var http = require('http');    
var urls = [process.argv[2], process.argv[3], process.argv[4]];
var responses = [];
var completed_requests = 0;

function httpget(url, iterate) {
    http.get(url, function(res){
        var allData = "";
        res.setEncoding('utf8');
        res.on('data', function(data) {
            allData += data;
        })
        res.on('end', function(){
            responses[iterate] = allData;
            if(completed_requests == 2) {
                writeData();
            } else {
                completed_requests++;
            }
        })
    })
}

for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    httpget(url, i);    
}

function writeData() {
    responses.forEach(response => {
        console.log(response);
    });
}

// for (var i in urls) {
//     http.get(urls[i], function(res) {
//         res.setEncoding('utf8');
//         // res.on("data", function (data){console.log(data)} )
//         responses.push(res);
//         completed_requests++;
//         if (completed_requests == urls.length) {
//             // All download done, process responses array
//             console.log(responses);
//         }
//     });
// }

// var http = require('http')
// var bl = require('bl')
// var results = []
// var count = 0
 
// function printResults () {
//   for (var i = 0; i < 3; i++)
//     console.log(results[i])
// }
 
// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
//     response.pipe(bl(function (err, data) {
//       if (err)
//         return console.error(err)
 
//       results[index] = data.toString()
//       count++
 
//       if (count == 3)
//         printResults()
//     }))
//   })
// }
 
// for (var i = 0; i < 3; i++)
//   httpGet(i)