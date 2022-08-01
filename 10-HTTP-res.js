const http = require ('http');

const server = http.createServer ((req , res) => {
    if (req.url == '/') {
        res.end('Welcome to our homepage.');
    }
    else if (req.url == '/about') {
        res.end('Here is our short history.');
    }
    else {
        res.end('<h1>OOPS!</h1> <p>The page you are looking is not available.</p> <a href="/">Go Home</a>');
    }
})
    
    
server.listen(5000);