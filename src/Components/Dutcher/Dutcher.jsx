import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap"
import BookDisponibiliModal from './BookDisponibiliModal';
import NavBar from "../Navbar/Navbar.jsx"
import DutcherModal from "./DutcherModal"
import DutcherTable from "./DutcherTable"

class Dutcher extends Component {

    render() {
        return (
            <>
                <NavBar />
                <div 
                    style={{color: "#343a40", fontWeight: "bold", textAlign: "center", fontSize: "50px", marginTop: "3vh", marginBottom: "3vh"}}>
                        ODDSMATCHER
                </div>
                <Row>
                    <Col>
                        <DutcherModal /> 
                    </Col>
                    <Col>
                        <BookDisponibiliModal /> 
                    </Col>
                </Row>
                <Row>
                    <DutcherTable/>
                </Row>
                            
            </>
        );
    }
}

export default Dutcher;