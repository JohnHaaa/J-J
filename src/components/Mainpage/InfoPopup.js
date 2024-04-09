import React from 'react'
import './InfoPopup.css'
import ReactDOM from 'react-dom'
function InfoPopup({ open, onClose, restaurant }) { 
    if (!open) return null
    return ReactDOM.createPortal(
    <>
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={onClose}> Close </button>
                <h1 className="title"> {restaurant.name} </h1>
            <ul>
                <li className="service">
                    Service Type: :{restaurant.types[1]}
                </li>
                <li className="location">
                    Address: {restaurant.vicinity}
                </li>
                <li className="cost">
                    Cost: {restaurant.price_level}
                </li>
                <li className="food">
                    Food Type:
                </li>
            </ul>
            <button className="writeButton">
                Write a review
            </button>
            <button className="readButton">
                Read the reviews
            </button>
            </div>
        </div>
    </>,
    document.getElementById('portal')
  )
}

export default InfoPopup