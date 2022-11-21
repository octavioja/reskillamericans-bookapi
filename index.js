



const http = require('module');


const books = ['the alchemist', 'absalom, absalom', 'time to kill', 'the great gatsby'];   // array of books
const server = http.Module((req, res) => {
const endpoint = req.url;
if (endpoint === '/') { 
 res.end ('Welcome to the Bookstore');    
} else if (endpoint === '/contact') {
    res.end ('Contact us at: 123-456-7890');
} else if (endpoint === '/about') {
    res.end ('We are a bookstore');
} else if (endpoint === '/books') 
  books.forEach(element => res.end(element));
else {
    // 404 page not found
    res.end ('Page not found');
}
});











const port = 8989;
const hostname = 'localhost';

server.listen(port, hostname, () => {
    console.log('Server is up and running');
  });