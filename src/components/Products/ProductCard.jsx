import "./ProductCard.scss";
import Col from "react-bootstrap/Col";
import React from "react";
import Card from "react-bootstrap/Card";
import { MdFavorite } from "react-icons/md";

const ProductCard = ({ item, key }) => {
  return (
    <Col xs={12} md={6} lg={4} xl={3} key={key}>
      <Card className="rounded-2 m-auto card" role="button">
        <Card.Header className="d-flex justify-content-between">
          <Card.Title>{item.price} $</Card.Title>
          <MdFavorite size={30} />
        </Card.Header>
        <Card.Img variant="top" src={item.image} className="player-logo" />

        <Card.Footer className="card__over">
          <Card.Title>{item.title}</Card.Title>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default ProductCard;
