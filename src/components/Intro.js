import React from "react";

import logo from '../img/pp.png';

import "./Intro.css";

function Intro(){
    return(
    <div className="intro">
        <img src={logo}/>
        <h2>Zeynep Zülal Keskin</h2>
        <h3>Blockchain Developer</h3>
        <button className="email" type= "button">Email</button>
        <button className="linkedin" type= "button">Linkedin</button>
    </div>
    )

}

export default Intro;

