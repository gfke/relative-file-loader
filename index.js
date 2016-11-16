var qs = require('querystring');
var path = require("path");
var md5 = require("md5");

module.exports = function (content) {
    this.cacheable && this.cacheable();

    if (!this.emitFile) {
        throw new Error("emitFile is required from module system");
    }

    var query = qs.parse(this.query.replace('?', '')),
        outputPath = query.outputPath || './',
        fileMd5 = md5.digest_s(content.toString()),
        fileName = fileMd5 + path.extname(this.resourcePath);

    outputPath = path.join(outputPath, fileName);

    this.emitFile(outputPath, content);

    return "module.exports = __webpack_public_path__ + " + JSON.stringify(fileName);
};

module.exports.raw = true;
