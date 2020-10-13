import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap"
import NavBar from "../Navbar/Navbar"
import "./puntaPunta.css"

class PuntaPunta extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div className="div-title">
                    <p className="title">CALCOLATORE PUNTA - PUNTA</p>
                </div>

                <Row>
                    <Col xs={6}></Col>
                    <Col xs={6}></Col>
                </Row>
                
            </>
        );
    }
}

export default PuntaPunta;