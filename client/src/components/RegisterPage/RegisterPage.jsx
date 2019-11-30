import React, {Component} from 'react';
import './RegisterPage.css';
import { Redirect} from 'react-router-dom';
import axios from "axios";

class RegisterPage extends Component {
    constructor(props)
    {
        super(props);
        let loggedIn = false;
        this.state ={
            rationNumber: '',
            name : '',
            noOfPeople: '',
            address:'',
            reEnteredPassword:'',
            password: ''
        }
        this.onChange=this.onChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    onChange(e){
        const {name,value} = e.target
        this.setState({
            [name]: value

        })
    }

      submitForm(e){
        e.preventDefault();
        const rationNumber = this.state.rationNumber;
        const name = this.state.name;
        const noOfPeople = this.state.noOfPeople;
        const address = this.state.address;
        const password = this.state.password;
        const reEnteredPassword = this.state.reEnteredPassword;
        if(password === reEnteredPassword){
            this.setState({
                loggedIn : false
            });
        }
        const user = {rationNumber,name,noOfPeople,address,password}

        const config = {
            headers : {
                'Content-type' : 'application/json'
                }
            }

         const body =  JSON.stringify(user);
        axios.post('/api/users',body,config)
                         .then(res => {
                             localStorage.setItem("token",res.data.token);
                             if(res.data.token){
                                this.setState({
                                   loggedIn : true
                            });
                    }  

                });
            }
        render() {
        if(this.state.loggedIn)
        {
            return <Redirect to="/UserDashBoard" />
        }   
        return (
        <div>
            <form onSubmit={this.submitForm} className="MainDiv">
                <h1 className="headRegister text-center">Smart-Ration Card</h1>
                <input type="text" className="dataRegister" id="rationCardNo" name="rationCardNo" placeholder="Enter Ration Card Number" value={this.state.rationCardNo} onChange={this.onChange} />
                <input type="text" className="dataRegister" id="name" name="name" placeholder="Enter Name" value={this.state.name} onChange={this.onChange} />
                <input type="text" className="dataRegister" id="noOfPeople" name="noOfPeople" placeholder="Enter Number of People" value={this.state.noOfPeople} onChange={this.onChange} />
                <input type="text" className="dataRegister" id="address" name="address" placeholder="Address" value={this.state.address} onChange={this.onChange} />
                <input type="password" className="dataRegister" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onChange} />
                <input type="password" className="dataRegister" id="reEnteredPassword" name="reEnteredPassword" placeholder="Re Enter Password" value={this.state.reEnteredPassword} onChange={this.onChange} />
                <button type="submit" className="buttonRegister">submit</button> 
            </form>
        </div>
        )
    }
}
export default RegisterPage;