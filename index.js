



const http = require('http');



const books = "['the alchemist', 'absalom, absalom', 'time to kill', 'the great gatsby']";   // array of books
const server = http.createServer((req, res) => {
const endpoint = req.url;
if (endpoint === '/') { 
 res.end ('Welcome to the Bookstore');    
} else if (endpoint === '/contact') {
    res.end ('Contact us at: 123-456-7890');
} else if (endpoint === '/about') {
    res.end ('We are a bookstore');
} else if (endpoint === '/books') {
  return res.end(books); // return the array of books
}
});












const port = 8989;
const hostname = 'localhost';

server.listen(port, hostname, () => {
    console.log('Server is up and running');
  });

  ///port=8989
//hostname=localhost
//http module
//Endpoints: Page Not Found, Home Page, All books (Fetch all books from an array)