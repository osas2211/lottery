import polyLotto from "../images/polylotto-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from '@fortawesome/free-brands-svg-icons'
export const Footer = ()=>{

    return (
        <footer className="main-footer">
            <div className="container">
                <div>
                    <small>about</small>
                    <ul>
                        <li><a href="#">contact</a></li>
                        <li><a href="#">brand</a></li>
                        <li><a href="#">blog</a></li>
                        <li><a href="#">community</a></li>
                    </ul>
                </div>
                <div>
                    <small>help</small>
                    <ul>
                        <li><a href="#">customer support</a></li>
                        <li><a href="#">troubleshooting</a></li>
                        <li><a href="#">guides</a></li>
                    </ul>
                </div>
                <div>
                    <small>developers</small>
                    <ul>
                        <li><a href="#">github</a></li>
                        <li><a href="#">documentation</a></li>
                        <li><a href="#">audits</a></li>
                        <li><a href="#">careers</a></li>
                    </ul>
                </div>
                <div className="logo">
                    <img alt="" src={polyLotto}/>
                    <FontAwesomeIcon icon="fab fa-github" />
                </div>
            </div>
        </footer>
    )
}