import React from "react";
import { Card, Button } from "react-bootstrap";

const NewsCard = (props) => {
  const { title, body } = props.news;
  return (
    <div>
      <div>
        <Card style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{body}</Card.Text>
            <Button variant="primary" size="sm">
              Read more..
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default NewsCard;
