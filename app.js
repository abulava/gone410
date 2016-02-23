var http = require('http')
var port = process.env.PORT || 3000

http.createServer(function(req, res) {
  var message410 = "The target resource is no longer available at the origin server and this condition is likely to be permanent."
  res.writeHead(410, {'Content-Type': 'text/html', 'Content-Length': message410.length})
  res.write(message410)
  res.end()
}).listen(port)
