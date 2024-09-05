import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import resList from "../utils/mockData";

 
const Body = () =>{

    // local state Variable -super powerful variable
    const [ListOfResturant, setListOfResturant] = useState(resList)

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7829103&lng=79.027659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
        setListOfResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

    };

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