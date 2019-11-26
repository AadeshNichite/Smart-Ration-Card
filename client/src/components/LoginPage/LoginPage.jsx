import React, {Component} from 'react';
import './LoginPage.css';
import { Link, Switch , Route } from 'react-router-dom';

class LoginPage extends Component{
    constructor(props)
    {
        super(props);
        let loggedIn = false;
        this.state ={
            username: '',
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
        e.preventDefault()
        const{username,password} = this.state

        //Login Logic

    }

    render(){
        return (
        <div className="MainDiv">
            <form onSubmit={this.submitForm}>
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