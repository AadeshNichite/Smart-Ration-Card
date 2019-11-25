import React, {Component} from 'react';
import './StartPage.css';
import LoginPageAdmin from '../LoginPageAdmin/LoginPageAdmin';
import LoginPage from '../LoginPage/LoginPage';

class StartPage extends Component{

    constructor(){
        super();
        this.state ={
            page: "thisPage"
        }
    }
    render(){
        return (
        <div className="MainDiv">
        {
            this.state.page === "thisPage" ?(
            <div className="MainDiv">
                <h1 className="head text-center">Smart-Ration Card</h1>
                <label>Login As A</label>
                <button type="submit" className="button" onClick={()=>this.setState({page:"page"})}>User</button>
                <button type="submit" className="button" onClick={()=>this.setState({page:"ThatPage"})}>Employee</button>
            </div>        
            )
            : this.state.page === "ThatPage" ?(
                <LoginPageAdmin />
                )
                :<LoginPage />
            }
        </div>);
    }
}

export default StartPage;