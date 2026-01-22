function checkstatus(orderId){
 return new Promise((resolve , reject)=>{
    setTimeout(()=>{
        if(typeof(orderId)==="number"){
            resolve(" Order Shiped");
        }
        else{
            reject("wrong OrderId");
        }
    }, 1000);
 })
}

checkstatus(123)
.then((Response)=>{
 console.log(Response);
})
.catch((e)=>{
    console.log(e);
})

checkstatus("536")
.then((Response)=>{
    console.log(Response);
})
.catch((e)=>{
    console.log(e);
})

async function runtest() {
    try{
    const message =await checkstatus(101);
    console.log(message);
    }
    catch(e){
        console.log(e);
    }

    try{
        const message= await checkstatus("563");
        console.log(message);
    }
    catch(e){
        console.log(e);
    }
}
runtest()