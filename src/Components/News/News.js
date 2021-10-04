// import Button from '@restart/ui/esm/Button';
import "./News.css";
import { Card, Button } from "react-bootstrap";

const News = () => {
  return (
    <div className="container news">
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title></Card.Title>
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

export default News;
