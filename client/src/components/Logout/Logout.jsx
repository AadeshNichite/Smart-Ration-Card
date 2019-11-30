import React,{Component} from 'react';
import './Logout.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token");
    }
    render(){
    return (
        <nav>
          <ul>
            <li id="log-out-button"><Link to="/" id="signout">Log Out</Link></li>          
          </ul>
        </nav>
    )
    }
}