import home from "../images/home.svg";
import wallet from "../images/wallet.svg";
import down from "../images/down.svg";
import logout from "../images/logout.svg";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import TranscHistory from "./TransactionHistory";
import "../styles/transactions.css"
import { ConnectWallet, disconnectWallet } from "../api/metamask";


const MainNav = () =>{
    const [connectState, setConnectState] = useState(false);
    const [navOptionsState, setNavOptionsState] = useState(false);
    const [transcState, setTranscState] = useState(false);

    const toggleTransactionHistory = ()=>{
        transcState ? setTranscState(false) : setTranscState(true);
    }

    const toggleConnect = (e)=>{
        e.preventDefault();
        // sets connection status to "CONNECTED", connectState is set to True.
        setConnectState(true)
    }
    const toggleNavOption = (e)=>{
        e.preventDefault();

        // toggles Nav dropDown. "ON(true) or OFF(false)"
        !navOptionsState ? setNavOptionsState(true) : setNavOptionsState(false)
    }
    const disconnect = (e)=>{
        e.preventDefault();

        //  sets The "Connected Status" to "Disconnected". DUMMY_LOGIC: Nav dropdown and connect state
        //  is set to false. 

        setNavOptionsState(false)
        setConnectState(false)
    }

    useEffect(()=>{
        document.querySelector(".App").addEventListener(("click"), ()=>{
            setNavOptionsState(false)
        })
    }, [])
    return (
        <>
            <ul className="main-nav">
                <li className="nav-item">
                    <Link to="/">
                        {/* <img src={home} className="home"alt="home icon"/> */}
                        <i className="fas fa-home"></i>
                    </Link>
                </li>
                {!connectState ? <li><a href="" className="btn-3" onClick={toggleConnect}>Connect</a></li> : 
                    <li  className="wallet-nav">
                        <div className="wallet"><img src={wallet} alt="wallet"/></div>
                        <a href="/" onClick={toggleNavOption}>
                            <img src={down} className="down" alt="home icon"/>
                        </a>
                    </li>
                }
            </ul>
            {
                !navOptionsState ? <></> : createPortal(
                    <div className="nav-options">
                        <ul>
                            <li><a href="#">Wallet</a></li>
                            <li><a href="#" onClick={toggleTransactionHistory}>Recent Transactions</a></li>
                            <hr />
                            <li className="disconnect">
                                <p>Disconnect</p>
                                <a href="#" onClick={disconnect}><img src={logout} alt="disconnect" /></a>
                            </li>
                        </ul>
                    </div>, document.querySelector("body")
                )
            }

            {
                transcState ? <TranscHistory setTranscState={setTranscState}/> : <></>
            }
        </>
    )
}

export default MainNav;