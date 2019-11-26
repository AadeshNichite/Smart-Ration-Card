import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import { link, Switch , Route } from 'react-router-dom';
import { RegisterPage } from './components/RegisterPage/RegisterPage';
import  UserDashBoard from './components/UserDashBoard/UserDashBoard';

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path="/" component = {LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/UserDashBoard" component={UserDashBoard} />
      </Switch>
      
    </div>
  );
}

export default App;
