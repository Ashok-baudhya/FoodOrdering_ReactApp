import { LOGO_URL } from "../utils/contents";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{

    // let btnName = "Login";

    const [btnNameReact,setLogOut] = useState("Login")

    return(
        <div className="header">
            <div className="logo">
                <Link to = "/"><img height={130} src={LOGO_URL}></img></Link>
            </div>
            <div className="nav-items">
            <ul>
                <li>
                 <Link to = "/">Home</Link>   
                 </li>
                <li>
                   <Link to="/About">About us</Link>  
                </li>
                <li>
                <Link to="/Contact">Contact Us</Link> 
                 </li>
                <li>Cart</li>
                <button className="login" onClick={()=>{btnNameReact == "Login" ? setLogOut("LogOut") : setLogOut("Login");}}>{btnNameReact}</button>
            </ul>
            </div>
        </div>
    )
}

export default Header;