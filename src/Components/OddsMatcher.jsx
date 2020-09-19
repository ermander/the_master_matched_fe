import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap"
import BookDisponibiliModal from './BookDisponibiliModal.jsx';
import MultiplaModal from './MultiplaModal.jsx';
import NavBar from "./Navbar.jsx"
import OddsMatcherModal from "./OddsMatcherModal"
import OddsTable from "./OddsTable"

class OddsMatcher extends Component {

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
                        <OddsMatcherModal /> 
                    </Col>
                    <Col>
                        <BookDisponibiliModal /> 
                    </Col>
                    <Col>
                        <MultiplaModal /> 
                    </Col>
                </Row>
                <Row>
                    <OddsTable/>
                </Row>
                            
            </>
        );
    }
}

export default OddsMatcher;