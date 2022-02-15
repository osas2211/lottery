import hamburger from "../images/icon-hamburger.svg";
import closeImg from "../images/icon-close.svg";
import { useState } from "react";

const HamCloseBtn = (props) => {
    const [display, setDisplay] = useState(["close", "ham show"])
    const hamOpenHandler = ()=>{
        setDisplay(["ham show", "close"])
        props.hider_(" ")
    } 
    const hamCloseHandler = ()=>{
        setDisplay(["close", "ham show"])
        props.hider_("hide-nav")
    }
    return (
        <>
            <a href="#" className={display[1]} onClick={hamOpenHandler}>
                <img src={hamburger} alt="" srcSet=""></img>
            </a>
            <a href="#" className={display[0]} onClick={hamCloseHandler}>
                <img src={closeImg} alt="" srcSet=""></img>
            </a>
        </>
    )
}

export default HamCloseBtn;