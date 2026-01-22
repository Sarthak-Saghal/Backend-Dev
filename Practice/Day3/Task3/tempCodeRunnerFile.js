async function displayid(id) {
    try{
        const user = await getUser(id);
        const orders= await getOrderDetails(id);
        
        const deliveredOrder =orders.filter(u=> u.status==="delivered");

        const discountedOrder=deliveredOrder.map(order=>{
            let newPrice;

            if(user.isPremium){
                newPrice=order.price*0.9;

            }

            else{
                newPrice=order.price;
            }

            return{
                ...order,
                price: newPrice
            };
        });

        let total=0;

        for(let order of discountedOrder){
            total+=total+order.price;
        }


        console.log(`Welcome ${user.name} 👋`);
        console.log("Delivered Orders:", discountedOrder);
        console.log("Final Total:", total);
    }
    catch(e){
        console.log(e);
    }
}

displayid(1);