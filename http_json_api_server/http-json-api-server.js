var url = require('url');
var http = require('http');

var server = http.createServer(function(req, res) {
    if (req.method != 'GET') {
        console.error('Send a GET request!');
    }

    var result;
    var urlObject = url.parse(req.url, true);

    if (urlObject.query.iso) {
        var date = new Date(urlObject.query.iso);
    };

    if (urlObject.pathname == '/api/parsetime') {
        result = JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() });
    }

    if (urlObject.pathname == '/api/unixtime') {
        result = JSON.stringify({ unixtime: date.getTime() });
    }

    if (result) {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(result);
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(process.argv[2]);
