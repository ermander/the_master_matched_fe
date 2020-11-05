import React, { Component } from 'react';

// Components
import NavBar from "../../Navbar/Navbar"
import SideBar from "../SideBar/SideBar"

// FontAwasomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

// React bootstrap 
import { Row, Col, Button, Modal, Dropdown, DropdownButton, InputGroup, FormControl } from "react-bootstrap"

class CasinoDetails extends Component {

    state = {
        show: false,
        giocateCasino: [],
        accountsLoading: false,
        conti: [{conto: "Betfair"}, {conto: "Sisal"}, {conto: "Bet365"}]
    }

    handleClose = () => {this.setState({ show: false })}

    handleShow = () => {this.setState({ show: true })}
    
    saveBet = async () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <div>
                <NavBar />
                <Row>
                    <Col xs={1}>
                        <SideBar />
                    </Col>
                    <Col xs={11}>
                        <Row>
                            <Col xs={12}>
                                <h2>Casinò</h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <Button variant="primary" onClick={this.handleShow}>
                                    Nuova Giocata
                                </Button>

                                <Modal show={this.state.show} onHide={this.handleClose}>
                                    <Modal.Header closeButton>
                                    <Modal.Title>Nuova Giocata</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <label>
                                            <strong>Conto</strong>
                                        </label>
                                        <DropdownButton id="dropdown-basic-button" title="Seleziona conto">
                                            {
                                            this.state.accountsLoading 
                                            ?
                                            (
                                                <>
                                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </>

                                            )
                                            :
                                            (
                                                this.state.conti.map((element, i) => {
                                                    return (                                                        
                                                        <>
                                                        <Dropdown.Item href="#/action-1" key={i}>{element.conto}</Dropdown.Item>
                                                        </>
                                                    )
                                                })
                                            )
                                            }                                            
                                        </DropdownButton>

                                        <label>
                                            <strong>Tipologia</strong>
                                        </label>
                                        <DropdownButton id="dropdown-basic-button" title="Seleziona conto">
                                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>                                            
                                        </DropdownButton>

                                        <label>
                                            <strong>Stake</strong>
                                        </label>
                                        <InputGroup size="sm" className="mb-3">
                                            <FormControl
                                                as="textarea"
                                                aria-label="With textarea"
                                            />
                                        </InputGroup>
                                        {/* Inserire input filed per la data */}
                                        <InputGroup>
                                        <InputGroup.Prepend>
                                            <FontAwesomeIcon icon={faCalendarAlt} className="fa-iconss"/>
                                        </InputGroup.Prepend>
                                            <FormControl 
                                                type="date"
                                            />
                                        </InputGroup>

                                        <label>
                                            <strong>Descrizione</strong>
                                        </label>
                                        <InputGroup className="new-user-modal-text-area">
                                        <FormControl 
                                            as="textarea" 
                                            aria-label="With textarea"
                                        />
                                    </InputGroup>                                    
                                        
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={this.handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={this.saveBet}>
                                        Save Changes
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>                                
                            {/* Inserire contatore profitti casino */}
                            </Col>
                        </Row>
                        
                    </Col>
                </Row>                
            </div>
        );
    }
}

export default CasinoDetails;