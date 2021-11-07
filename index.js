const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const  file = req.url === '/' ? 'index.html' :  req.url;

    // let file = req.url;
    // if (req.url === '/') {
    //     file = 'index.html';
    // }

    const filePath = path.join(__dirname, 'public', file);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            res.end('<h2 style="color: red">page or file not found</h2>');
        }

        let contentType = 'text/html';
        const fileExt = path.extname(filePath);

        // .html, .css, .js
        if (fileExt === '.css') {
            contentType = 'text/css';
        } else if (fileExt === '.js') {
            contentType = 'text/javascript';
        }

        res.writeHead(200, {
            'Content-Type': contentType
        });

        res.end(content);
    });

    // if (req.url === '/' || req.url === '/index.html') {
    //     fs.readFile(filePath, (err, content) => {
    //         if (err) {
    //             throw err;
    //         }

    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         });

    //         res.end(content);
    //     });
    // } else {
        // res.writeHead(404, {
        //     'Content-Type': 'text/html'
        // });
        // res.end('<h2 style="color: red">page not found</h2>');
    // }
});

server.listen(3000, () => {
    console.log('Server has been started!');
});
