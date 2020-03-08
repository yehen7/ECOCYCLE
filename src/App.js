import React, { Component } from "react";
import {Switch, Route} from'react-router-dom';
import logo from "./logo.svg";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Login from './components/Login';
import Cart from './components/Cart';
import About from './components/About';
import Default from './components/Default';
import Modal from './components/Modal';

class App extends Component{
  render(){
    return (
  
      <React.Fragment>
       <Navbar/>
       <Switch>
       <Route exact path="/" component={ProductList}></Route>
         <Route path="/details" component={Details}></Route>
         <Route path="/cart" component={Cart}></Route>
         
         <Route path="/about" component={About}></Route>
         <Route path="/login" component={Login}></Route>
         
         <Route  component={Default}></Route>
       </Switch>
      <Modal/>
      </React.Fragment>
     );
  }
}

export default App;
