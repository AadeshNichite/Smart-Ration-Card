import React, {Component,Fragment} from 'react';
import './UserDashBoard.css';
import { Redirect } from 'react-router-dom';
import  Logout  from '../Logout/Logout';

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
        return <Fragment>
        <Logout/>
            <div className="MainDivUserDashBoard">
            <h1 className="headMainDivUserDashBoard text-center">Smart-Ration Card</h1>
            </div>
        </Fragment>
    }
}

export default UserDashBoard;