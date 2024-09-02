import "./Header.scss";
import { categories } from "../../helper/data";
import React from "react";
import Form from "react-bootstrap/Form";

const Header = ({ setSearch, setSelectedCategory, selectedCategory }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "all" ? "" : category);
  };

  return (
    <div className="header">
      <h1>Products List</h1>
      <div className="btns">
        <button
          className={selectedCategory === "" ? "active" : ""}
          onClick={() => handleCategoryClick("all")}
        >
          ALL
        </button>
        {categories.map((item, index) => (
          <button
            className={selectedCategory === item ? "active" : ""}
            onClick={() => handleCategoryClick(item)}
            key={index}
          >
            {item}
          </button>
        ))}
      </div>
      <Form.Control
        type="search"
        placeholder="Search Product"
        className=" mr-sm-2 my-4 w-50 m-auto"
        onChange={handleSearch}
      />
    </div>
  );
};

export default Header;
