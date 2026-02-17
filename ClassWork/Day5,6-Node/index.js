//console.log("Hello World");

//Area of circle;

// const area = function(radious){
//     let a=3.14*radious*radious;
//     console.log(a);
// }

// area(5);     


// const { error } = require("console");
//  const { error } = require("console");


// const fs = require("fs");

//write in file

// fs.writeFileSync("./text.txt", "hello world i am sync code");                // write in Sync way

// console.log("File written successfully");

// fs.writeFile("./text.txt", "hello world i am async code",(error)=>{          // write in async way
//     console.log(error);
    
// })




// READ OPEARTION

// const read=fs.readFileSync("./text.txt","utf-8")     // read in sync way
// console.log(read);

// fs.readFile("./text.txt","utf-8",(error ,Response)=>{
//     if(error){
//         console.log(error);
//     }                                                                // read in async way
//     else{
//         console.log(Response);
//     }
// })


//  UPDATE CODE 
// fs.appendFileSync("./text.txt" , new Date().toDateString());
//                                                                         //update using the async way
// fs.appendFileSync("./text.txt" ," i am updating the file");

// fs.appendFile("text.txt","update using the sync way" , (error,response)=>{

//     if(error){
//         console.log(error);
//     }
//     else{
//         console.log(response);
//     }

// })                   // update using the sync way


// const os = require("os");
// console.log(os.cpus().length);

//FOR THE DELETE FILE WE USE THE (unlink) COMMAND


//  HTTP MODULE

// const http= require("http");

//  const PORT=8080;

// const myserver= http.createServer((request ,Response)=>{
//     Response.end("hello from server");
// })

// myserver.listen(PORT , ()=>{
//     console.log(`Server is connected at ${PORT}`);
// })


const http = require("http")

const myserver=http.createServer((request , response)=>{

    const user={
        id :1,
        name: "Sarthak sahgal",
        age : 20
    }
    response.writeHead(200,{ "Content-Type": "text/plain" });
     response.end(JSON.stringify(user));
     
});
port =8080

myserver.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})

