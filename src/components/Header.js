import { LOGO_URL } from "../utils/contents";

const Header = ()=>{
    return(
        <div className="header">
            <div className="logo">
                <a href="index.html"><img height={130} src={LOGO_URL}></img></a>
            </div>
            <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    )
}

export default Header;