import { Modal, Button, Row, Col, InputGroup, FormControl } from "react-bootstrap"
import React, { Component } from 'react';

class TrimatcherModal extends Component {
  state = {
    show: false
  }

  handleClose = () => { this.setState({ show: false })}
  handleShow = () => { this.setState({ show: true })}

  render() {
    return (
        <>
        <Button variant="primary" onClick={this.handleShow}>
          Opzioni di Ricerca
        </Button>
  
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Row>
              <Col xs={12}>
                <strong>
                  <p className="ml-4 mb-3">Filtra per Data e Ora:</p>
                </strong>
              </Col>
            </Row>
            <Row>
              <Col xs={4} style={{display: "flex"}} className="mr-1 pr-1">
              <InputGroup >
                <InputGroup.Prepend>
                  <InputGroup.Text>Data e Ora Inizio:</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl 
                  style={{display: "inline-block"}}
                  type="date"
                  onChange={(e) => {this.setState({ data_inizio: e.currentTarget.value})}}/>
                </InputGroup>
                <InputGroup>
                  <FormControl 
                    style={{display: "inline-block",  maxWidth: "125px"}}
                    type="time" 
                    onChange={(e) => {this.setState({ ora_inizio: e.currentTarget.value})}}/>
                </InputGroup>
              </Col>

              <Col xs={4} style={{display: "flex"}} className="ml-1 pl-1">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Data e Ora Fine:</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl 
                    style={{display: "inline-block"}}
                    type="date"
                    onChange={(e) => {this.setState({ data_inizio: e.currentTarget.value})}}/>
                  </InputGroup>
                  <InputGroup>
                    <FormControl 
                      style={{display: "inline-block", maxWidth: "175px"}}
                      type="time" 
                      onChange={(e) => {this.setState({ ora_inizio: e.currentTarget.value})}}/>
                  </InputGroup>
              </Col>

              <Col xs={3} style={{display: "flex"}} className="ml-1 pl-1">
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Quota:</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl 
                    style={{display: "inline-block"}}
                    placeholder="Min."
                    />
                  <FormControl 
                    style={{display: "inline-block"}}
                    placeholder="Max."
                    />
                </InputGroup>
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

export default TrimatcherModal;

