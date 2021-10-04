import React from "react";
import { Carousel } from "react-bootstrap";
import "./AboutUs.css";
import img from "./img//istockphoto-1317784594-170667a.jpg";
import img1 from "./img/img3.jpg";
import img2 from "./img/img4.jpg";
import img3 from "./img/istockphoto-1317784594-170667a.jpg";

const AboutUs = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-5 text-success">We just keep growing</h1>
      <div className="about-section">
        <div className="p-4 title">
          <h1>
            We share knowledge with
            <br /> the world
          </h1>
        </div>
        <div className="p-4">
          <img src={img} alt="" />
        </div>
      </div>
      <div className="about-details">
        <h1>Changing learning for the better</h1>
        <p>
          Whether you want to learn or to share what you know, you’ve come to
          the right place. As a global destination for online learning, we
          connect people through knowledge.
        </p>
      </div>

      <div className="slider mx-auto mt-5 mb-5">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>duals alsks</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img className="d-block w-100" src={img2} alt="Second slide" />
            <Carousel.Caption>
              <h3>Rohim</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Third slide" />
            <Carousel.Caption>
              <h3>lasi abaji</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default AboutUs;
