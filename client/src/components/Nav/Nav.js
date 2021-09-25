import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./nav.css"

const Nav = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className="nav">
            <div className="navLeft">SSAM's</div>
            <div className="navCenter">
                <ul className={nav ? "CenterLinksm" : "CenterLinks"}>
                    <li className="centerLinkItems" onClick={() => setNav(false)}>
                        <NavLink exact className="link" to="/">Home</NavLink>
                    </li>
                    <li className="centerLinkItems" onClick={() => setNav(false)}>
                        <NavLink className="link" to="/about">About</NavLink>
                    </li>
                    <li className="centerLinkItems" onClick={() => setNav(false)}>
                        <NavLink className="link" to="/contact">Contact us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navRight">
                <ul className="rightItems">
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>
            <button className="btn" onClick={() => setNav(!nav)}>{nav ? "close" : "open"}</button>
        </div>
    )
}

export default Nav
