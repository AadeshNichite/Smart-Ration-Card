import React, {Component} from 'react';
import './LoginPage.css';
import { Link, Switch , Route } from 'react-router-dom';

class LoginPage extends Component{
    // constructor(props)
    // {
    //     let loggedIn = false;
    //     this.state ={
    //         username: '',
    //         password: ''
    //     }
    // }

    render(){
        return (
        <div className="MainDiv">
            <h1 className="head text-center">Smart-Ration Card</h1>
            <input type="text" className="data" id="data" placeholder="Enter Ration Card Number" />
            <input type="password" className="data" id="data" placeholder="Enter Password" />
            <button type="submit" className="button">submit</button>
            <Link to='/register'><button type="submit" className="button">Register</button></Link>
        </div>
     )
    }
}
export default LoginPage;