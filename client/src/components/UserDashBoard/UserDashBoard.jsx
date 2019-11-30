import React, {Component,Fragment} from 'react';
import './UserDashBoard.css';
import { Redirect } from 'react-router-dom';
import  Logout  from '../Logout/Logout';
import axios from 'axios';


class UserDashBoard extends Component{
    constructor(props){
        super(props)
        const token = localStorage.getItem("token");
        this.state = {
            data :[]
        };
        let loggedIn = true;
        if(token == null){
            loggedIn = false;
        }
        this.state ={
            loggedIn
        }
    }
    
    showdata(){
        const token = localStorage.getItem("token");
        console.log(token)
        const config = {
            headers : {
                'x-auth-token' : token
                }
            }
        
        axios.get('api/auth',config)
              .then(response=>{
                  console.log(response.data);
                  this.setState({data:response})
              })  
    }
    render(){
        if(this.state.loggedIn === false)
        {
            return <Redirect to="/" />
        }
        return <Fragment>
            <Logout/>
            <div>
            <div className="MainDivUserDashBoard">
            <div><button onClick={this.showdata}>show</button></div>
            {/* {this.state.map(i=>{
                return(

                    <div>{i}</div>
                )
                
            })} */}
            </div>
            </div>
        </Fragment>
    }
}

export default UserDashBoard;