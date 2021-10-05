// About us section

import React from "react";
import { Card, Button } from "react-bootstrap";
import "./AboutUs.css";
import img from "./img//istockphoto-1317784594-170667a.jpg";


const AboutUs = () => {
  return (
    <div className="">
      <div className="about-section container">
        <div className="p-4 title">
          <h1>
            We share knowledge with
            <br /> <span>the world</span>
          </h1>
        </div>
        <div className="p-4">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="about-details container">
        <h1>Changing learning for the better</h1>
        <p>
          Whether you want to learn or to share what you know, you’ve come to
          the right place. As a global destination for online learning, we
          connect people through knowledge.
        </p>
      </div>

      {/* growing section */}

      <div className="grooming-section pt-5 pb-5">
        <div className="container ps-6 pe-6">
          <div className="text-center">
            <h1 className="fs-1 pt-3">We just keep growing</h1>
            <p className="fs-5 pt-3">
              Our global community and our course catalog get bigger every day.
              Check out our
              <br /> latest numbers as of June 2021.
            </p>
          </div>
          <div className="row justify-content-md-center">
            <div className="col text-center details">
              <h1>44M+</h1>
              <p>Learners</p>
            </div>
            <div className="col text-center details">
              <h1>65K+</h1>
              <p>Instructors</p>
            </div>
            <div className="col text-center details">
              <h1>183K+</h1>
              <p>Courses</p>
            </div>
            <div className="col text-center details">
              <h1>183K+</h1>
              <p>Course enrollments</p>
            </div>
          </div>
          <div className="row justify-content-md-center">
            <div className="col text-center details">
              <h1>44M+</h1>
              <p>Learners</p>
            </div>
            <div className="col text-center details">
              <h1>65K+</h1>
              <p>Instructors</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-container">
        <p>
          We help organizations of all types and sizes prepare for the path
          ahead — wherever it leads. Our curated collection of business and
          technical courses help companies, governments, and nonprofits go
          further by placing learning at the center of their strategies.
        </p>

        <div>
          <Button variant="primary">Learn More</Button>{" "}
        </div>
      </div>

      {/* More information */}
      <div className="container cart">
        <Card
          className="cart-information"
          border="gray"
          style={{ width: "22rem" }}
        >
          <Card.Body>
            <Card.Title className="pt-2 pb-5">Work with us</Card.Title>
            <Card.Text>
              At EduPress, we’re all learners and instructors. We live out our
              values every day to create a culture that is diverse, inclusive,
              and committed to helping employees thrive.
            </Card.Text>
            <Card.Link className="text-white">Join our team</Card.Link>
          </Card.Body>
        </Card>
        <Card
          className="cart-information2"
          border="gray"
          style={{ width: "22rem" }}
        >
          <Card.Body>
            <Card.Title className="pt-2 pb-5">See our research</Card.Title>
            <Card.Text>
              We’re committed to changing the future of learning for the better.
              Dig into our original research to learn about the forces that are
              shaping the modern workplace.
            </Card.Text>
            <Card.Link className="text-white">Learn More</Card.Link>
          </Card.Body>
        </Card>
        <Card
          className="cart-information3"
          border="gray"
          style={{ width: "22rem" }}
        >
          <Card.Body>
            <Card.Title className="pt-2 pb-5">Read our blog</Card.Title>
            <Card.Text>
              Want to know what we’ve been up to lately? Check out the Udemy
              blog to get the scoop on the latest news, ideas and projects, and
              more.
            </Card.Text>
            <Card.Link className="text-white">Read More</Card.Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
