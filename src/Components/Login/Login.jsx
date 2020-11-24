import React, { Component } from 'react';
import { Form, Button, Image, Row, Col } from "react-bootstrap"
import { createBrowserHistory } from "history";
import { Link } from "react-router-dom"
import "./login.css"

class Login extends Component {

    state = {
        email: "",
        password: "",
    }

    login = async () => {
        const history = createBrowserHistory();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const res = await fetch(`https://the-master-matched-be.herokuapp.com/login`, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body: JSON.stringify(data),
        })
        if (res.ok) {
          console.log(res);
          // const response = await res.json()
          //console.log(json)
          //localStorage.setItem("accessToken", json.token)
          //localStorage.setItem("refreshToken", json.refreshToken)
          history.push("/oddsmatcher");
          window.location.href = "https://the-master-matched-be.herokuapp.com/oddsmatcher"
        }
      }


    render() {
        return (
            <div style={{backgroundColor: "#093f8a", height: "100vh"}}>
                <Row className="no-gutters">
                    <Col className="d-flex flex-column align-items-center ">
                    <Image  className="imageLogin pt-5" src="https://ildiariodelmatchedbettista.it/wp-content/uploads/2020/05/Schermata-2020-05-29-alle-17.21.10-1024x199.png" fluid />
                    <div style={{ backgroundColor: "#f09c41",textAlign: "center",fontSize: "50px",color: "#ffffff", minWidth: "100vw"}} className="mt-3">Sign In</div>
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
                        <Row>
                            <Col xs={12}>                                
                                <Link to="/register">
                                    <p style={{color: "white"}}>
                                        New to The Master Matched? Creat a new account now!
                                    </p>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="d-flex justify-content-center">
                                <Button
                                    variant="dark"
                                    onClick={this.login}>
                                    Submit
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

export default Login;