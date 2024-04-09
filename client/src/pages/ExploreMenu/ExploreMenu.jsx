import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets.js";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Explore a vast array of programming languages, each with its unique
        syntax and purpose. From the familiar embrace of JavaScript to the
        robustness of Python.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            onClick={() => setCategory(item.menu_name)}
            key={index}
            className={`explore-menu-list-item ${
              category === item.menu_name ? "active" : ""
            }`}
          >
            <img src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
