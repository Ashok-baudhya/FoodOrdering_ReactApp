import React from "react";
import ReactDom from "react-dom/client";



const Header = ()=>{
    return(
        <div className="header">
            <div className="logo">
                <img height={100} src="https://image.similarpng.com/very-thumbnail/2021/09/Good-food-logo-design-on-transparent-background-PNG.png"></img>
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

