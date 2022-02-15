import MainNav from "./MainNav";
import HamCloseBtn from "./HamCloseBtn";
import polyLotto from "../images/polylotto-logo-white.png"

const Header = (props) => {
    return(
        <header className="main-header">
            {/* <h2 className="logo">LOG<span>o</span></h2> */}
            <div className="logo">
                <img src={polyLotto}/>
            </div>
            <MainNav />
            <HamCloseBtn hider_={props.hide_}/>
        </header>
    )
}

export default Header;