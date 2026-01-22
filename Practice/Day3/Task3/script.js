const users = [
  { id: 1, name: "Rahul", isPremium: true },
  { id: 2, name: "Amit", isPremium: false }
];


const ordersDB = [
  { userId: 1, item: "Laptop", price: 1000, status: "delivered" },
  { userId: 1, item: "Phone", price: 500, status: "pending" },
  { userId: 2, item: "Tablet", price: 700, status: "delivered" },
  { userId: 1, item: "Phone", price: 1000, status: "delivered" },
];

function getUser( id){
    return new Promise((reslove , reject)=>{
        setTimeout(()=>{
            const user = users.find(u=>u.id===id);
            if(user){
                reslove(user);

            }
            else{
                reject("user not found");
            }
        },1000);
    })
}

function getOrderDetails(id){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            const userOrder = ordersDB.filter(ord=> ord.userId===id);

            if(userOrder){
                reslove(userOrder);
            }
            else{
                reject("Order not found")
            }
        })
    })
}

async function displayid(id) {
    try{
    const user= await getUser(id);

    const orders =await getOrderDetails(id);


    const delivered = orders.filter(u=> u.status==="delivered");


    const discountedOrder= delivered.map(orders=>{
        let newprice=0;
        
        if(user.isPremium){
            newprice=orders.price*0.9;
        }

        else{
            newprice=orders.price;
        }

        return {
            ...orders,
            price : newprice
        }
    });

    let total=0;

    for( let  order of  discountedOrder){
        total+=order.price;
    }

    console.log(`Welcone ${user.name}`);
    console.log("Delivered Ordered " , discountedOrder);
    console.log("total Price of order " , total);

}
catch(e){
    console.log(e);
}

}

displayid(1);