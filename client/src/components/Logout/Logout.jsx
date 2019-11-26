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
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <link to="/"><button type="submit" className="button">submit</button></link>
            </nav>
        </div>
    )
    }
}
