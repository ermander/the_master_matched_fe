import { Modal, Button, Row, Col, Form, InputGroup, FormControl } from "react-bootstrap"
import React, { Component } from 'react';

class MultiplaModal extends Component {
  
  state = {
    show: false,
    numero_eventi: ["",""],
    data_iniziale: "",
    data_finale: "",
    ora_iniziale: "",
    ora_finale: "",
    quota_minima_per_selezione: "",
    quota_minima_totale: ""
  }

  handleClose = () => { this.setState({ show: false })}
  handleShow = () => { this.setState({ show: true })}

  render() {
    return (
      <>
        <Button variant="light" onClick={this.handleShow}>
          Modalità Multipla
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Row>
              <Col xs={6} className="mt-3">
                <Form.Group controlId="selettore_numero_eventi" style={{display: "flex"}}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Numero Eventi</InputGroup.Text>
                  </InputGroup.Prepend>
                    <Form.Control 
                    as="select" 
                    style={{display: "inline-block"}}
                    onChange={ (e) => { this.setState({ numero_eventi: e.currentTarget.value })}}
                    >
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Row className="mt-5">
                  <Col xs={4}>
                    <p>Data e Ora Iniziale: </p>
                  </Col>
                  <Col xs={4}>
                    <InputGroup>
                      <FormControl 
                        type="date"
                        onChange={(e) => {this.setState({ data_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col xs={4}>
                    <InputGroup>
                      <FormControl 
                        type="time" 
                        onChange={(e) => {this.setState({ ora_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <p>Data e Ora Finale: </p>
                  </Col>
                  <Col>
                    <InputGroup>
                      <FormControl 
                        type="date"
                        onChange={(e) => {this.setState({ data_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                  <Col>
                    <InputGroup>
                      <FormControl 
                        type="time" 
                        onChange={(e) => {this.setState({ ora_inizio: e.currentTarget.value})}}/>
                    </InputGroup>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col xs={6}>
                    <p>Quota Minima Per Selezione: </p>
                      <Form.Group>
                        <Form.Control
                        type="text"
                        placeholder="Min"
                        />                      
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <p>Quota Minima Totale: </p>
                    <Form.Group style={{display: "flex"}}>
                      <Form.Control
                        type="text"
                        placeholder="Max"
                        />
                        <InputGroup.Prepend style={{display: "inline-block"}}>
                          <InputGroup.Text>Quota Attuale: </InputGroup.Text>
                        </InputGroup.Prepend>                   
                    </Form.Group>                    
                  </Col>
                </Row>              
              </Col>
              <Col xs={6}>
                {/* INSERIRE RENDEREIZZAZIONE DINAMICA PARTITE MULTIPLE */}
              </Col>         
            </Row>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default MultiplaModal