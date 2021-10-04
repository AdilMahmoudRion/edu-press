import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsCard = (props) => {
  const { author, img } = props.news;
  return (
    <div>
      <div>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{ author}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary" size="sm">
              Small button
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default NewsCard;
