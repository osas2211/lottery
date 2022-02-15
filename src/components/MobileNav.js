const MobileNav = (props) => {
    return (
        <ul className={"mobile-nav " + props.hide}>
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="/coming" className="btn">$Buy Token</a></li>
            <li><a href="/#play" className="btn">Play Now</a></li>
        </ul>
    )
}

export default MobileNav;