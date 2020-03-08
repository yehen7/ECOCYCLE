import React from "react";
import CartIteam from "./CartIteam";


export default function CartList({value}){

    const { cart }=value;
    console.log(value,cart);


        return(
           <div className="container-fluid">
              
            {cart.map(item=>{
                return <CartIteam key={item.id} item={item} value={value} />;
            }
                )}
               
           </div>
          
        );
    

}



