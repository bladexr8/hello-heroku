// Basic Heroku Application built from following Medium Articles
// Part 1 - https://codeburst.io/node-js-on-heroku-a-more-complete-tutorial-part-1-9e80cb071498
// Part 2 - https://codeburst.io/node-js-on-heroku-a-more-complete-tutorial-part-2-53350381543c

/* eslint-disable indent */

const http = require('http');

// not required for Heroku
//const hostname = '127.0.0.1';

// get running port from Heroku environment variable (if available)
const PORT = process.env.PORT || 5000;

// fire up a basic http server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Part 3 - Hello World!!!\n');
});

server.listen(PORT, () => {
    // es-lint-disable-next-line
    console.log(`[INFO] Server running on ${PORT}`);
});


