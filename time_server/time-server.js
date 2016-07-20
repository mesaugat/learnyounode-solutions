var net = require('net');

var server = net.createServer(function(socket) {
    var date = new Date();
    var dateString = date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + '\n';
    
    socket.end(dateString)
});

var addZero = function(num) {
    return ('0' + num).slice(-2);
}

server.listen(process.argv[2]);
