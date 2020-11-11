import React, { Component } from 'react';

// Compontents
import NavBar from "../../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"

// React Boostrap
import { Row, Col } from "react-bootstrap"

class Transactions extends Component {
    render() {
        return (
            <>
            <NavBar />
            <Row>
                <Col xs={1}>
                    <SideBar />
                </Col>
                <Col xs={11}></Col>
            </Row>
            </>
        );
    }
}

export default Transactions;