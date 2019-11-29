import React from 'react';
import './RegisterPage.css';
// import { Link, Switch , Route } from 'react-router-dom';

export const RegisterPage = () => {
    




    return (
        <div>
            <div className="MainDivRegister">
                <h1 className="headRegister text-center">Smart-Ration Card</h1>
                <input type="text" className="dataRegister" id="rationNumber" placeholder="Enter Ration Card Number" />
                <input type="text" className="dataRegister" id="name" placeholder="Enter Name" />
                <input type="text" className="dataRegister" id="noOfPeopleInFamily" placeholder="Enter Number of People" />
                <input type="text" className="dataRegister" id="address" placeholder="Address" />
                <input type="password" className="dataRegister" id="password" placeholder="Password" />
                <input type="password" className="dataRegister" id="reEnteredPassword" placeholder="Re Enter Password" />
                <button type="submit" className="buttonRegister">submit</button>
            </div>   
        </div>
    )
}
