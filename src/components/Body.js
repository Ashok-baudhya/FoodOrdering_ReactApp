import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

 
const Body = () =>{

    // local state Variable -super powerful variable
    const [ListOfResturant, setListOfResturant] = useState([])

    const [filterRestaurent , setFilterRestaurent] = useState([]);

    const [SearchText , setSearchTet] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7829103&lng=79.027659&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        // console.log(json);
        
        setListOfResturant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setFilterRestaurent(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

    };

    // Conditional Rendering(1st option of rendering)
    // if(ListOfResturant.length ==0)
    // {
    //     return<Shimmer/>
    // }

    // Second option of rendering
    return ListOfResturant.length == 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={SearchText} onChange={(e)=>{setSearchTet(e.target.value)}}></input>
                    <button className="btn-search" 
                    onClick={()=>{
                        
                    const filtreRes = ListOfResturant.filter((resData)=> resData.info.name.toLowerCase().includes(SearchText.toLowerCase()));

                    setFilterRestaurent(filtreRes);

                    }}>
                        Search
                    </button>
                </div>
                <button className="filter-btn" 
                onClick={()=>{
                // Filter Logic here on top resturant
                const filterList = ListOfResturant.filter(
                    (res) => res.info.avgRating >= 4.3 
                );
                setFilterRestaurent(filterList);
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
                    filterRestaurent.map((restaurant) => (
                       <Link Key={restaurant.info.id} to={"/restaurent/"+restaurant.info.id}> <ResturantCard key={restaurant.info.id} resData={restaurant}/></Link>
                    ))
                 } 
                
            </div>
    
        </div>
    )
    
    }

    export default Body;