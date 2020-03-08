import React, {Component} from "react";
import logo from '../login.jpg';

export default class Signup extends Component{

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <div className="base-container">
                <div className="header">LOGIN</div>
                <div className="contain">
                    <div className="image">
                    <img src={logo} />

                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">USERNAME</label>
                            <input type="text" name="username" placeholder="username"/>


                        </div>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input type="Email" name="Email" placeholder="username"/>


                        </div>
                        <div className="form-group">
                            <label htmlFor="address">USERNAME</label>
                            <input type="text" name="address" placeholder="address"/>


                        </div>
                        <div className="form-group">
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" placeholder="password"/>
                            

                        </div>
                    </div>
                </div>
            <div className="footer">
                <button type="button"  className="btn">
                    LOGIN
                </button>
            </div>
               
            </div>
        );
    }

}

