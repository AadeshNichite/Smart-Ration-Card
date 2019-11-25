import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import LoginPageAdmin from './components/LoginPageAdmin/LoginPageAdmin';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <LoginPageAdmin />
    </div>
  );
}

export default App;
