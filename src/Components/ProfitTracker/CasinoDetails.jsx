import React, { Component } from 'react';

// Components
import NavBar from "../Navbar/Navbar"
import SideBar from "./SideBar"

// React bootstrap 
import { Row, Col } from "react-bootstrap"

class CasinoDetails extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Row>
                    <Col xs={1}>
                        <SideBar />
                    </Col>
                    <Col xs={11}>
                        
                    </Col>
                </Row>                
            </div>
        );
    }
}

export default CasinoDetails;