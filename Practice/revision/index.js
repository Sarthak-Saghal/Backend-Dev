
// const http =require("http");
// const url= require("url");

// const server= http.createServer((req, res) =>{

//     const data=url.parse(req.url, true);

//      const parameter=data.pathname;


//     switch(parameter){

//         case '/':

//         res.end("hello welcome to home page");
//         break;

//         case '/login':

//         res.end("login successfully");
//         break;

//         case ' /signup':
//         res.end("signup successfully");
//         break;

        
//         default:
//             res.end("404 Page Not Found");
//     }
// });

// server.listen(8000 ,()=>{

//     console.log("server is running");
// });


const http=  require("http");
const url= require("url");

const server = http.createServer((res, res)=>{

 const data= url.parse(req.url, true);

 const parameter= data.pathname;

 switch(parameter){

    case "/ ":

    res.end("wlecome to the home_page");
    break;


    default :

    res.end(" 404 not found");
    break;
 }


});

server.listen(8000 ,()=>{
    console.log("server is running");
})

