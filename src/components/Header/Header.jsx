import "./Header.scss";
import { categories } from "../../helper/data";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="btns">
        {categories.map((item) => (
          <button>{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
