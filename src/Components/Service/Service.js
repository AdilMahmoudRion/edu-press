import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faProjectDiagram, faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

import { Card } from 'react-bootstrap';
import './Service.css'
import { Link } from 'react-router-dom';


const Service = () => {
    return (
      <div className="Service-Section">
        <div>
          <Card style={{ width: "18rem" }}>
            <div className="mx-auto icon">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <Card.Body>
              <Card.Title className="pb-2 fs-2">Entrepreneurs</Card.Title>

              <Card.Text>
                Must explain mistake denouncie pleasure praisin was born
                complete
              </Card.Text>

              <Link to="/newsFeed">News Link</Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <div className="mx-auto icon">
              <FontAwesomeIcon icon={faProjectDiagram} />
            </div>
            <Card.Body>
              <Card.Title className="pb-2 fs-2">Project Managers</Card.Title>

              <Card.Text>
                Must explain mistake denouncie pleasure praisin was born
                complete
              </Card.Text>
              <Link to="/newsFeed">News Link</Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <div className="mx-auto icon">
              <FontAwesomeIcon icon={faUserGraduate} />
            </div>
            <Card.Body>
              <Card.Title className="pb-2 fs-2">Students</Card.Title>

              <Card.Text>
                Must explain mistake denouncie pleasure praisin was born
                complete
              </Card.Text>
              <Link to="/newsFeed">News Link</Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <div className="mx-auto icon">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
            <Card.Body>
              <Card.Title className="pb-2 fs-2">Learners</Card.Title>

              <Card.Text>
                Must explain mistake denouncie pleasure praisin was born
                complete
              </Card.Text>
              <Link to="/newsFeed">News Link</Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
};

export default Service;