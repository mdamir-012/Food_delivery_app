// import React from 'react'
import { useState } from "react";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import "./Home.css";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");



  return (
    <div>
      <Header />
      <ExploreMenu  category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
    </div>
  );
};

export default Home;
