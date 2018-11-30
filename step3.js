const fs = require("fs");
file = process.argv[2].toString();
let content = fs.readFileSync(file);
contentsOfFile = content.toString().split("\n");
for(var i = 0; i < contentsOfFile.length; i++) {
	console.log(contentsOfFile[i].toString());
}

