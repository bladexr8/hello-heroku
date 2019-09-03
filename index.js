// Basic Heroku Application built from following Medium Articles
// Part 1 - https://codeburst.io/node-js-on-heroku-a-more-complete-tutorial-part-1-9e80cb071498
// Part 2 - https://codeburst.io/node-js-on-heroku-a-more-complete-tutorial-part-2-53350381543c
// Part 3 - https://codeburst.io/node-js-on-heroku-a-more-complete-tutorial-part-3-dcd83888939b
// Part 4 - https://codeburst.io/node-js-on-heroku-a-more-complete-tutorial-part-4-ea16d366764d



const http = require('http');
const { Client } = require('pg');

// not required for Heroku
//const hostname = '127.0.0.1';

// get running port from Heroku environment variable (if available)
const PORT = process.env.PORT || 5000;

const { DATABASE_URL } = process.env;

// fire up a basic http server
const server = http.createServer((req, res) => {
    const client = new Client({
        connectionString: DATABASE_URL,
    });
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // retrieve data from Postgres
    client.connect()
        .then(() => client.query('SELECT * FROM hellotable'))
        .then((result) => {
            res.end(`${result.rows[0].name}\n`);
            client.end();
        })
        .catch((err) => {
            res.end("[ERROR] " + err);
            client.end();
        });
});

server.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`[INFO] Server running on ${PORT}`);
});


