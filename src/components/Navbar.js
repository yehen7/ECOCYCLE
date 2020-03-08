import React, {Component} from "react";
import {Link} from 'react-router-dom';
import logo from '../logo.ico';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

export default class Navbar extends Component{

    render()
    {
        return(
          <Navw className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5" >
              <Link to='/'>
                  <img src={logo} alt="store" className="navbar-brand"/>
              </Link>
            <ul className="navbar-nav align-items-center">

                <li className="nav-item ml-5">
                    <Link to='/' className="nav-link">Products</Link>
                    
                </li>
                <li className="nav-item ml-5">
                <Link to='/about' className="nav-link">About Us</Link>
                </li>
                <li className="nav-item ml-5">
                <Link to='/login' className="nav-link">Sign Up/Login</Link>
                </li>
            </ul>
            <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <i className="fas fa-cart-plus"/>My Cart
                </ButtonContainer>
            </Link>
          </Navw>
        );
    }

}

const Navw=styled.nav `

background:var(--mainBlack);

.nav-link{
    color:var(--mainWhite);
    font-size:1.3rem;
    text-transfrom:Capitalize;
}

`;

 
