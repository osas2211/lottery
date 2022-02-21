import MainNav from "./MainNav";
import polyLotto from "../images/polylotto-logo-white.png"


const Header = (props) => {
    return(
        <header className="main-header">
            <div className="logo">
                <img alt="" src={polyLotto}/>
            </div>
            <MainNav />
        </header>
    )
}

export default Header;