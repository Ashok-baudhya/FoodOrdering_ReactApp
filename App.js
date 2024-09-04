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

const ResturantCard = ()=>{
   return(
    <div className="res-card">
        <img className="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/miwg0f0fr0b1al6hhc9p"></img>
        <h4>Jayaka</h4>
        <h4>North Indian, South Indian</h4>
        <h4>4.1 Star</h4>
        <h4>30 minutes</h4>
    </div>
   ) 
}

const Body = () =>{
return(
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
            <ResturantCard/>
        </div>

    </div>
)

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

