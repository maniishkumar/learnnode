const fs = require("fs");
const path = require("path");

module.exports = function (folder, ext, cb) {
	fs.readdir(folder, function(err, files){
		if(err) return cb(err, null);
		files = files.filter(file => {
			return path.extname(file) === "." + ext;
		});
		cb(null, files);
	});
}
