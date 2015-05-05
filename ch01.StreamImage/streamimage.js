/**
 * Created by sachin on 5/4/15.
 */

var http = require('http');

var fs = require('fs');

var server = http.createServer( function (req, res) {
        // res.writeHead(200, {'Content-Type': 'image/png'});
        // fs.createReadStream('./images/SonalScan.png').pipe(res);

        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        fs.createReadStream('./images/SonalScan.jpg').pipe(res);

    }
);

server.listen(3000);

console.log('Server running at http://localhost:3000/');
