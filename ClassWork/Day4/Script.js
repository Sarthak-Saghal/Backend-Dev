// https://dummyjson.com/users

async function userdata() {
    try{
    const res=await fetch(`https://dummyjson.com/users`);
    const data = await res.json();
    console.log(data);
    }
    catch(error){
        console.log(error);
    }
    
}

userdata();

fetch(`https://dummyjson.com/users`)
.then((Response)=>{
     return Response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((e)=>{
    console.log(e);
});

