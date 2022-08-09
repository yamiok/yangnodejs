const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('hello world');
        res.end();
};
    if (req.url === '/api/course') {
        res.write(JSON.stringify(['1','2','3']));
        res.write(JSON.stringify([1,2,3]));
        res.end();
    };
});

server.listen(3000);
console.log('listen on http://localhost:3000');

fs.readFile(() =>{
res.write('hello world');
res.end();
})