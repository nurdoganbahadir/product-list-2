import React from "react";
import { products } from "../../helper/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProductCard from "./ProductCard.jsx";

const ProductList = () => {
  return (
    <>
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {products.map((item) => (
            <ProductCard item={item} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
