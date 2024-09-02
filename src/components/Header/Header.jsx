import "./Header.scss";
import { categories } from "../../helper/data";
import React from "react";
import Form from "react-bootstrap/Form";

const Header = ({ setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="btns">
        {categories.map((item) => (
          <button>{item}</button>
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
