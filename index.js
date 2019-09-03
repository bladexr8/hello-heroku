// Basic Heroku Application built from following Medium Articles
// Part 1 - https://codeburst.io/node-js-on-heroku-a-more-complete-tutorial-part-1-9e80cb071498


const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// fire up a basic http server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log(`[INFO] Server running at http://${hostname}:${port}`);
});
