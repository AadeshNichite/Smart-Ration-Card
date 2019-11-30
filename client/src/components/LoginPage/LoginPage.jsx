import React, {Component} from 'react';
import './LoginPage.css';
import { Link,Redirect} from 'react-router-dom';
import axios from "axios";

class LoginPage extends Component{
    constructor(props)
    {
        super(props);
        let loggedIn = false;
        this.state ={
            rationCardNo: '',
            password: ''
        }
        this.onChange=this.onChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

      submitForm(e){
        e.preventDefault();
        const rationCardNo = this.state.rationCardNo;
        const password = this.state.password;
        const user = {rationCardNo,password}

        const config = {
            headers : {
                'Content-type' : 'application/json'
                }
            }

        const body =  JSON.stringify(user);
        console.log(body)
        axios.post('/api/auth',body,config)
                         .then(res => {
                             if(res.data.token){
                                this.setState({
                                    loggedIn : true
                                });
                                localStorage.setItem("token",res.data.token);
                         }  
                         
                    });
                }

    render(){

    if(this.state.loggedIn)
    {
        return <Redirect to="/UserDashBoard" />
    }   
        return (
        <div>
            <form onSubmit={this.submitForm} className="MainDiv">
                <h1 className="head text-center">Smart-Ration Card</h1>
                <input type="text" className="data" id="data" name="rationCardNo" placeholder="Enter Ration Card Number" value={this.state.rationCardNo} onChange={this.onChange} />
                <input type="password" className="data" id="dataPassword" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                <button type="submit" className="button">submit</button>
                <Link to='/register' className="register">Create Account</Link>
            </form>
        </div>
     )
    }
}
export default LoginPage;