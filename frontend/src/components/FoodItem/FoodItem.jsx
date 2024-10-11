// import React from 'react'
import { useContext, useState } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ _id, name, price, description, image, category }) => {
  const [itemCount, setItemCount] = useState(0);
  
  const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);


  return (
    <div className="food_item">
      <div className="food_item_container">
        <img src={image} className="food_item_image" alt="" />
        {!cartItems[_id] ? (
          <img
            onClick={() => addToCart(_id)}
            src={assets.add_icon_white}
            className="add"
            alt=""
          />
        ) : (
          <div className="food_item_counter">
            <img
              onClick={() => removeFromCart(_id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[_id]}</p>
            <img
              onClick={() => addToCart(_id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food_item_info">
        <div className="food_item_name_rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food_item_desc">{description}</p>
        <p className="food_item_price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
