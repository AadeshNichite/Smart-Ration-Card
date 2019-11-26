import React from 'react';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import { link, Switch , Route } from 'react-router-dom';
import { RegisterPage } from './components/RegisterPage/RegisterPage'

function App() {
  return (
    <div className="App">
     <Switch>
        <Route exact path="/" component = {LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
      
    </div>
  );
}

export default App;
