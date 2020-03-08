import React from "react";
import {Link} from "react-router-dom";



export default function CartTotal({value}){

    const {cartSubTotal,cartTax,cartTotal,clearCart }=value;
    


        return(
        <React.Fragment>
            <div classname="container">
                <div className="row">
                    <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right ">
                    <Link to="/">
                        <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>
                            Clear Cart
                        </button>
                    </Link>
                    <h5>
                        <span className="text-title">SubTotal :</span>
                        <strong>RS {cartSubTotal}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">Tax :</span>
                        <strong>RS {cartTax}</strong>
                    </h5>
                    <h5>
                        <span className="text-title">Total:</span>
                        <strong>RS{cartTotal}</strong>
                    </h5>
                    </div>
                </div>
            </div>

        </React.Fragment>);
    

}



