import React, {Component} from 'react';
import './LoginPage.css';
import { Link, Switch , Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
// import { axios } from 'axios';
import axios from "axios";

class LoginPage extends Component{
    constructor(props)
    {
        super(props);
        let loggedIn = false;
        this.state ={
            rationCardNo: '',
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
        e.preventDefault();
        const { rationCardNo,password } = this.state;
        console.log(rationCardNo);
        console.log(password);
        // Login Logic
        axios
        .post("http://localhost:8000/api/auth", { rationCardNo, password })
        .then(response => {
            // console.log(response)
            this.setState({
            loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
        });
    }

    render(){

    if(this.state.loggedIn)
    {
        return <Redirect to="/UserDashBoard" />
    }    
        return (
        <div>
            <form onSubmit={this.submitForm} className="MainDiv">
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

// class LoginPage extends React.Component {
//     constructor(props)
//     {
//         state = {
//             name: '',
//         }
//     }

//   handleChange = event => {
//     this.setState({ name: event.target.value });
//   }

//   handleSubmit = event => {
//     event.preventDefault();

//     const user = {
//       name: this.state.name
//     };

//     axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//       .then(res => {
//         console.log(res);
//         console.log(res.data);
//       })
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//           </label>
//           <button type="submit">Add</button>
//         </form>
//       </div>
//     )
//   }
// }
export default LoginPage;