import React, { useState }from "react";
import "./Cards.css";
import InfoPopup from "./InfoPopup";

const RestaurantContent = ({ restaurantData }) => {
    const ref = restaurantData.photos[0].photo_reference;
    var mylink = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=100&photoreference=${ref}&key=AIzaSyAd-MjEPuE7U7Bt8hBHLFQZ4f8v9Cet8cM&key=AIzaSyAUMrzi_-Y5TdJXaiFJSfZseDtxNlVAMqA`;
    const [openPopup, setOpenPopup] = useState(false)
    const [restaurant, setRestaurant] = useState([])

    const onButtonClick=(restaurant) => {
        setRestaurant(restaurant)
        setOpenPopup(true)
        console.log(restaurant);
    }

    return (
        <div className="card">
            <h2 className="cardTitle">
                 {restaurantData.name} {restaurantData.types[0]}
            </h2>
            <div className="cardBody">
                <img src = {mylink} className="cardImg"/>
            </div>
            <button className="cardButton" onClick={()=>onButtonClick(restaurantData)}>
                View Information
            </button>
            <InfoPopup open={openPopup} restaurant={restaurant} onClose={() => setOpenPopup(false)}/>
        </div>
    )
}

export default RestaurantContent;
