const http = require('http');                                                    // importing http


const server = http.createServer((req, res) => {                               //call back function
 
   
    // request...

    console.log(req.url, req.nethod, req.headers);

    //responses.....

    res.setHeader('Content-Type','text/html');

    res.write('<html>');
    res.write('<head><title>This is first page</title></head>');
    res.write('<body><h1><center><b>Welcome to my server</b></center></h1></body>');
    res.write('</html>');
    
    res.end();


});

server.listen(3000,'localhost');