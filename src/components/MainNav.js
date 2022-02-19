import React, { useState } from "react";
import { ConnectWallet, disconnectWallet } from "../api/metamask";


const MainNav = () =>{
    return (
        <ul className="main-nav">
            <li className="nav-item"><a href="/" >Home</a></li>
            <li className="nav-item"><a href="#" >About</a></li>
            <li><a href="/coming" className="btn">$Buy Token</a></li>
            <li><a href="/#play" className="btn">Play Now</a></li>
        </ul>
    )
}

export default MainNav;