import React,{Component} from 'react';
import './Logout.css';
import { Link } from 'react-router-dom';

export default class Logout extends Component {
    constructor(props){
        super(props);
        localStorage.removeItem("token");
    }
    render(){
    return (
        <div>
            <navbar className="navbar navbar-dark bg-dark">
                <Link to="/"><button type="submit" className="btn">Logout</button></Link>
            </navbar>
        </div>
    )
    }
}
