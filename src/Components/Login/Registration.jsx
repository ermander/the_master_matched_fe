import React, { Component } from 'react';
import { createBrowserHistory } from "history";
import { Form, Button, Image, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

class Registration extends Component {

    state = {
        email: "",
        password: "",
        username: ""
    }

    register = async () => {
        try {
            const history = createBrowserHistory();
            const data = {
                email: this.state.email,
                password: this.state.password,
                nickname: this.state.username
            }

            const response = await fetch("http://localhost:3002/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            if(response.ok){
                history.push("/oddsmatcher");
            }
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        return (
            <div style={{backgroundColor: "#093f8a", height: "100vh"}}>
            <Row className="no-gutters">
                <Col className="d-flex flex-column align-items-center ">
                <Image  className="imageLogin pt-5" src="https://ildiariodelmatchedbettista.it/wp-content/uploads/2020/05/Schermata-2020-05-29-alle-17.21.10-1024x199.png" fluid />
                <div style={{ backgroundColor: "#f09c41",textAlign: "center",fontSize: "50px",color: "#ffffff", minWidth: "100vw"}} className="mt-3">Sign Up</div>
                <Form className="login pt-4">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{color: "white"}}>Email address</Form.Label>
                        <Form.Control
                            onChange={(e)=>this.setState({email: e.currentTarget.value})}
                            className="inputs"
                            type="email" 
                            placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{color: "white"}}>Password</Form.Label>
                        <Form.Control 
                            onChange={(e)=>this.setState({password: e.currentTarget.value})}
                            className="inputs"
                            type="password" 
                            placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{color: "white"}}>Username</Form.Label>
                        <Form.Control 
                            onChange={(e)=>this.setState({username: e.currentTarget.value})}
                            className="inputs"
                            type="text" 
                            placeholder="username" />
                    </Form.Group>
                    <Row>
                        <Col xs={12}>                                
                            <Link to="/">
                                <p style={{color: "white"}}>
                                    Already have an account? Go to the login page!
                                </p>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} className="d-flex justify-content-center">
                            <Button
                                variant="dark"
                                onClick={this.register}>
                                Sign Up
                            </Button>
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