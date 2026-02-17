// const fs = require("fs");

// function logActivity(message) {
//   const timestamp = new Date().toLocaleString();
//   const logMessage = `[${timestamp}] - ${message}\n`;

//   fs.appendFile("./logActivity.txt", logMessage, (error) => {
//     if (error) console.error("Failed to write log:", error);
//   });
// }


// logActivity("Server started");
// logActivity("User logged in");

// module.exports = logActivity;


//  HTTP MODULE

// const http = require("http");
// const server = http.createServer((req, res) => {
//     const user = {
//     id: 1,
//     name: "Sarthak Sahgal",
//     age: 20,
// };

//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify(user));
// })
// server.listen(8000, ()=> {
//     console.log("Server is listening on port 8000");
// }
// );



// const http = require("http");
// const server = http.createServer((req, res) => {
    
    
//     switch (req.url) {
//         case "/":
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//              res.end("<h1>Welcome to the Home Page</h1>");
//             break;    
//         case "/about":
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end("<h1>About Us Page</h1>");
//             break;
//         case "/contact":
//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.end("<h1>Contact Us Page</h1>");
//             break;
//         default:
//             res.writeHead(404, { 'Content-Type': 'text/html' });
//             res.end("<h1>404 Page Not Found</h1>");
//             break;
//     }});
// server.listen(8000, () => {
//     console.log("Server is listening on port 8000");
// });