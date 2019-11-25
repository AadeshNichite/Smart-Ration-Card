import React, {Component} from 'react';
import './LoginPage.css';

class LoginPage extends Component{


    render(){
        return <div className="MainDiv">
        <h1 className="head text-center">Smart-Ration Card</h1>
        <input type="text" className="data" id="data" placeholder="Enter Ration Card Number" />
        {/* <button type="submit" className="button" onClick={()=> this.show()}>submit</button> */}
        <button type="submit" className="button">submit</button>
        </div>
    }
}

export default LoginPage;