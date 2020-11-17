import React, { Component } from 'react';

// React Bootstrap
import { Row, Col, Image, Form, Button } from "react-bootstrap"

// React Router Dom
import { Link } from "react-router-dom"

class Registration extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} className="d-flex flex-column align-items-center">
                    <Image  className="imageLogin pt-5" src="https://res.cloudinary.com/dnadfuxk0/image/upload/v1600095327/Solo%20Capstone/Immagine_k8ekqo.jpg" fluid />

                    <Form className="pt-5">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control 
                                className="inputs"
                                type="email" 
                                placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                                className="inputs"
                                type="password" 
                                placeholder="Password" />
                        </Form.Group>
                        <div style={{display: "flex"}}>
                            <Form.Group className="mr-2">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                    className="inputs"
                                    type="text" 
                                    placeholder="Name" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Surname</Form.Label>
                                <Form.Control 
                                    className="inputs"
                                    type="text" 
                                    placeholder="Surname" />
                            </Form.Group>
                        </div>
                        <Row>
                            <Col xs={6}>
                                <Link to="/oddsmatcher">
                                    <Button variant="primary" type="submit">
                                        Log In
                                    </Button>
                                </Link>
                            </Col>
                            <Col xs={6} style={{display: "flex"}}>
                                <Link to="/">  
                                    <p className="mt-3 ml-3">Already have an account? Go to the login page.</p>   
                                </Link> 
                            </Col>
                        </Row>
                    </Form>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Registration;