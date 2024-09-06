import { CDN_URL } from "../utils/contents";

const ResturantCard = (props)=>{
    const {resData}=props;
    const {name,cuisines,cloudinaryImageId,avgRating,costForTwo} =resData?.info;

   return(
    <div className="res-card">
        <img className="res-logo" src={CDN_URL+ resData.info.cloudinaryImageId}></img>
        <h4>{name}</h4>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating == null ? "0" : avgRating} star</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
   ) 
}

export default ResturantCard;