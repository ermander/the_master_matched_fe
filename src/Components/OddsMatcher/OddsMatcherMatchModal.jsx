import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, InputGroup, Card } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faFlag } from '@fortawesome/free-solid-svg-icons'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faFutbol } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheck } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'

class OddsMatcherMatchModal extends Component {
    // state = {
    //     show: this.props.show
    // }

    // handleClose = () => { this.setState({ show: false })}

    render() {
        return (
            <>
            <Modal show={this.props.show} onHide={this.props.noShow}>
                <Modal.Body className="pt-0 px-0">
                    {/* SELEZIONE MODALITà NORMALE, BONUS O RIMBORSO*/}
                    <Row className="mt-0" style={{backgroundColor: "#37474f"}}>
                        <Col xs={4}></Col>
                        <Col xs={4}>
                            <Form.Group style={{display: "flex"}}>
                                <InputGroup.Prepend style={{display: "inline-block"}}>
                                    <InputGroup.Text>Tipologia</InputGroup.Text>
                                </InputGroup.Prepend>  
                                <Form.Control 
                                    as="select" 
                                    style={{display: "inline-block"}}
                                    onChange={ (e) => { this.setState({ numero_eventi: e.currentTarget.value })}}
                                >
                                    <option>NORMALE</option>
                                    <option>RIMBORSO</option>
                                    <option>BONUS</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col xs={4}></Col>
                    </Row>
                    {/* INFORMAZIONI MATCH */}
                    <Row>
                        <Col className="px-0" style={{backgroundColor: "#edf1f2"}} xs={3}>
                            {/* INFORMAZIONI SQUADRE, DATA, ORA, RATING ECC... */}
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faCalendarAlt}/>
                                <p>Data: <strong>{this.props.odd.data}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faClock}/>
                                <p>Ora: <strong>{this.props.odd.ora}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faFlag}/>
                                <p>Paese: <strong>{this.props.odd.nazione}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faInfoCircle}/>
                                <p>Torneo: <strong>{this.props.odd.campionato}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faFutbol}/>
                                <p>Casa: <strong>{this.props.odd.home}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faFutbol}/>
                                <p>Ospite: <strong>{this.props.odd.away}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faMoneyCheck}/>
                                <p>Mercato: <strong>{this.props.odd.tipo}</strong></p>
                            </span>
                            <span style={{display: "flex"}}>
                                <FontAwesomeIcon icon={faPercent}/>
                                <p>Rating: <strong>{this.props.odd.rating}%</strong></p>
                            </span> 
                        
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col xs={6}>
                                <Card className="text-center">
                                    <Card.Header style={{backgroundColor: "#a7d7fd"}}>PUNTA</Card.Header>
                                        <Card.Body>
                                            <Card.Title style={{fontSize: "17px"}}>{this.props.odd.home}</Card.Title>
                                                <Card.Text  className="mt-3" style={{border: "2px grey solid", borderRadius: "10px"}}>
                                                    @{this.props.odd.quota}
                                                </Card.Text>
                                                <img src="https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Skybet_hyg0vu.png"></img>
                                        </Card.Body>
                                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                </Card>
                                </Col>
                                <Col xs={6}>
                                <Card className="text-center">
                                    <Card.Header style={{backgroundColor: "#f8cad0"}}>BANCA</Card.Header>
                                        <Card.Body>
                                        <Card.Title style={{fontSize: "17px"}}>{this.props.odd.away}</Card.Title>
                                                <Card.Text className="mt-3" style={{border: "2px grey solid", borderRadius: "10px"}}>
                                                    @{this.props.odd.quota_banca}
                                                </Card.Text>
                                                <img 
                                                    style={{width: "150x", height: "40px"}}
                                                    src="https://res.cloudinary.com/dnadfuxk0/image/upload/v1600693156/Solo%20Capstone/Skybet_hyg0vu.png"
                                                />
                                        </Card.Body>
                                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                                </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="px-0" style={{backgroundColor: "#edf1f2"}} xs={3}></Col>
                    </Row>
                    <Row>
                        <Col xs={7}></Col>
                        <Col xs={5}></Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className="px-0" style={{backgroundColor: "#edf1f2"}}>
                <Button variant="secondary" onClick={this.props.noShow}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.props.noShow}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            </>
        );
    }
}

export default OddsMatcherMatchModal;