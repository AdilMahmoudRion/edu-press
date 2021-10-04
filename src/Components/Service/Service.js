import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faProjectDiagram, faUserGraduate, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons'

import { Badge, Card } from 'react-bootstrap';
import './Service.css'


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
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Must explain mistake denouncie pleasure praisin was born
                complete
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
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
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Must explain mistake denouncie pleasure praisin was born
                complete
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
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
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Must explain mistake denouncie pleasure praisin was born
                complete
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card style={{ width: "18rem" }}>
            <div className="mx-auto icon">
              <FontAwesomeIcon icon={faChalkboardTeacher} />
            </div>
            <Card.Body>
              <Card.Title className="pb-2 fs-2">
                Learners
                <Badge className="fs-6" bg="secondary">
                  New 77
                </Badge>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Must explain mistake denouncie pleasure praisin was born
                complete
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
};

export default Service;