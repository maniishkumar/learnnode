var fileExplorer = require("./fileexplorer.js");
var folder = process.argv[2].toString();
var ext = process.argv[3].toString()
fileExplorer(folder, ext, function(err, data) {
	if(err) console.error(err);
	data.forEach(file => {
		console.log(file);
	});
});
