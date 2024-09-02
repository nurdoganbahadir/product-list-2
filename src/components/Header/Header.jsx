import "./Header.scss";
import { categories } from "../../helper/data";
import React from "react";
import Form from "react-bootstrap/Form";

const Header = () => {
  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="btns">
        {categories.map((item) => (
          <button>{item}</button>
        ))}
      </div>
      <Form.Control
        type="text"
        placeholder="Search Product"
        className=" mr-sm-2 my-4 w-50 m-auto"
      />
    </div>
  );
};

export default Header;
