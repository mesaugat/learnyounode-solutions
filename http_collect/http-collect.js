var http = require('http');

http.get(process.argv[2], function(res){
    var results = '';
    var length = 0;
    
    res.setEncoding('utf8');
    res.on('data', function(data){
        results += data;
    });

    res.on('end', function(data){
        length += results.length;
        console.log(length);

        console.log(results);
        results = '';
    });
});
