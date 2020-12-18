//import React, { Component } from 'react';
import "./App.css";
import logo from "./chrome-logo.svg";


const Hello =(x) =>{

        return (
            <div className= "f1 tc" ><h5>Hello world
            </h5>
            <p>{x.greetings} </p>
            <img src= {logo} className="App-logo" alt="logo" />
            
                        </div>
        
        
        )
    
}

export default Hello;