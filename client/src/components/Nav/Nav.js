import { useState } from "react"
import "./nav.css"

const Nav = () => {
    const [nav, setNav] = useState(false)
    
    return (
        <div className="nav">
            <div className="navLeft">SSAM's</div>
            <div className="navCenter">
                <ul className="CenterLinks">
                    <li className="centerLinkItems" onClick={() => setNav(false)}>
                        <a href="#home" className="link" >Home</a>
                    </li>
                    <li className="centerLinkItems" onClick={() => setNav(false)}>
                        <a href="#about" className="link">About</a>
                    </li>
                    <li className="centerLinkItems" onClick={() => setNav(false)}>
                        <a href="#members" className="link">Members</a>
                    </li>
                    <li className="centerLinkItems" onClick={() => setNav(false)}>
                        <a href="#contact" className="link">Contact us</a>
                    </li>
                </ul>
            </div>
            <div className="navRight">
                <ul className="rightItems">
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
            <div className="menu">
                <span className={nav? "" : ""}></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

export default Nav


// films to be downloaded
// 12 strong, southpaw
