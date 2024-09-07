import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/contents";

RestaurentMenu = () =>{

        const [resInfo, setResInfo] = useState(null);

        const {resId} =useParams();

    useEffect(() =>{
        fetchMenu();
    }, []);

    const fetchMenu = async () =>{
        const data = await fetch( MENU_API+resId );

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);
    }

    if(resInfo == null) return <Shimmer/>

    const {name , cuisines ,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info; 
    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);
  
    return(
        <div>
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2></h2>
            <ul>
            
            {/* map Function */}

                {itemCards.map(item =><li key={item.card.info.id}>
                    {item.card.info.name} - {item.card.info.price/100} Rs</li> )}

        {/* --------------------------------------------------------------------------- */}
               
                {/* <li>{itemCards[0].card.info.name}</li>
                <li>{itemCards[1].card.info.name}</li> */}

            </ul>
        </div>
    )
}

export default RestaurentMenu;