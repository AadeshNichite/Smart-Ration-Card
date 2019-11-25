import React, {Component} from 'react';
import './LoginPage.css';

class LoginPage extends Component{

    show(){
        let x=document.getElementById("data").value;
        console.log(x);
    }
    render(){
        return <div className="MainDiv">
        <img src="https://joeschmoe.io/api/v1/Aadesh" alt="Avatar" />
        <h1 className="text-center">Smart-Ration Card</h1>
        <input type="text" className="data" id="data" placeholder="Enter Ration Card Number" />
        <button type="submit" className="button" onClick={()=> this.show()}>submit</button>
        </div>
    }
}

export default LoginPage;