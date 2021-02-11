const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', function (err, html) {
        if (err) {
            throw err;
        }
        res.writeHeader(200, { "Content-Type": "text/html" });
        res.write(html);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});