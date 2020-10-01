import React, { Component } from 'react';
import { Row, Col } from "react-bootstrap"
import MultiplaModal from './MultiplaModal.jsx';
import OddsMatcherModal from "./OddsMatcherModal"
import OddsmatcherTable from "./OddsmatcherTable"
import NavBar from "../Navbar/Navbar"
import "./oddsmatcher.css"

class OddsMatcher extends Component {

    state={
        selettoreSport: "",
        selettoreMercato: "",
        // Inserire filed per gestire la selezione delle date!!
        liquiditàMin: "",
        quotamin: "",
        quotaMax: "",
        puntataRimborso: "",
        valoreRimborso: "",
        show: false
    }

    handleShow = () => {
        this.setState({ show: true})
    }

    handleClose = () =>  {
        this.setState({ show: false })
    }

    selezioneFiltri = () => {

    }

    render() {
        return (
            <>
                <NavBar />
                <div 
                    style={{
                        color: "#343a40", 
                        fontWeight: "bold", 
                        textAlign: "center", 
                        fontSize: "50px", 
                        marginTop: "3vh", 
                        marginBottom: "3vh"
                        }}>
                        ODDSMATCHER
                </div>
                <Row>
                    <Col>
                        <OddsMatcherModal /> 
                    </Col>
                    <Col>
                        <MultiplaModal /> 
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <OddsmatcherTable />
                    </Col>
                </Row>
                            
            </>
        );
    }
}

export default OddsMatcher;