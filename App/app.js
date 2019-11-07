const http = require('http');

const hostname = '127.0.0.1';

const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
                                 res.statusCode = 200;
                                 res.setHeader('Constant-Type','text/plain');
                                 res.end('Hello world!\n');
                                 });

server.listen(port, () => {
              console.log(`Listening on ${port}`)
              });
