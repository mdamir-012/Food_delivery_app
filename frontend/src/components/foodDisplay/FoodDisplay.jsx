// import React from 'react'
import "./FoodDisplay.css";

import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  console.log(food_list, "food");

  return (
    <div className="food_display" id="food_display">
      <h2>Top dishes near you</h2>
      <div className="food_display_list">
        {food_list.map((elem, i) => {
          console.log(category,elem.category)
          if (category === "All" || category === elem.category) {
            return <FoodItem key={i} {...elem} />;
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
