
const users = [
  { name: "rahul", type: "Premium" },
  { name: "amit", type: "Free" },
  { name: "neha", type: "Premium" }
];

// function getuser( userdata){
//     return new Promise((resolve , reject )=>{
//         setTimeout(()=>{
//             resolve({
//                 name : "rahul",
//                 type :  "Premium"
//             })
//         },1500);
//     });
// }

function getuser(username){
    return new Promise((resolve , reject)=>{

    setTimeout(()=>{

        const user= (users.find(u=> u.name===username));

        if(user){
            resolve(user);
        }
        else{
            reject("user not found");
        }

    },1500)

    });
   
}



function checkSubscription(user){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{ 
        if(user.type==="Premium"){
            resolve("Access Granted to Netflix");
        }

        else{
            reject("Please Subscribe")
        }
        },1000)
    });
}


async function loginAndCheckStatus(user){
    try{
    const data= await getuser(user);
    console.log(data);

    const status= await checkSubscription(data);

    console.log(status);

    }
    catch(e){
        console.log(e);
    }
    
}

async function runSequentially() {
  await loginAndCheckStatus("rahul");
  await loginAndCheckStatus("mohan");
}

runSequentially();


