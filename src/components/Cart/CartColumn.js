import React from "react";


export default function CartColumn(){

    

        return(
            <div className="container-fluid  text-none d-none d-lg-block " >
                <div className="row">
                    <div className="col-10 mx-auto col-lg-1 ">
                     <p className="text-uppercase">products</p>   
                    </div>
                    <div className="col-10 mx-auto col-lg-1 ">
                     <p className="text-uppercase">name of the products</p>   
                    </div>
                    <div className="col-10 mx-auto col-lg-1 ">
                     <p className="text-uppercase">price</p>   
                    </div>
                    <div className="col-10 mx-auto col-lg-1 ">
                     <p className="text-uppercase">quantity</p>   
                    </div>
                    <div className="col-10 mx-auto col-lg-1 ">
                     <p className="text-uppercase">remove</p>   
                    </div>
                    <div className="col-10 mx-auto col-lg-1 ">
                     <p className="text-uppercase">total</p>   
                    </div>
                </div>

            </div>
          
        );
    

}

