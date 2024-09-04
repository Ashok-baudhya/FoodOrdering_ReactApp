import React from "react";
import ReactDom from "react-dom/client";



const Header = ()=>{
    return(
        <div className="header">
            <div className="logo">
                <img height={130} src="https://cdn.dribbble.com/users/7004524/screenshots/15197928/media/40944f27c2dcfaf14038f387b4e88c2d.jpg"></img>
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

const Body = () =>{

}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
    
}




const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);

