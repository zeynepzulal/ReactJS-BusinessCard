import React from "react";

import "./Footer.css"

import twitterIcon from "../img/icontw.png"
import facebookIcon from "../img/iconfcb.png"
import instaIcon from "../img/iconinsta.png"
import gitHupIcon from "../img/icongH.png"

export default function Footer(){
    return (
     <footer>
        <a href =""><img src={twitterIcon}/></a>
        <a href =""><img src={facebookIcon}/></a>
        <a href =""><img src={instaIcon}/></a>
        <a href =""><img src={gitHupIcon}/></a>
    
     </footer>
    )
}
