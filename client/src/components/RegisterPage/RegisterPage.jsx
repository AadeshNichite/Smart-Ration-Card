import React from 'react';
import './RegisterPage.css';
import { Link, Switch , Route } from 'react-router-dom';

export const RegisterPage = () => {
    return (
        <div>
            <div className="MainDiv">
                <h1 className="head text-center">Smart-Ration Card</h1>
                <input type="text" className="data" id="rationNumber" placeholder="Enter Ration Card Number" />
                <input type="text" className="data" id="name" placeholder="Enter Name" />
                <input type="text" className="data" id="noOfPeopleInFamily" placeholder="Enter Number of People" />
                <input type="text" className="data" id="address" placeholder="Address" />
                <input type="password" className="data" id="password" placeholder="Password" />
                <input type="password" className="data" id="reEnteredPassword" placeholder="Re Enter Password" />
                <button type="submit" className="button">submit</button>
            </div>   
        </div>
    )
}
