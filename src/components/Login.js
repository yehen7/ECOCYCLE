import React, {Component} from "react";
import logo from '../login.jpg';
import {ButtonContainer} from "./Button";
export default class Login extends Component{

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
                            <label htmlFor="password">PASSWORD</label>
                            <input type="password" name="password" placeholder="password"/>
                            

                        </div>
                    </div>
                </div>
            <div className="footer">
            <ButtonContainer type="button" >
                    LOGIN
                </ButtonContainer>
            </div>
               
            </div>
        );
    }

}

