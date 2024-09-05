import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";


const Body = () =>{

    // local state Variable -super powerful variable
    const [ListOfResturant, setListOfResturant] = useState(resList)

    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                // Filter Logic here
                const filterList = ListOfResturant.filter(
                    (res) => res.info.avgRating >= 4.3
                );
                setListOfResturant(filterList);
                }}>
                    Top Rated Resturant
                </button>
            </div>
            <div className="res-container">
    {/* 
                <ResturantCard resData ={resList[0]}/>
                <ResturantCard resData ={resList[1]}/>
                <ResturantCard resData ={resList[2]}/>
                <ResturantCard resData ={resList[3]}/>
                <ResturantCard resData ={resList[4]}/>
                <ResturantCard resData ={resList[5]}/>
                <ResturantCard resData ={resList[6]}/>
                <ResturantCard resData ={resList[7]}/> */}
                
    {/* 
            //itretrate restaurent list using map */}
                 {
                    ListOfResturant.map((restaurant) => (
                        <ResturantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                 } 
                
            </div>
    
        </div>
    )
    
    }

    export default Body;