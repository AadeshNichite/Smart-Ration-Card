import React,{Component} from 'react';
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
                <Link to="/"><button type="submit" className="button">submit</button></Link>
            </navbar>
        </div>
    )
    }
}
