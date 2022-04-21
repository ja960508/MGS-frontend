let http = require("http");
let fs = require("fs");
let mySet = function (req, res) {
  let url = req.url;

  if (req.url === "/") {
    url = "/index.html";
  } else {
    url += ".html";
  }

  res.writeHead(200);
  let htmlFile = fs.readFileSync(__dirname + url);
  res.end(htmlFile);
};

let app = http.createServer(mySet);
app.listen(8080);
