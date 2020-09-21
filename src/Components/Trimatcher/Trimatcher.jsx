import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap"
import BookDisponibiliModal from './BookDisponibiliModal';
import NavBar from "../Navbar/Navbar"
import TrimatcherTable from "./TrimatcherTable"
import TrimatcherModal from "./TrimatcherModal"

class Trimatcher extends Component {
    render() {
        return (
            <>
                <NavBar />
                <div 
                    style={{color: "#343a40", fontWeight: "bold", textAlign: "center", fontSize: "50px", marginTop: "3vh", marginBottom: "3vh"}}>
                        TRIMATCHER
                </div>
                <Row>
                    <Col>
                        <TrimatcherModal /> 
                    </Col>
                    <Col>
                        <BookDisponibiliModal /> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <TrimatcherTable />
                    </Col>
                </Row>
                
            </>
        );
    }
}

export default Trimatcher;