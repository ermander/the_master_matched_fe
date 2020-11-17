import React, { Component } from 'react';
import { Form, Button, Image, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./login.css"

class Login extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col xs={12} className="d-flex flex-column align-items-center">
                    <Image  className="imageLogin pt-5" src="https://res.cloudinary.com/dnadfuxk0/image/upload/v1600095327/Solo%20Capstone/Immagine_k8ekqo.jpg" fluid />
                    <Form className="login pt-5">
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
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
                        <Link to="/oddsmatcher">
                            <Button variant="primary" type="submit">
                                Log In
                            </Button>
                        </Link>
                        <Link to="/registration">  
                            <p id="register-link">New to The Master Matched? Join now.</p>   
                        </Link>               
                    </Form>  
                    </Col>
                </Row>                              
            </div>
        );
    }
}

export default Login;