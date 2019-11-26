import React, {Component} from 'react';
import './UserDashBoard.css';
import { Redirect } from 'react-router-dom';
// import  Logout  from '../Logout/Logout';

class UserDashBoard extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token");

        let loggedIn = true;
        if(token == null){
            loggedIn = false;
        }
        this.state ={
            loggedIn
        }
    }
    render(){
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/" />
        }
        return <div className="MainDiv">
        <h1 className="head text-center">Smart-Ration Card</h1>
        </div>
    }
}

export default UserDashBoard;