import React, {Component} from 'react';
import './LoginPage.css';
import { Link, Switch , Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
        const user = {
            rationCardNo: this.state.rationCardNo,
            password: this.state.password
          };
        //Login Logic
        // if(username ==="A" && password == "B"){
        //     localStorage.setItem("token","username");
        //     this.setState({
        //         loggedIn: true
        //     })
        // }
        axios.post(`http://localhost:8000/api/auth`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
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
                <input type="text" className="data" id="data" name="username" placeholder="Enter Ration Card Number" value={this.state.username} onChange={this.onChange} />
                <input type="password" className="data" id="data" name="password" placeholder="Enter Password" value={this.state.password} onChange={this.onChange} />
                <button type="submit" className="button">submit</button>
                <Link to='/register'><button type="submit" className="button">Register</button></Link>
            </form>
        </div>
     )
    }
}
export default LoginPage;