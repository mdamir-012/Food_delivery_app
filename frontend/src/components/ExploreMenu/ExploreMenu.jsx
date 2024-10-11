// import React from 'react'
import "./ExploreMenu.css";
import { menu_list } from "../../assets/frontend_assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore_menu" id="explore_menu_id">
      <h1>Explore our menu</h1>
      <p className="explore_menu_text">
        {" "}
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the fitness ingredients and elevate your dining
        experience,one delicious meal at a time.
      </p>
      <div className="explore_menu_list">
        {menu_list.map((elem, i) => (
          <div onClick={()=>setCategory(prev=>prev===elem.menu_name?"All":elem.menu_name)} className="explore_menu_list_item" key={i}>
            <img className={category===elem.menu_name?"active":"" } src={elem.menu_image} alt="" />
            <p>{elem.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
