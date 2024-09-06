import { LOGO_URL } from "../utils/contents";
import { useState } from "react";

const Header = ()=>{

    // let btnName = "Login";

    const [btnNameReact,setLogOut] = useState("Login")

    return(
        <div className="header">
            <div className="logo">
                <a href="index.html"><img height={130} src={LOGO_URL}></img></a>
            </div>
            <div className="nav-items">
            <ul>
                <li className="home">Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button className="login" onClick={()=>{btnNameReact == "Login" ? setLogOut("LogOut") : setLogOut("Login");}}>{btnNameReact}</button>
            </ul>
            </div>
        </div>
    )
}

export default Header;