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
                rationCardNo: '',
                name : '',
                noOfPeople: '',
                address:'',
                reEnteredPassword:'',
                password: ''
               
        }
        this.handleChange=this.handleChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    handleChange(e){
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
    }

      submitForm(e){
        e.preventDefault();
        console.log(this.state.rationCardNo)
        const rationCardNo = this.state.rationCardNo;
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
        const user = {rationCardNo,name,noOfPeople,address,password}

        const config = {
            headers : {
                'Content-type' : 'application/json'
                }
            }

         const body =  JSON.stringify(user);
        axios.post('/api/users',body,config)
                         .then(res => {
                            //  localStorage.setItem("token",res.data.token);
                             sessionStorage.setItem("token",res.data.token);
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
            <form className="MainDiv">
                <h1 className="headRegister text-center">Smart-Ration Card</h1>
                <input type="text" className="dataRegister" id="rationCardNo" name="rationCardNo" placeholder="Enter Ration Card Number" onChange={this.handleChange} />
                <input type="text" className="dataRegister" id="name" name="name" placeholder="Enter Name" onChange={this.handleChange} />
                <input type="text" className="dataRegister" id="noOfPeople" name="noOfPeople" placeholder="Enter Number of People" onChange={this.handleChange} />
                <input type="text" className="dataRegister" id="address" name="address" placeholder="Address" onChange={this.handleChange} />
                <input type="password" className="dataRegister" id="password" name="password" placeholder="Password"  onChange={this.handleChange} />
                <input type="password" className="dataRegister" id="reEnteredPassword" name="reEnteredPassword" placeholder="Re Enter Password" onChange={this.handleChange} />
                <button type="submit" className="buttonRegister" onClick={this.submitForm}>submit</button> 
            </form>
        </div>
        )
    }
}
export default RegisterPage;