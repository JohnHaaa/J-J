import React, { useState, useEffect }from 'react';
import axios from 'axios';
import "./Cards.css";
import RestaurantContent from './RestaurantCard';


function RestaurantCard() {
  const [checkStatus, setCheckStatus] = useStatus("");
    const[restaurant, setRestaurant] = useState([]);
    const[token,setToken] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchRestaurants = async () => {
          setLoading(true);
          const res = await axios.get("/maps/api/place/nearbysearch/json?location=27.964157,-82.452606&radius=50000&type=restaurant&key=AIzaSyAUMrzi_-Y5TdJXaiFJSfZseDtxNlVAMqA");
          setToken(res.data.next_page_token);
          console.log(token);
          console.log("This was the first output");
          //const res1 = await axios.get('/maps/api/place/nearbysearch/json?maxResult=20&key=AIzaSyAd-MjEPuE7U7Bt8hBHLFQZ4f8v9Cet8cM&pagetoken='+token);
          setRestaurant(res.data.results);
          setLoading(false);
          
        }
        fetchRestaurants();
      }, []);
  
console.log(restaurant);

  
    return (
      <div className="Restaurantcard">
        {restaurant.map(restaurant => (
        <RestaurantContent restaurantData={restaurant} key={restaurant.reference}/>
      ))}
      </div>
    );
  }    

export default RestaurantCard