import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div class="container error-container">
      <div class="error-template">
        <h1>Oops!</h1>
        <h2>404 Not Found</h2>
        <div class="error-details">
          Sorry, an error has occured, Requested page not found!
        </div>
        <div class="error-actions">
          <Link className="btn btn-primary btn-lg" to="/home">
            <span class="glyphicon glyphicon-home"></span>
            Take Me Home{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
