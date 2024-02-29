import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Header = () => {

    const [btnNameReact,setbtnNameReact] = useState("Login");
    console.log("Header render");
    

    useEffect(() => {
        console.log("useEffect Called");
    },[btnNameReact])


    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                <img className="logo" src={LOGO_URL}></img>
                </Link>
            </div>
            <div className="nav-items">
        <ul>
            <li><Link className="link-res" to="/">Home</Link></li>
            <li><Link className="link-res" to="/about">About us</Link></li>
            <li><Link className="link-res" to="/contact-us">Contact us</Link></li>
            <li><Link className="link-res" to="/cart">Cart</Link></li>
            <button className="login" onClick={ () => {
                btnNameReact == "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
            }}>{btnNameReact}</button>
        </ul>
            </div>
        </div>
    );
};

export default Header;